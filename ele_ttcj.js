/**
 * @平行绳 飞机频道：https://t.me/tigerorrose
 * 变量：elmck: 必填，账号cookie，短信登录面板项目地址：https://github.com/funaihui/eleWeb
 * 卡密变量：ELE_TTCJ_CARME 填自己购买的卡密。卡密网站：http://card.94wan.fun:90/buy/4
 * cron 6 6 6 6 6 6
 * 需要设置环境变量 ownCookie 这个是需要助力账号的 cookie。
 * 2023.6.29 更新：首次发布；
 */

const $ = new Env('City_饿了么天天抽奖');

const _0x48ccd3=_0x7149;(function(_0x745166,_0x4c9a3a){const _0x4a79c0=_0x7149,_0x36c9a9=_0x745166();while(!![]){try{const _0x1efd84=parseInt(_0x4a79c0(0x1b6))/(0x1*0xd85+-0x1*-0xfa3+-0x1d27)+-parseInt(_0x4a79c0(0x1fa))/(-0x880*0x1+0x3f0+0x492)*(parseInt(_0x4a79c0(0x1b9))/(-0xf2a+-0x1409+-0x2*-0x119b))+parseInt(_0x4a79c0(0x21e))/(-0x14a2+0x12b3+0x1f3*0x1)+-parseInt(_0x4a79c0(0x1cb))/(-0xdee+-0x1a86+0x2879*0x1)+parseInt(_0x4a79c0(0x1ed))/(0x1a6d+-0xe*0x1f3+0xe3)+parseInt(_0x4a79c0(0x1b0))/(-0x22ca+0x1c9a+-0x2b*-0x25)*(-parseInt(_0x4a79c0(0x20e))/(-0x16c4+-0x8*-0x3+-0x5ad*-0x4))+parseInt(_0x4a79c0(0x207))/(-0x283*-0x1+-0x7db*-0x1+-0x73*0x17)*(parseInt(_0x4a79c0(0x1af))/(0xd56*-0x1+-0x1542+0x22a2));if(_0x1efd84===_0x4c9a3a)break;else _0x36c9a9['push'](_0x36c9a9['shift']());}catch(_0xd8c5c8){_0x36c9a9['push'](_0x36c9a9['shift']());}}}(_0x21c6,0x158*-0x1bd+-0x5a5e*0x3+0xd*0x65b9));const {sign,getToken,wait,checkCk,User_Agent,validateCarmeNoCon,getCookies,getUserInfo,tryCatchPromise,validateCarmeWithType,checkMasterCk}=require('./common.js'),request=require('request');let CookieEles=[];const kami=process[_0x48ccd3(0x1d0)]['ELE_TTCJ_CARME'],carmiType=-0x1*0x3a1+-0x18*-0x14+0x1c5;async function commonRequest(_0x55f3ed,_0x4a3b34,_0x25f7d2){const _0x581785=_0x48ccd3,_0x27e190={'vsMAY':function(_0x1a5a10,_0x32393b){return _0x1a5a10(_0x32393b);},'PGfEV':function(_0x1f5ecc,_0xbef252){return _0x1f5ecc!==_0xbef252;},'slsFe':_0x581785(0x21a),'aoaRJ':function(_0x20fbe3,_0x2bfc4a){return _0x20fbe3(_0x2bfc4a);},'rEABb':function(_0x5d134d,_0xa3021e){return _0x5d134d(_0xa3021e);},'zfZOW':_0x581785(0x21b),'SVhef':function(_0x154794,_0x1d8b3c,_0xdcbee7){return _0x154794(_0x1d8b3c,_0xdcbee7);},'KMbTx':_0x581785(0x177),'IiKkh':function(_0x4d9159,_0x41da3e){return _0x4d9159+_0x41da3e;},'Mwsih':_0x581785(0x22c),'kGgau':function(_0x2bc165,_0x4c8bd2){return _0x2bc165(_0x4c8bd2);},'zFyOZ':function(_0x18ecdf,_0xc7fe30){return _0x18ecdf(_0xc7fe30);},'lBiOL':function(_0x7c1656,_0x54e056,_0x3a5949,_0x535807){return _0x7c1656(_0x54e056,_0x3a5949,_0x535807);},'wghxW':function(_0x783952,_0x49a59f){return _0x783952+_0x49a59f;},'RZZfG':function(_0xc28d56,_0x3e5fc2){return _0xc28d56+_0x3e5fc2;},'gzqqu':function(_0x7efb00,_0x30f77a){return _0x7efb00+_0x30f77a;},'xmbDa':function(_0x2f5f25,_0x4f65ab){return _0x2f5f25+_0x4f65ab;},'QaHrG':function(_0x7f6930,_0x10534d){return _0x7f6930+_0x10534d;},'ieLdE':function(_0x8399bd,_0x5b23f8){return _0x8399bd+_0x5b23f8;},'zUOUj':_0x581785(0x168),'pJoow':_0x581785(0x1b7),'XsnuR':_0x581785(0x223),'YjOmp':_0x581785(0x172)},_0x4b9447={'content-type':_0x27e190[_0x581785(0x1fd)],'Cookie':_0x55f3ed,'User-Agent':User_Agent},_0x2b076a=new Date()['getTime'](),_0x303c43=-0x4*-0x108b84+-0xf06690+0x16e178e;var _0x532a00=_0x27e190['IiKkh'](_0x27e190[_0x581785(0x1f2)],_0x27e190['kGgau'](encodeURIComponent,JSON[_0x581785(0x1e9)](_0x25f7d2)));const _0x3409a8=_0x27e190[_0x581785(0x16a)](getToken,_0x55f3ed),_0xef9c14=_0x3409a8[_0x581785(0x24b)]('_')[-0x5c1+0x1319+-0xd58],_0x5ab3c0=await _0x27e190[_0x581785(0x224)](sign,_0x27e190['wghxW'](_0x27e190[_0x581785(0x1b1)](_0x27e190[_0x581785(0x19c)](_0xef9c14+'&',_0x2b076a)+'&',_0x303c43),'&')+JSON[_0x581785(0x1e9)](_0x25f7d2),kami,carmiType),_0x4e1617={'url':_0x27e190[_0x581785(0x24d)](_0x27e190[_0x581785(0x1c4)](_0x27e190[_0x581785(0x19c)](_0x27e190[_0x581785(0x249)](_0x27e190[_0x581785(0x184)](_0x27e190[_0x581785(0x1da)],_0x4a3b34)+_0x27e190[_0x581785(0x1a2)],_0x2b076a),_0x27e190[_0x581785(0x1c7)]),_0x5ab3c0),_0x27e190[_0x581785(0x1b4)]),'method':_0x581785(0x1b3),'headers':_0x4b9447,'body':_0x532a00};return tryCatchPromise(_0x59ec6a=>{const _0x5cfc60=_0x581785;if(_0x5cfc60(0x23b)===_0x27e190['zfZOW']){const _0x551f51=_0x233b9f[_0x5cfc60(0x1e0)](_0x356e4f);_0x27e190[_0x5cfc60(0x248)](_0x798ef3,_0x551f51);}else _0x27e190['SVhef'](request,_0x4e1617,async(_0x58bb13,_0x21e5aa,_0x3246de)=>{const _0x239d81=_0x5cfc60;if(!_0x58bb13&&_0x21e5aa[_0x239d81(0x202)]==-0x1e31+-0x2*0x12df+0x44b7)try{if(_0x27e190[_0x239d81(0x222)](_0x239d81(0x21a),_0x27e190[_0x239d81(0x1a4)])){const _0x5554ed=_0x3c1474?function(){if(_0x3a8ead){const _0x487705=_0x3a1c88['apply'](_0x55f8bb,arguments);return _0x4c7171=null,_0x487705;}}:function(){};return _0x1be24d=![],_0x5554ed;}else{const _0x145061=JSON[_0x239d81(0x1e0)](_0x3246de);_0x27e190[_0x239d81(0x18d)](_0x59ec6a,_0x145061);}}catch(_0x1ee573){console[_0x239d81(0x1db)](_0x1ee573),_0x59ec6a(null);}else _0x27e190['rEABb'](_0x59ec6a,null);});});}function processUrl(_0x43015b){const _0x2cade9=_0x48ccd3,_0x383ff1=new Map(),_0x1708e2=_0x43015b[_0x2cade9(0x24b)]('?')[-0xb65*0x1+-0x17d6+0x233c]['split']('&');for(let _0x342b19=0xa00+-0x23c4+0x44*0x61;_0x342b19<_0x1708e2[_0x2cade9(0x225)];_0x342b19++){const [_0x15ec7c,_0x1813bd]=_0x1708e2[_0x342b19][_0x2cade9(0x24b)]('=');_0x383ff1['set'](_0x15ec7c,_0x1813bd);}return _0x383ff1;}async function getAssistList(_0x1b4f64){const _0x415ea8=_0x48ccd3,_0x354c18={'JxPOq':function(_0x1f3e14,_0x5f1a53){return _0x1f3e14===_0x5f1a53;},'uPlCm':'gZueM','GDCNc':function(_0xdfed92,_0x2bbf69){return _0xdfed92==_0x2bbf69;},'dEMeY':function(_0x311c66,_0x27f33e){return _0x311c66!==_0x27f33e;},'oRxPI':_0x415ea8(0x1d9),'ZRPnO':_0x415ea8(0x1a6),'wwwPa':function(_0x59cc47,_0x136680){return _0x59cc47(_0x136680);},'bqgPY':_0x415ea8(0x15b),'jafws':_0x415ea8(0x219),'SWRhV':function(_0x58a8a2,_0x25fd2e){return _0x58a8a2(_0x25fd2e);},'VjXqB':function(_0x30d768,_0x39cc58,_0x46ee92,_0x13d89){return _0x30d768(_0x39cc58,_0x46ee92,_0x13d89);},'iLJww':function(_0x5442b9,_0x25fd23){return _0x5442b9+_0x25fd23;},'sTATe':function(_0x505f37,_0x35d63e){return _0x505f37+_0x35d63e;},'RkknQ':_0x415ea8(0x156),'gXsOC':_0x415ea8(0x17e),'AaZSo':_0x415ea8(0x1b3)};_0x1b4f64=await _0x354c18[_0x415ea8(0x1a8)](checkMasterCk,_0x1b4f64);const _0x397d7b={'content-type':'application/x-www-form-urlencoded;charset=UTF-8','Cookie':_0x1b4f64,'User-Agent':User_Agent},_0x5c80c2=new Date()[_0x415ea8(0x15d)](),_0x24e61d=-0x16e90d7+-0x4*0x55e35+-0x3642b*-0xab,_0x1558a5={'bizScene':_0x354c18['bqgPY'],'instance':_0x415ea8(0x15c),'pageNo':'1','pageSize':'10','type':'0','version':_0x354c18['jafws']};var _0x3590a7='data='+_0x354c18[_0x415ea8(0x1fc)](encodeURIComponent,JSON[_0x415ea8(0x1e9)](_0x1558a5));const _0x1845f7=_0x354c18[_0x415ea8(0x1a8)](getToken,_0x1b4f64),_0x5a59c6=_0x1845f7[_0x415ea8(0x24b)]('_')[-0x1*0x4ce+-0x864*-0x4+0x1cc2*-0x1],_0x199476=await _0x354c18[_0x415ea8(0x24a)](sign,_0x354c18['iLJww'](_0x354c18[_0x415ea8(0x1c8)](_0x354c18[_0x415ea8(0x1c8)](_0x354c18[_0x415ea8(0x1c8)](_0x354c18['iLJww'](_0x5a59c6,'&'),_0x5c80c2)+'&',_0x24e61d),'&'),JSON[_0x415ea8(0x1e9)](_0x1558a5)),kami,carmiType),_0x49b9f1={'url':_0x354c18[_0x415ea8(0x1eb)](_0x354c18[_0x415ea8(0x1eb)](_0x354c18[_0x415ea8(0x1eb)](_0x354c18[_0x415ea8(0x1eb)](_0x354c18[_0x415ea8(0x20d)],_0x5c80c2),_0x415ea8(0x223)),_0x199476),_0x354c18[_0x415ea8(0x188)]),'method':_0x354c18['AaZSo'],'headers':_0x397d7b,'body':_0x3590a7};return new Promise(_0x77a3ec=>{const _0x5b2835=_0x415ea8,_0x38819b={'Jcqek':function(_0x127ade,_0x11a99f){const _0x61dde2=_0x7149;return _0x354c18[_0x61dde2(0x1b8)](_0x127ade,_0x11a99f);},'TBsAp':_0x354c18[_0x5b2835(0x1c9)],'pcFtQ':function(_0x104483,_0x11ccc6){const _0x325af9=_0x5b2835;return _0x354c18[_0x325af9(0x1d4)](_0x104483,_0x11ccc6);},'QLCha':function(_0x121afb,_0x42ad94){return _0x354c18['dEMeY'](_0x121afb,_0x42ad94);},'tznZu':_0x354c18['oRxPI'],'NTtef':function(_0x8324ec,_0x1bd8cc){return _0x8324ec(_0x1bd8cc);}};if(_0x354c18[_0x5b2835(0x238)](_0x354c18['ZRPnO'],_0x354c18['ZRPnO']))return![];else request(_0x49b9f1,async(_0x33b1df,_0xde87be,_0x51f0cf)=>{const _0x45c7a8=_0x5b2835,_0x39ccc1={'KtVYa':function(_0x4dfb95,_0x4b13f7){return _0x4dfb95(_0x4b13f7);}};if(_0x38819b[_0x45c7a8(0x226)](_0x38819b[_0x45c7a8(0x1e2)],_0x38819b['TBsAp'])){if(!_0x33b1df&&_0x38819b[_0x45c7a8(0x17d)](_0xde87be[_0x45c7a8(0x202)],-0x9b*-0x1+0x2ab+-0x16*0x1d))try{const _0x4b8532=JSON[_0x45c7a8(0x1e0)](_0x51f0cf);_0x77a3ec(_0x4b8532);}catch(_0x52fc8e){console[_0x45c7a8(0x1db)](_0x52fc8e),_0x77a3ec(null);}else _0x38819b['QLCha'](_0x38819b['tznZu'],_0x45c7a8(0x1fe))?_0x38819b['NTtef'](_0x77a3ec,null):_0x4304ec['log'](_0x252a73);}else _0x315969[_0x45c7a8(0x1db)](_0x5d8613),_0x39ccc1[_0x45c7a8(0x1cc)](_0x32447b,null);});});}async function initDraw(_0x51d969,_0x234274,_0x10bfb7){const _0x74d062=_0x48ccd3,_0x3dc902={'CxvDp':_0x74d062(0x24e),'jJcvG':_0x74d062(0x15b),'BVaxk':_0x74d062(0x15c),'iTuYi':_0x74d062(0x234),'Lynmf':function(_0xc831d,_0x1ab30a,_0x362d62,_0x3dd084){return _0xc831d(_0x1ab30a,_0x362d62,_0x3dd084);}},_0x4b9cac={'api':_0x3dc902[_0x74d062(0x20c)],'asac':_0x74d062(0x1bb),'bizScene':_0x3dc902[_0x74d062(0x169)],'instance':_0x3dc902[_0x74d062(0x17f)],'params':_0x3dc902[_0x74d062(0x245)],'scene':'fissionDraw001'};await _0x3dc902[_0x74d062(0x236)](commonRequest,_0x51d969,_0x74d062(0x1bb),_0x4b9cac);}async function getShareId(_0x22115d){const _0x54e2a9=_0x48ccd3,_0x4cbc12={'zRWXU':function(_0x2f49d0,_0x218378,_0xa887d,_0x3a7d16){return _0x2f49d0(_0x218378,_0xa887d,_0x3a7d16);},'IkQey':function(_0x2ea960,_0x1468e4){return _0x2ea960!==_0x1468e4;},'PjYxO':_0x54e2a9(0x1ac),'XDuSb':_0x54e2a9(0x19a),'oovdf':_0x54e2a9(0x15c),'rFjQS':_0x54e2a9(0x1de),'PxCZG':function(_0x5a74cb,_0x5d2ba3){return _0x5a74cb(_0x5d2ba3);},'MrqTY':'shareId','PtGQN':_0x54e2a9(0x1ea),'zNEBO':_0x54e2a9(0x18e)};_0x22115d=await _0x4cbc12[_0x54e2a9(0x183)](checkMasterCk,_0x22115d,kami,carmiType);if(!_0x22115d){if(_0x4cbc12['IkQey'](_0x4cbc12['PjYxO'],_0x54e2a9(0x1e5)))console[_0x54e2a9(0x1db)](_0x4cbc12['XDuSb']),process['exit'](-0x2643*0x1+-0xfec+0x362f);else return!![];}var _0x178b3f;const _0x559082={'api':'fissionDrawShare','asac':'2A22C21KPW8PSOH8QMD4LM','bizScene':'growth_fission_coupon','instance':_0x4cbc12[_0x54e2a9(0x1b2)],'params':_0x54e2a9(0x165),'scene':_0x4cbc12[_0x54e2a9(0x1f8)]},_0x3a506b=await _0x4cbc12[_0x54e2a9(0x183)](commonRequest,_0x22115d,_0x54e2a9(0x1bc),_0x559082);if(_0x3a506b[_0x54e2a9(0x15e)]&&_0x3a506b[_0x54e2a9(0x15e)][_0x54e2a9(0x1ca)]){const _0x544a65=_0x3a506b[_0x54e2a9(0x15e)]['result'];return _0x178b3f=_0x4cbc12[_0x54e2a9(0x1b5)](processUrl,_0x544a65['url'])[_0x54e2a9(0x20f)](_0x4cbc12[_0x54e2a9(0x24c)]),console[_0x54e2a9(0x1db)](_0x4cbc12[_0x54e2a9(0x240)],_0x178b3f),_0x178b3f;}else console[_0x54e2a9(0x1db)](_0x4cbc12['zNEBO']),process['exit'](0x102a*-0x2+-0x225+0x19*0x161);}function _0x7149(_0x55c99a,_0x76e8ea){const _0x144004=_0x21c6();return _0x7149=function(_0x2dd3f4,_0x26417f){_0x2dd3f4=_0x2dd3f4-(-0x1f*-0xfa+-0x1*0x617+-0x16da);let _0x14428b=_0x144004[_0x2dd3f4];return _0x14428b;},_0x7149(_0x55c99a,_0x76e8ea);}function _0x21c6(){const _0x44f2a1=['popWindow','hcsll','xmbDa','bNfMm','DIOtf','XsnuR','iLJww','uPlCm','result','1099125Wbpcge','KtVYa','PZdJt','BsYBH','：金额','env','roBwc','success','yCcTt','GDCNc','谢谢你为我助力','fEJom','DWvnz','PsseH','rjcBZ','zUOUj','log','GVgAm','dAzif','fissionDraw001','oqGkN','parse','qbXzV','TBsAp','floor','moynx','LQnSc','lHTXa','ziVNi','WjgQa','stringify','获取到的助力\x20id\x20为','sTATe','RfKDk','1274790gwTgoG','pZixj','qecDh','hjeeF','2A22C21RPW8PSOJ9OFOQGY','Mwsih','nwkKe','nkyCJ','XJTXI','UGqcN','pbwXI','rFjQS','pazBr','231194uqLTye','{\x22latitude\x22:\x2240.715624\x22,\x22longitude\x22:\x22121.4426387\x22,\x22cityId\x22:\x22\x22,\x22amount\x22:\x22','SWRhV','KMbTx','myYXV','KHXkJ','JahNh','Yrjmh','statusCode','call','CMOaG','action','doqrf','54bOMrBu','Tgdsm','geapa','Vhpup','gkjxI','CxvDp','RkknQ','1048472wmlFiu','get','ckhMc','yWYmH','init','PSIjt','lMuDc','nAyft','未设置需助力的\x20ck，程序结束!','DsXXp','gsasT','1.7','fJIHG','fQDgJ','Uvhkc','WsGHO','47596BBMghX','exit','cJekb','sfHLk','PGfEV','&sign=','lBiOL','length','Jcqek','ZfXFc','LUhIr','ZrrFg','chain','无法助力','data=','constructor','set','ZgTRE','FxlFf','wylGt','debu','GKLpO','{\x22latitude\x22:\x2240.715624\x22,\x22longitude\x22:\x22121.4426387\x22,\x22cityId\x22:\x22\x22}','euKqw','Lynmf','qKtzB','dEMeY','Cdkgy','zhBcH','lQfTf','抽奖：','BhRdC','qZTAt','YxHLG','PtGQN','qKvCV','function\x20*\x5c(\x20*\x5c)','OZFLj','SdOPK','iTuYi','提现：','iLfbJ','vsMAY','QaHrG','VjXqB','split','MrqTY','gzqqu','fissionDrawHomePage','test','DXZox','https://shopping.ele.me/h5/mtop.ele.growth.fission.shopcoupon.assistlist/1.0/?jsv=2.6.1&appKey=12574478&&ttid=1601274958480%40eleme_android_10.14.3&t=','dzkmw','ousni','CMEXp','DdAWW','growth_fission_coupon','INNER','getTime','data','CcEtD','vihch','stateObject','uwYyz','账号失效！请重新登录！！！😭','IzPyY','{\x22latitude\x22:\x2230.178514\x22,\x22longitude\x22:\x22120.220959\x22,\x22cityId\x22:\x22\x22}','EFJTP','uELNN','https://shopping.ele.me/h5/mtop.alsc.growth.tangram.gateway/1.0/?jsv=2.6.1&appKey=12574478&asac=','jJcvG','zFyOZ','ownCookie','tJGJq','2A22C21FPW8PSO7U202V54','助力：','CAUbO','YEOSO','KNFfE','&api=mtop.alsc.growth.tangram.gateway','aFwUm','feyMc','bRSov','qSSgv','application/x-www-form-urlencoded;charset=UTF-8','withdrawAction','content','gger','iBWcg','CdCjm','pcFtQ','&api=mtop.ele.growth.fission.shopcoupon.assistlist','BVaxk','Lymbb','RqUIl','indexOf','zRWXU','ieLdE','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','RCEXS','vUJPs','gXsOC','title','input','drawAction','VJsFN','aoaRJ','获取到助力\x20id\x20失败，程序退出','VVuvW','step2','ret','OgRmP','KhMAW','eZvSs','fSNfb','AcuFx','GCfVz','防止黑号延时5-10秒','请求次数剩余','需要助力的账号失效！请重新登录！！！','kKeXs','RZZfG','ZnMHa','IQRaT','teIqa','lqXTY','EGCnf','pJoow','apply','slsFe','❌卡密不能为空','SoPCC','LkkuZ','wwwPa','support','subTitle','fRMGf','pgnPc','hwdRQ','qtUBE','560900SqZmzb','7WeRWdp','IiKkh','oovdf','POST','YjOmp','PxCZG','21628ksqWDf','&ttid=1601274958480%40eleme_android_10.14.3&t=','JxPOq','3sftvqH','wswFb','2A22C216PW8PSO7H6J9G63','2A22C21KPW8PSOH8QMD4LM','rIbWG','UZbnw','sRuIg','bYFmY','eUSQR'];_0x21c6=function(){return _0x44f2a1;};return _0x21c6();}async function fridensHelper(_0x319265,_0x281c2b,_0x3b6ae5){const _0x493a2e=_0x48ccd3,_0xf87827={'vUJPs':function(_0x11ad57,_0x57a48b){return _0x11ad57(_0x57a48b);},'kwDVu':_0x493a2e(0x205),'ScwTk':_0x493a2e(0x1cf),'LkkuZ':function(_0x4463a8,_0x148cad){return _0x4463a8(_0x148cad);},'cJekb':function(_0x245f58,_0x4bf2d6,_0xcd2825,_0xed1cff){return _0x245f58(_0x4bf2d6,_0xcd2825,_0xed1cff);},'pazBr':_0x493a2e(0x1a9),'fRMGf':_0x493a2e(0x15c),'RfKDk':function(_0x2c4b0c,_0x178235){return _0x2c4b0c+_0x178235;},'JahNh':'{\x22latitude\x22:\x2240.715624\x22,\x22longitude\x22:\x22121.4426387\x22,\x22cityId\x22:\x22\x22,\x22shareId\x22:\x22','tqViG':_0x493a2e(0x1f1),'pZixj':function(_0x34eab3,_0x2f8347){return _0x34eab3===_0x2f8347;},'euKqw':'XEavT','iLfbJ':function(_0x37a611,_0x528765){return _0x37a611+_0x528765;},'yWYmH':function(_0x11bd43,_0x4de3a1){return _0x11bd43!==_0x4de3a1;},'jQGRA':function(_0x350a6e,_0x5773e8,_0x2fbd20){return _0x350a6e(_0x5773e8,_0x2fbd20);},'EGCnf':'防止黑号延时1-3秒','ZgTRE':function(_0x573626,_0x585af0,_0x16c5eb){return _0x573626(_0x585af0,_0x16c5eb);},'hcsll':_0x493a2e(0x1d5),'VJsFN':_0x493a2e(0x199),'RwoCf':_0x493a2e(0x15b),'fEJom':_0x493a2e(0x234),'GCfVz':_0x493a2e(0x1de),'EFGDW':_0x493a2e(0x16d),'qZTAt':function(_0x211ae7,_0x58bf3a){return _0x211ae7!==_0x58bf3a;},'Vhpup':_0x493a2e(0x192),'GSvzq':_0x493a2e(0x178),'KHXkJ':function(_0x515a11,_0x1634a0){return _0x515a11+_0x1634a0;},'CMOaG':_0x493a2e(0x1fb),'OZFLj':_0x493a2e(0x164),'SdOPK':function(_0x403643,_0x67f677){return _0x403643+_0x67f677;},'nwkKe':function(_0x240c8e,_0x27cb37){return _0x240c8e===_0x27cb37;},'PZdJt':'JyEMf','RCEXS':_0x493a2e(0x246),'lHTXa':_0x493a2e(0x230),'DsXXp':_0x493a2e(0x23c),'bNfMm':_0x493a2e(0x198),'kKeXs':function(_0x3d970e,_0x22d523){return _0x3d970e(_0x22d523);},'iBWcg':function(_0x21e35c,_0x109e71,_0x80b5d9){return _0x21e35c(_0x109e71,_0x80b5d9);},'doqrf':_0x493a2e(0x239)};try{_0x281c2b=await _0xf87827[_0x493a2e(0x220)](checkMasterCk,_0x281c2b,kami,carmiType);const _0x14971a={'api':_0xf87827[_0x493a2e(0x1f9)],'bizScene':_0x493a2e(0x15b),'instance':_0xf87827['fRMGf'],'params':_0xf87827[_0x493a2e(0x1ec)](_0xf87827[_0x493a2e(0x1ec)](_0xf87827[_0x493a2e(0x200)],_0x3b6ae5),'\x22}'),'scene':'fissionDraw001'};let _0xa28cd7=await validateCarmeNoCon(kami,!![]);const _0x25097d=await _0xf87827[_0x493a2e(0x220)](commonRequest,_0x319265,_0xf87827['tqViG'],_0x14971a);if(_0x25097d[_0x493a2e(0x15e)]&&_0x25097d['data'][_0x493a2e(0x1ca)]){if(_0xf87827[_0x493a2e(0x1ee)](_0xf87827[_0x493a2e(0x235)],_0xf87827[_0x493a2e(0x235)])){const _0xa89edd=_0x25097d[_0x493a2e(0x15e)][_0x493a2e(0x1ca)];console['log'](_0xf87827[_0x493a2e(0x247)](_0xf87827[_0x493a2e(0x1ec)](_0xa89edd[_0x493a2e(0x189)],'：'),_0xa89edd[_0x493a2e(0x1aa)]));if(_0xf87827[_0x493a2e(0x211)](_0xa89edd[_0x493a2e(0x189)][_0x493a2e(0x182)](_0x493a2e(0x22b)),-(0xd0e+0x1bff+-0x290c)))await _0xf87827['jQGRA'](validateCarmeNoCon,kami,![]),console[_0x493a2e(0x1db)](_0xf87827[_0x493a2e(0x1a1)]),await wait(_0xf87827[_0x493a2e(0x22f)](getRandom,-0x9c3+0x1*0xbcd+-0x209*0x1,-0x506*0x4+0x17*-0xc5+0x25ce));else{if(_0xa89edd[_0x493a2e(0x189)][_0x493a2e(0x182)](_0xf87827[_0x493a2e(0x1c3)])!==-(0x1718+0x1f2c+-0x1df*0x1d)){console[_0x493a2e(0x1db)](_0xf87827[_0x493a2e(0x18c)],_0xa28cd7);const _0x45e99c={'api':_0x493a2e(0x18b),'asac':_0x493a2e(0x16d),'bizScene':_0xf87827['RwoCf'],'instance':_0xf87827[_0x493a2e(0x1ab)],'params':_0xf87827[_0x493a2e(0x1d6)],'scene':_0xf87827[_0x493a2e(0x197)]},_0x5049a9=await _0xf87827['cJekb'](commonRequest,_0x281c2b,_0xf87827['EFGDW'],_0x45e99c);if(_0x5049a9[_0x493a2e(0x15e)]&&_0x5049a9[_0x493a2e(0x15e)]['result']){if(_0xf87827['qZTAt']('OgRmP',_0xf87827[_0x493a2e(0x20a)]))try{const _0x16a007=_0x2aff42['parse'](_0x496f59);_0xf87827[_0x493a2e(0x187)](_0x15e6f8,_0x16a007);}catch(_0x17d721){_0xf576e8['log'](_0x17d721),_0x1af39b(null);}else{const _0x3e8a1d=_0x5049a9[_0x493a2e(0x15e)][_0x493a2e(0x1ca)],_0x1b4f00=_0x3e8a1d['popWindow']['content'][0xd30+0xee2+-0x1c12]['amount'];console[_0x493a2e(0x1db)](_0xf87827['RfKDk'](_0x3e8a1d[_0x493a2e(0x1c2)][_0x493a2e(0x189)],'：')+_0x1b4f00);if(_0x5049a9[_0x493a2e(0x15e)][_0x493a2e(0x1d2)]){const _0xc4be7d={'api':_0xf87827['GSvzq'],'bizScene':_0x493a2e(0x15b),'instance':_0xf87827[_0x493a2e(0x1ab)],'params':_0xf87827['KHXkJ'](_0xf87827[_0x493a2e(0x204)],_0x1b4f00)+'\x22}','scene':_0xf87827[_0x493a2e(0x197)]},_0x5e1d6d=await _0xf87827[_0x493a2e(0x220)](commonRequest,_0x281c2b,'',_0xc4be7d);if(_0x5e1d6d['data']&&_0x5e1d6d[_0x493a2e(0x15e)][_0x493a2e(0x1ca)]){if(_0xf87827[_0x493a2e(0x23e)](_0x493a2e(0x19d),_0xf87827[_0x493a2e(0x243)])){const _0x52c355=_0x5e1d6d[_0x493a2e(0x15e)]['result'];console[_0x493a2e(0x1db)](_0xf87827[_0x493a2e(0x244)](_0x52c355[_0x493a2e(0x1c2)][_0x493a2e(0x189)],_0xf87827['ScwTk']),_0x52c355['popWindow'][_0x493a2e(0x179)][0xa22+-0xb6+-0x86*0x12]['amount']),console['log'](_0x52c355['popWindow']['content'][0xb45*0x3+0xa*0x362+0x5*-0xd87]['step2']);}else(function(){return!![];}['constructor']('debu'+_0x493a2e(0x17a))[_0x493a2e(0x203)](IfqiXK['kwDVu']));}else{if(_0xf87827[_0x493a2e(0x1f3)](_0xf87827[_0x493a2e(0x1cd)],_0xf87827[_0x493a2e(0x1cd)]))console[_0x493a2e(0x1db)](_0xf87827[_0x493a2e(0x186)]+_0x5049a9[_0x493a2e(0x191)][-0x16*0x125+0x118b+-0x187*-0x5]);else{const _0x15e76e=_0x595ea2[_0x493a2e(0x1a3)](_0x5ea6de,arguments);return _0x55cd79=null,_0x15e76e;}}}else _0xf87827['pZixj'](_0xf87827[_0x493a2e(0x1e6)],_0x493a2e(0x157))?_0x1f57b4():console[_0x493a2e(0x1db)](_0xf87827['iLfbJ'](_0xf87827[_0x493a2e(0x217)],_0x5049a9['ret'][-0x3d*0x65+-0x975+0x1*0x2186]));}}else console[_0x493a2e(0x1db)](_0xf87827['DsXXp']+_0x5049a9[_0x493a2e(0x191)][0x911+-0x8*0x39b+0x1*0x13c7]);console[_0x493a2e(0x1db)](_0xf87827[_0x493a2e(0x1c5)]),await _0xf87827[_0x493a2e(0x19b)](wait,_0xf87827[_0x493a2e(0x17b)](getRandom,-0xaf8+-0x44*-0x2f+-0x17f,-0x2635*-0x1+-0x1432+-0x2b*0x6b));}}}else{const _0x1aeeaa=_0x23b82d[_0x493a2e(0x15e)][_0x493a2e(0x1ca)];_0x1647af['log'](_0x1aeeaa[_0x493a2e(0x1c2)][_0x493a2e(0x189)]+_0xf87827['ScwTk'],_0x1aeeaa[_0x493a2e(0x1c2)]['content'][-0x183f+0x2*0x1327+-0xe0f]['amount']),_0xc1a444['log'](_0x1aeeaa[_0x493a2e(0x1c2)][_0x493a2e(0x179)][0x2*-0x12f6+-0xfae+0x2*0x1acd][_0x493a2e(0x190)]);}}else console[_0x493a2e(0x1db)](_0xf87827[_0x493a2e(0x1ff)]('助力：',drawRes[_0x493a2e(0x191)][0x923+-0x463+-0x4c0]));}catch(_0x39f17f){if(_0xf87827[_0x493a2e(0x211)](_0xf87827[_0x493a2e(0x206)],_0xf87827[_0x493a2e(0x206)]))try{const _0x388375=_0x33d9a0['parse'](_0xbe46fb);_0x15c4c2(_0x388375);}catch(_0x5f515c){_0x353307['log'](_0x5f515c),_0xf87827[_0x493a2e(0x1a7)](_0x4a58d2,null);}else console[_0x493a2e(0x1db)](_0x39f17f);}}(async function(){const _0x5364f3=_0x48ccd3,_0x4276bf={'rIbWG':function(_0x28f18e,_0x41fe26){return _0x28f18e===_0x41fe26;},'Yrjmh':_0x5364f3(0x1ce),'VVuvW':_0x5364f3(0x173),'qKvCV':_0x5364f3(0x242),'nAyft':_0x5364f3(0x185),'wylGt':function(_0x500e24,_0x55a914){return _0x500e24(_0x55a914);},'YxHLG':_0x5364f3(0x212),'gsasT':function(_0x489718,_0x3a0cb3){return _0x489718+_0x3a0cb3;},'KNFfE':_0x5364f3(0x22a),'IQRaT':_0x5364f3(0x18a),'Lymbb':_0x5364f3(0x176),'GKLpO':function(_0x331467){return _0x331467();},'zhBcH':function(_0x2fed50,_0x14e8ea,_0xc8465){return _0x2fed50(_0x14e8ea,_0xc8465);},'dAzif':function(_0x25677c,_0xc222ae){return _0x25677c+_0xc222ae;},'ZfXFc':function(_0x151106,_0x143526){return _0x151106===_0x143526;},'oqGkN':'xuJCb','teIqa':'YCTcH','CAUbO':_0x5364f3(0x216),'Tgdsm':function(_0x2ffded,_0xe1a2d2,_0x4fc721){return _0x2ffded(_0xe1a2d2,_0x4fc721);},'vihch':function(_0x2ea7cf){return _0x2ea7cf();},'tJGJq':function(_0x141003,_0x46d399,_0x40d9db,_0x6d6ed,_0x51a80a){return _0x141003(_0x46d399,_0x40d9db,_0x6d6ed,_0x51a80a);},'EiwZL':function(_0x326dac,_0x269c11){return _0x326dac===_0x269c11;},'LUhIr':'WIcvN','fSNfb':function(_0x4d1db8,_0x4f44f9){return _0x4d1db8+_0x4f44f9;},'Uvhkc':function(_0x437c3d,_0x1c6a8e,_0x3e5ed2,_0x478583){return _0x437c3d(_0x1c6a8e,_0x3e5ed2,_0x478583);}},_0x5396f1=(function(){let _0x33eac0=!![];return function(_0x3cc9c0,_0x51e210){const _0x4a1025=_0x7149,_0x129594={'roBwc':function(_0x2d4092,_0x34cd70){return _0x2d4092(_0x34cd70);}};if(_0x4276bf[_0x4a1025(0x1bd)](_0x4276bf[_0x4a1025(0x201)],_0x4276bf[_0x4a1025(0x18f)])){const _0x2cbbce=_0x2c176c['parse'](_0x4a4614);_0x129594[_0x4a1025(0x1d1)](_0x1d48b7,_0x2cbbce);}else{const _0x1624d6=_0x33eac0?function(){const _0x660b9f=_0x4a1025;if(_0x51e210){const _0x293094=_0x51e210[_0x660b9f(0x1a3)](_0x3cc9c0,arguments);return _0x51e210=null,_0x293094;}}:function(){};return _0x33eac0=![],_0x1624d6;}};}());(function(){const _0x24c4d0=_0x5364f3,_0x2459bf={'AcuFx':_0x24c4d0(0x1a5)};_0x4276bf[_0x24c4d0(0x23a)](_0x5396f1,this,function(){const _0x2a00ac=_0x24c4d0,_0x163e2a=new RegExp(_0x4276bf[_0x2a00ac(0x241)]),_0x43b21c=new RegExp(_0x4276bf[_0x2a00ac(0x215)],'i'),_0x3c97e0=_0x4276bf['wylGt'](_0x1dd2a8,_0x4276bf[_0x2a00ac(0x23f)]);!_0x163e2a['test'](_0x4276bf[_0x2a00ac(0x218)](_0x3c97e0,_0x4276bf[_0x2a00ac(0x171)]))||!_0x43b21c[_0x2a00ac(0x24f)](_0x4276bf['gsasT'](_0x3c97e0,_0x4276bf[_0x2a00ac(0x19e)]))?_0x4276bf['wylGt'](_0x3c97e0,'0'):_0x4276bf['Lymbb']===_0x4276bf[_0x2a00ac(0x180)]?_0x4276bf[_0x2a00ac(0x233)](_0x1dd2a8):(_0x2fed5e[_0x2a00ac(0x1db)](_0x2459bf[_0x2a00ac(0x196)]),_0x340762[_0x2a00ac(0x21f)](-0x24a*0x10+0x1*-0x237a+-0x347*-0x16));})();}());!kami&&(_0x4276bf[_0x5364f3(0x227)]('gkjxI',_0x5364f3(0x20b))?(console[_0x5364f3(0x1db)](_0x5364f3(0x1a5)),process['exit'](0x3*0x40a+0x17*-0x14c+0x11b6)):_0xb710e3(null));const _0x523f74=process['env'][_0x5364f3(0x16b)];!_0x523f74&&(_0x4276bf[_0x5364f3(0x1df)]===_0x4276bf[_0x5364f3(0x19f)]?_0x23a966['log'](_0x4276bf[_0x5364f3(0x1dd)](_0x5364f3(0x23c),_0x54c2fb[_0x5364f3(0x191)][-0xc9*-0x1+0x1cd9+-0x1da2])):(console[_0x5364f3(0x1db)](_0x4276bf[_0x5364f3(0x16f)]),process['exit'](-0xa16+-0xfc6+0x1*0x19dc)));await _0x4276bf[_0x5364f3(0x208)](validateCarmeWithType,kami,carmiType),CookieEles=_0x4276bf[_0x5364f3(0x160)](getCookies);const _0x2f4662=await _0x4276bf[_0x5364f3(0x231)](getShareId,_0x523f74);for(let _0x2f2964=0x62*0x4f+-0x1*0xc7+-0x1d77*0x1;_0x2f2964<CookieEles[_0x5364f3(0x225)];_0x2f2964++){let _0x3e68ad=CookieEles[_0x2f2964];_0x3e68ad=await _0x4276bf[_0x5364f3(0x16c)](checkCk,_0x3e68ad,_0x2f2964,kami,carmiType);if(!_0x3e68ad){if(_0x4276bf['EiwZL'](_0x4276bf['LUhIr'],_0x4276bf[_0x5364f3(0x228)]))continue;else{if(_0x6fbba9){const _0x23b174=_0x246baf['apply'](_0x3a1599,arguments);return _0x4ceefc=null,_0x23b174;}}}let _0x1e4453=await getUserInfo(_0x3e68ad);if(!_0x1e4453['username']){console[_0x5364f3(0x1db)]('第',_0x4276bf[_0x5364f3(0x195)](_0x2f2964,-0xac*0x22+-0x1b7b+0x3254*0x1),_0x5364f3(0x163));continue;}await _0x4276bf[_0x5364f3(0x21c)](fridensHelper,_0x3e68ad,_0x523f74,_0x2f4662);}process[_0x5364f3(0x21f)](0x7d*-0x1+-0x886+0x301*0x3);}());function getRandom(_0x1cf63b,_0x4d4f90){const _0x1e0d26=_0x48ccd3,_0x5228fd={'ousni':function(_0x3c77c6,_0x57764f){return _0x3c77c6+_0x57764f;},'aiaBP':function(_0x5ea9c7,_0x9330ad){return _0x5ea9c7*_0x9330ad;},'MNkcZ':function(_0x122ec2,_0x463a46){return _0x122ec2-_0x463a46;}};return Math[_0x1e0d26(0x1e3)](_0x5228fd[_0x1e0d26(0x158)](_0x5228fd['aiaBP'](Math['random'](),_0x5228fd['ousni'](_0x5228fd['MNkcZ'](_0x4d4f90,_0x1cf63b),0xb81+0x1c37+-0x27b7)),_0x1cf63b));}function _0x1dd2a8(_0x4d2fdd){const _0x939558=_0x48ccd3,_0x2da8a8={'ziVNi':_0x939558(0x216),'ZrrFg':function(_0x42b18b,_0x11ba10){return _0x42b18b!==_0x11ba10;},'moynx':_0x939558(0x21d),'UGqcN':_0x939558(0x1f7),'RqUIl':function(_0x252bb9,_0x2679d5){return _0x252bb9+_0x2679d5;},'YEOSO':_0x939558(0x232),'hwdRQ':_0x939558(0x1ef),'UZbnw':function(_0xe980dd,_0x809eaf){return _0xe980dd(_0x809eaf);},'CcEtD':_0x939558(0x209),'bYFmY':'string','SNzYP':'while\x20(true)\x20{}','hjeeF':'counter','PSIjt':function(_0x47e7b1,_0x6cd920){return _0x47e7b1===_0x6cd920;},'KhMAW':_0x939558(0x237),'qbXzV':function(_0x2d1d96,_0x5391c5){return _0x2d1d96!==_0x5391c5;},'GHjVg':function(_0x273a57,_0x3334b8){return _0x273a57/_0x3334b8;},'PsseH':_0x939558(0x225),'ckhMc':function(_0x4a84a9,_0x832b15){return _0x4a84a9%_0x832b15;},'lMuDc':function(_0x5988d2,_0x4f1446){return _0x5988d2+_0x4f1446;},'Hhfrt':'gger','CMEXp':_0x939558(0x205),'eUSQR':function(_0x515e60,_0x1f03fa){return _0x515e60+_0x1f03fa;},'nkyCJ':_0x939558(0x161),'DIOtf':function(_0x17f88a,_0x338a8a){return _0x17f88a+_0x338a8a;},'DdAWW':_0x939558(0x18a),'DXZox':function(_0x2d0a18,_0x5f4b34,_0x58f148){return _0x2d0a18(_0x5f4b34,_0x58f148);},'yCcTt':_0x939558(0x167),'qtUBE':_0x939558(0x1dc),'CdCjm':'YdqXG'};function _0x1f00fc(_0x5a831c){const _0x181d10=_0x939558,_0x5c892f={'DWvnz':function(_0x2ba141,_0xf04065){const _0xa2057c=_0x7149;return _0x2da8a8[_0xa2057c(0x181)](_0x2ba141,_0xf04065);},'XJTXI':_0x2da8a8['YEOSO'],'eZvSs':_0x181d10(0x16e),'EFJTP':function(_0x5c6b63,_0x4a3639){return _0x5c6b63!==_0x4a3639;},'wswFb':_0x2da8a8[_0x181d10(0x1ad)],'bRSov':function(_0x374acd,_0x45272a){const _0x172148=_0x181d10;return _0x2da8a8[_0x172148(0x1be)](_0x374acd,_0x45272a);}};if(_0x2da8a8[_0x181d10(0x15f)]!==_0x181d10(0x209))_0x14257b[_0x181d10(0x1db)](_0x2da8a8[_0x181d10(0x1e7)]),_0x5a10b1[_0x181d10(0x21f)](-0xb1b+-0x2f*-0x85+-0xd50);else{if(typeof _0x5a831c===_0x2da8a8[_0x181d10(0x1c0)])return function(_0x3c38f8){}[_0x181d10(0x22d)](_0x2da8a8['SNzYP'])[_0x181d10(0x1a3)](_0x2da8a8[_0x181d10(0x1f0)]);else _0x2da8a8[_0x181d10(0x213)](_0x2da8a8[_0x181d10(0x193)],_0x2da8a8[_0x181d10(0x193)])?_0x2da8a8[_0x181d10(0x1e1)](_0x2da8a8[_0x181d10(0x181)]('',_0x2da8a8['GHjVg'](_0x5a831c,_0x5a831c))[_0x2da8a8[_0x181d10(0x1d8)]],-0xa*-0x4+-0x1a48*0x1+0x1*0x1a21)||_0x2da8a8[_0x181d10(0x213)](_0x2da8a8[_0x181d10(0x210)](_0x5a831c,-0x1d04+-0x1*0x1873+0x358b),0x62*0x47+-0x256f+0x5*0x20d)?function(){const _0x3b7156=_0x181d10;if(_0x2da8a8[_0x3b7156(0x229)](_0x2da8a8[_0x3b7156(0x1e4)],_0x2da8a8[_0x3b7156(0x1f6)]))return!![];else(function(){return![];}[_0x3b7156(0x22d)](_0x5c892f[_0x3b7156(0x1d7)](_0x5c892f[_0x3b7156(0x1f5)],'gger'))[_0x3b7156(0x1a3)]('stateObject'));}[_0x181d10(0x22d)](_0x2da8a8[_0x181d10(0x214)](_0x2da8a8[_0x181d10(0x170)],_0x2da8a8['Hhfrt']))[_0x181d10(0x203)](_0x2da8a8[_0x181d10(0x159)]):function(){const _0x5c5f49=_0x181d10;if(_0x5c892f[_0x5c5f49(0x166)](_0x5c5f49(0x1e8),_0x5c892f[_0x5c5f49(0x1ba)]))return![];else _0x2dc25b[_0x5c5f49(0x1db)](_0x5c892f[_0x5c5f49(0x1d7)](_0x5c892f[_0x5c5f49(0x194)],_0x578136[_0x5c5f49(0x191)][0x4a4+0xc2*0x2f+-0x2842*0x1]));}['constructor'](_0x2da8a8[_0x181d10(0x1c1)](_0x181d10(0x232),_0x181d10(0x17a)))[_0x181d10(0x1a3)](_0x2da8a8[_0x181d10(0x1f4)]):_0x5c892f[_0x181d10(0x175)](_0x57c700,-0x13c+-0x3ff+0x53b);_0x2da8a8[_0x181d10(0x1be)](_0x1f00fc,++_0x5a831c);}}try{if(_0x2da8a8[_0x939558(0x1d3)]!==_0x2da8a8[_0x939558(0x1ae)]){if(_0x4d2fdd)return _0x1f00fc;else{if(_0x2da8a8['PSIjt'](_0x2da8a8[_0x939558(0x17c)],_0x939558(0x23d))){const [_0x1f5953,_0x541805]=_0x154b34[_0x4c1d30][_0x939558(0x24b)]('=');_0x1bbcb5[_0x939558(0x22e)](_0x1f5953,_0x541805);}else _0x2da8a8[_0x939558(0x1be)](_0x1f00fc,0x1*-0x1679+-0x9b8+0x2031);}}else{const _0x26954d={'sRuIg':_0x939558(0x242),'uwYyz':function(_0x16c31f,_0x189237){return _0x16c31f(_0x189237);},'lqXTY':function(_0x5e74b,_0x5b7f16){const _0x475a39=_0x939558;return _0x2da8a8[_0x475a39(0x181)](_0x5e74b,_0x5b7f16);},'feyMc':function(_0x235bcc,_0x1051bb){const _0x4cc217=_0x939558;return _0x2da8a8[_0x4cc217(0x1c6)](_0x235bcc,_0x1051bb);},'sfHLk':_0x2da8a8[_0x939558(0x15a)]};_0x2da8a8[_0x939558(0x155)](_0x120df1,this,function(){const _0x313354=_0x939558,_0x56eb48=new _0x979e25(_0x26954d[_0x313354(0x1bf)]),_0x1f387b=new _0x120a71('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0xc248f4=_0x26954d[_0x313354(0x162)](_0xdf9a8b,_0x313354(0x212));!_0x56eb48[_0x313354(0x24f)](_0x26954d[_0x313354(0x1a0)](_0xc248f4,_0x313354(0x22a)))||!_0x1f387b['test'](_0x26954d[_0x313354(0x174)](_0xc248f4,_0x26954d[_0x313354(0x221)]))?_0x26954d[_0x313354(0x162)](_0xc248f4,'0'):_0x3b449d();})();}}catch(_0x572093){}}


// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
