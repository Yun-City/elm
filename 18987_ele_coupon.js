const {
  checkCk,
  User_Agent,
  getUserInfo,
  tryCatchPromise,
  couponNotify,
  getCookies,
  commonRequest
} = require("./common.js");

const request = require("request");
const moment = require("moment");
const couponExpiryDelay = 11;
const couponValue = process.env.couponValue || '20';
const beforeTime = process.env.BEFORE_TIME || 1500;
const betweenTime = process.env.BETWEEN_TIME || 400;
const threadCount = process.env.threadCount || '1';

const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

function calculateStartTime(date) {
  const startOfDay = moment(date).startOf("day");
  const scheduledTime = {
    hour: 10,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  const scheduledMoment = startOfDay.clone().set(scheduledTime);
  const isAfterScheduledTime = moment(date).isAfter(scheduledMoment);

  if (isAfterScheduledTime) {
    scheduledMoment.add(1, "day");
  }

  scheduledMoment.set(scheduledTime);
  return scheduledMoment.valueOf();
}

async function getCouponInfo(cookie) {
  const bizParams = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };

  try {
    let response = await commonRequest(cookie, JSON.stringify(bizParams), "mtop.alsc.playgame.mini.game.dispatch", couponExpiryDelay);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function exchangeCoupon(cookie, mobile) {
  const exchangeParams = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    bizScene: "game_center",
    longitude: "116.405289",
    latitude: "39.904987"
  };

  try {
    const response = await commonRequest(cookie, JSON.stringify(exchangeParams), "mtop.koubei.interactioncenter.platform.right.exchangelist", couponExpiryDelay);

    if (response.data) {
      const rightInfoList = response.data.data.rightInfoList;

      for (let i = 0; i < rightInfoList.length; i++) {
        const right = rightInfoList[i];

        if (right.rightValue === couponValue) {
          console.log("Start grabbing " + couponValue + ' yuan coupon');
          
          while (true) {
            await performCouponExchange(cookie, right.rightId, mobile);
            await delay(betweenTime);
          }
        }
      }
    }

    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
}

function getTimestamp() {
  const headers = {
    "User-Agent": User_Agent
  };

  const options = {
    url: "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
    method: "GET",
    headers: headers
  };

  return tryCatchPromise(async (resolve) => {
    request(options, async (error, response, body) => {
      if (!error && response.statusCode === 200) {
        try {
          const parsedBody = JSON.parse(body);

          if (parsedBody.data) {
            resolve(parsedBody.data.t);
          } else {
            resolve(null);
          }
        } catch (parseError) {
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  });
}

async function performCouponExchange(cookie, copyId, mobile) {
  const exchangeParams = {
    actId: '20221207144029906162546384',
    collectionId: "20221216181231449964003945",
    copyId: copyId,
    bizScene: "game_center",
    channel: "abcd",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };

  try {
    const response = await commonRequest(cookie, JSON.stringify(exchangeParams), "mtop.koubei.interactioncenter.platform.right.exchange.v2", couponExpiryDelay);
    console.log(JSON.stringify(response));

    if (response.data.data) {
      console.log("Coupon grabbed successfully, received: " + response.data.data[0].rightName);
      await couponNotify(cookie, "### Coupon successfully grabbed\nPhone number: " + mobile + "\nCoupon grabbed: " + response.data.data[0].rightName);
      process.exit(0);
    }
  } catch (err) {
    process.exit(0);
    console.log(err);
  }
}

async function initiateCouponGrab() {
  const cookies = getCookies("elmqqck");

  for (let i = 0; i < cookies.length; i++) {
    let currentCookie = cookies[i];
    currentCookie = await checkCk(currentCookie, i);

    if (!currentCookie) {
      process.exit(0);
    }

    let userInfo = await getUserInfo(currentCookie);

    if (!userInfo.username) {
      console.log('Account', i + 1, "expired! Please log in again! 😭");
      process.exit(0);
    }

    const userId = userInfo.user_id;
    let mobile = userInfo.mobile;
    console.log("****** #" + (i + 1), mobile, "*********");
    console.log("Account id:", userId);
    console.log("Current coupon grabbing thread count:", threadCount);

    let couponInfo = await getCouponInfo(currentCookie);
    let couponCount = -1;

    if (couponInfo.data) {
      couponCount = JSON.parse(couponInfo.data).num;
    } else {
      couponCount = -1;
    }

    if (couponCount !== -1) {
      if (couponValue === '20' && couponCount < 13999) {
        console.log("Not enough gold to exchange for a 20 yuan coupon, program ending");
        process.exit(0);
      } else if (couponValue === '39' && couponCount < 9999) {
        console.log("Not enough gold to exchange for a 39 yuan coupon, program ending");
        process.exit(0);
      } else if (couponValue === '12' && couponCount < 8999) {
        console.log("Not enough gold to exchange for a 12 yuan coupon, program ending");
        process.exit(0);
      }
    }

    console.log("Current coupon denomination:", couponValue);

    let lastTimestamp = await getTimestamp();

    if (!lastTimestamp) {
      lastTimestamp = new Date().getTime();
    }

    let scheduledStartTime = calculateStartTime(Number(lastTimestamp));
    let delayTime = scheduledStartTime - lastTimestamp - beforeTime;

    console.log("Program will start grabbing coupon in", delayTime / 1000, "seconds");
    
    setTimeout(async () => {
      handleCouponFailure();
      await exchangeCoupon(currentCookie, mobile);
    }, delayTime);
  }
}

function handleCouponFailure() {
  setTimeout(async () => {
    console.log("Coupon grabbing failed, the results may be inaccurate. Please use the check coupon script to obtain accurate results");
    process.exit(0);
  }, 20000);
}

initiateCouponGrab();