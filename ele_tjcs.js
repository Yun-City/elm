/**
 * 变量：elmck: 必填，账号cookie
 * cron 0 0 11 * * *
 * 2023.6.26 更新：首次发布；
 * 2023.7.7 更新：添加延时，增加 cookie 失效验证
 */

const $ = new Env('枫叶_饿了么特级厨师');

const _0x251337=_0x3df7;(function(_0x1da793,_0x18eae2){const _0x31c655=_0x3df7,_0x23c9cd=_0x1da793();while(!![]){try{const _0x1f6fbe=parseInt(_0x31c655(0x136))/(-0x14e1+0x2059+0xb77*-0x1)*(parseInt(_0x31c655(0x135))/(0x2*0x106c+-0x1ed3+-0x203))+parseInt(_0x31c655(0x1a0))/(-0xec5*-0x1+-0x19ee*-0x1+-0x28b*0x10)+parseInt(_0x31c655(0x185))/(-0x13ba+0x1665+-0x2a7)+parseInt(_0x31c655(0x17c))/(-0xdf1+0x1*0x25f4+-0x17fe)+parseInt(_0x31c655(0x11e))/(-0xb08+-0x4d4+0xfe2)*(parseInt(_0x31c655(0x127))/(0x1169*0x1+0x7+-0x1169))+-parseInt(_0x31c655(0xf0))/(-0xaf1+-0x14c1+-0x1*-0x1fba)+parseInt(_0x31c655(0x11b))/(-0x1ebb+0x3f9+-0x1acb*-0x1)*(-parseInt(_0x31c655(0xf6))/(0xf0a+-0x4a9*-0x5+-0x5*0x7a9));if(_0x1f6fbe===_0x18eae2)break;else _0x23c9cd['push'](_0x23c9cd['shift']());}catch(_0x5ef276){_0x23c9cd['push'](_0x23c9cd['shift']());}}}(_0x599c,0x7456f*-0x1+0x28*0x5e78+0x64190));const {validateCarmeWithType:_0x30a8a3,commonRequest:_0x46161b,getCookies:_0x210594,getUserInfoWithX:_0x152c2f,wait:_0x1a2f0c,getCoordinates,sign,tryCatchPromise,getToken,checkCk,wait}=require(_0x251337(0x17d)),request=require('request'),_0x20a517=process[_0x251337(0x153)][_0x251337(0x182)],HOST=process['env'][_0x251337(0x130)],_0x2bec0b=0x65b+-0x31*0x74+0xfdc;function _0x40ab69(_0x24789a){const _0x302693=_0x251337,_0x4c38db={'jkqfS':function(_0x415b0a,_0x4a4ecb){return _0x415b0a===_0x4a4ecb;}};return _0x4c38db['jkqfS'](Object[_0x302693(0x16b)](_0x24789a)[_0x302693(0x164)],0x261*0xb+0xf0d*-0x2+0x3ef);}async function h5Req(_0x23c069,_0x120645){const _0x81667d=_0x251337,_0x3e0a02={'yIihL':function(_0x4f82f1,_0x36d912){return _0x4f82f1(_0x36d912);},'SeGfA':'shopping.ele.me','cprkT':_0x81667d(0x15e),'MNjIR':'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7','EsBIg':_0x81667d(0x167),'mLWtV':_0x81667d(0x123),'faLDa':_0x81667d(0xfd),'jutjP':_0x81667d(0x15a),'OUsVT':_0x81667d(0x17e),'OfIMI':_0x81667d(0xe7),'zmVKl':function(_0x2851c9,_0x3e71aa,_0x2fb90b){return _0x2851c9(_0x3e71aa,_0x2fb90b);},'FWFWt':function(_0xdfcb99,_0x43983b){return _0xdfcb99+_0x43983b;},'fFmmn':function(_0x2f0b14,_0x2e7ccd){return _0x2f0b14+_0x2e7ccd;},'fpKbi':function(_0x8094c,_0x3a4168){return _0x8094c+_0x3a4168;},'kOhyj':function(_0x48895d,_0x57d78f){return _0x48895d+_0x57d78f;},'oFCHU':'https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=','rjxME':_0x81667d(0x109),'QBSpP':'&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0','dDxSa':_0x81667d(0x198)},_0x2a52bb={'authority':_0x3e0a02[_0x81667d(0x11c)],'accept':_0x3e0a02['cprkT'],'accept-language':_0x3e0a02[_0x81667d(0x10c)],'cache-control':_0x81667d(0xfd),'content-type':_0x3e0a02[_0x81667d(0xf4)],'origin':_0x3e0a02[_0x81667d(0x106)],'pragma':_0x3e0a02['faLDa'],'referer':_0x3e0a02[_0x81667d(0x187)],'cookie':_0x23c069,'x-ele-ua':_0x3e0a02[_0x81667d(0x169)],'user-agent':_0x3e0a02[_0x81667d(0x138)]},_0x3a830e=new Date()[_0x81667d(0x156)](),_0x36ca25=0x20d99*-0x35+0x103ac0d+-0x49f1*-0x8e;var _0x215d8c='data='+_0x3e0a02[_0x81667d(0x18f)](encodeURIComponent,JSON[_0x81667d(0x114)](_0x120645));const _0x52249a=_0x3e0a02[_0x81667d(0x18f)](getToken,_0x23c069),_0x15dd6d=_0x52249a[_0x81667d(0x194)]('_')[0x47*-0x53+-0xb99*-0x3+-0xbc6*0x1],_0x197e59=await _0x3e0a02[_0x81667d(0x112)](sign,_0x3e0a02[_0x81667d(0x145)](_0x3e0a02[_0x81667d(0x145)](_0x3e0a02[_0x81667d(0x145)](_0x3e0a02[_0x81667d(0x12f)](_0x15dd6d,'&')+_0x3a830e,'&')+_0x36ca25,'&'),JSON[_0x81667d(0x114)](_0x120645)),process[_0x81667d(0x153)][_0x81667d(0x182)]),_0x4b1ea2={'url':_0x3e0a02['FWFWt'](_0x3e0a02[_0x81667d(0xf7)](_0x3e0a02[_0x81667d(0x16f)](_0x3e0a02[_0x81667d(0x152)],_0x3a830e),_0x3e0a02[_0x81667d(0xff)]),_0x197e59)+_0x3e0a02['QBSpP'],'method':_0x3e0a02[_0x81667d(0x101)],'headers':_0x2a52bb,'body':_0x215d8c};return _0x3e0a02[_0x81667d(0x18f)](tryCatchPromise,_0xfb9fe6=>{request(_0x4b1ea2,(_0x830e94,_0x149308,_0x587b3a)=>{const _0x32d59f=_0x3df7;_0x3e0a02[_0x32d59f(0x18f)](_0xfb9fe6,JSON[_0x32d59f(0x117)](_0x587b3a));});});}async function initEnv(_0x2d0cab,_0x448e08,_0x1e4356){const _0x3155c5=_0x251337,_0x4905bd={'CRkdl':function(_0x21c9d7,_0x5311fe){return _0x21c9d7(_0x5311fe);},'dsDmE':_0x3155c5(0xef),'HeVnZ':_0x3155c5(0x189),'eAWNQ':function(_0x14cc7a,_0x523866){return _0x14cc7a===_0x523866;},'GIvAU':function(_0x4965be,_0x3bac0a){return _0x4965be!==_0x3bac0a;},'poHxD':'qynTs','yxsuS':_0x3155c5(0x144),'jhWCx':function(_0x4d993e){return _0x4d993e();},'CNtrz':function(_0x9fe34b,_0x44eace){return _0x9fe34b!==_0x44eace;},'FYvDx':_0x3155c5(0x118),'tumKe':function(_0x3ff112,_0x308cb3){return _0x3ff112||_0x308cb3;},'omNei':'HbOAx','yFNMD':function(_0x2a00db,_0x8b82d2,_0x204aae){return _0x2a00db(_0x8b82d2,_0x204aae);},'FECWk':'Apifox/1.0.0\x20(imsb)','AjkNU':_0x3155c5(0x15e)},_0x4972d6=_0x20a517,_0x52e1da={'method':_0x3155c5(0x198),'url':HOST+_0x3155c5(0xe9),'headers':{'user-agent':_0x4905bd[_0x3155c5(0x166)],'content-type':_0x4905bd[_0x3155c5(0x14c)]},'body':JSON[_0x3155c5(0x114)]({'carmi':_0x4972d6,'latitude':_0x448e08,'longitude':_0x1e4356})};return _0x4905bd['CRkdl'](tryCatchPromise,_0x368972=>{const _0x733fe7=_0x3155c5,_0x41fc16={'NTrqz':function(_0x59e86d,_0x1c7977){return _0x4905bd['CRkdl'](_0x59e86d,_0x1c7977);}};_0x4905bd[_0x733fe7(0x131)]!==_0x4905bd[_0x733fe7(0x131)]?_0x41fc16[_0x733fe7(0x12a)](_0x4dbc1a,_0xad8d7c['parse'](_0x17f21e)):_0x4905bd[_0x733fe7(0xfa)](request,_0x52e1da,async(_0x4f1617,_0x2f2c21,_0x1edf00)=>{const _0x48b1c2=_0x733fe7,_0x2dc433={'dfYFH':function(_0x444a4d,_0x5aea50){const _0x5077ac=_0x3df7;return _0x4905bd[_0x5077ac(0x162)](_0x444a4d,_0x5aea50);},'GzYQo':_0x4905bd[_0x48b1c2(0x184)],'LmvpA':_0x4905bd['HeVnZ']};if(!_0x4f1617&&_0x2f2c21[_0x48b1c2(0x13b)]===-0x1*-0x1d1b+0x10df+0x41*-0xb2){_0x1edf00=JSON[_0x48b1c2(0x117)](_0x1edf00);if(_0x4905bd[_0x48b1c2(0x12e)](_0x1edf00['code'],-0x35*0x83+-0x2eea+0x9829))_0x368972(_0x1edf00[_0x48b1c2(0x11d)]);else{if(_0x4905bd['GIvAU'](_0x4905bd['poHxD'],_0x4905bd[_0x48b1c2(0x175)]))console['log'](_0x1edf00[_0x48b1c2(0x108)]),_0x4905bd[_0x48b1c2(0x15d)](_0x368972);else{if(_0x4add9d)return _0xc634ab;else GpLwma[_0x48b1c2(0x1a2)](_0x866a48,0x1*0xaff+-0xf3*0x11+-0x5e*-0xe);}}}else _0x4905bd[_0x48b1c2(0x133)](_0x4905bd['FYvDx'],'rSkav')?function(){return!![];}[_0x48b1c2(0x192)](GpLwma[_0x48b1c2(0x143)]+GpLwma['LmvpA'])[_0x48b1c2(0x148)](_0x48b1c2(0x100)):(console[_0x48b1c2(0x178)](_0x4905bd[_0x48b1c2(0x10b)](_0x4f1617,_0x1edf00)),_0x368972());});});}async function _0x154fb2(_0x260685,_0x1c5c8f,_0x304efb,_0x34de72){const _0x9c218d=_0x251337,_0x4ec74a={'pAOjK':function(_0x5d7ab5,_0x55df5e){return _0x5d7ab5(_0x55df5e);},'OdIhX':_0x9c218d(0x173),'mRtzO':function(_0x4327f7,_0xcb05f5){return _0x4327f7(_0xcb05f5);},'vqMQS':_0x9c218d(0xee),'zfSda':function(_0x3dd53e,_0x219ebf){return _0x3dd53e+_0x219ebf;},'OUGFl':function(_0x417764,_0x399410){return _0x417764+_0x399410;},'DblKS':_0x9c218d(0x12d),'spaFG':function(_0x40edac,_0x256cb2){return _0x40edac===_0x256cb2;},'WwjHV':function(_0x1aacc1,_0x487e18,_0x515b17,_0x57f385){return _0x1aacc1(_0x487e18,_0x515b17,_0x57f385);},'DwPdo':'XIAODANGJIA','OmzuG':_0x9c218d(0xec),'MRCEv':_0x9c218d(0x176),'FqlYb':'{\x22actId\x22:\x2220230117134129770153614517\x22,\x22bizScene\x22:\x22XIAODANGJIA\x22,\x22desc\x22:\x22玩特级厨师挑战赛\x22}','EPNyR':_0x9c218d(0x19c),'HpVrp':_0x9c218d(0x13a),'wQmBQ':function(_0x434c1f,_0x5f56b8,_0x90bc5b){return _0x434c1f(_0x5f56b8,_0x90bc5b);},'OnFvp':function(_0x41261b,_0x3caad0){return _0x41261b(_0x3caad0);},'oeEJY':function(_0x1d6b18,_0x53f9bd){return _0x1d6b18!==_0x53f9bd;},'xixLH':'BZrfu','VxKLk':_0x9c218d(0x19a),'ZgSdA':function(_0x1b8714,_0x5a9ac6){return _0x1b8714+_0x5a9ac6;},'sErYy':_0x9c218d(0x163),'cTZGm':_0x9c218d(0x196),'YtcSv':function(_0x47bf4b,_0x107367){return _0x47bf4b!==_0x107367;},'EMrQk':function(_0x3f17e9,_0x47634d,_0x5f5cab,_0x13da53,_0x38f483){return _0x3f17e9(_0x47634d,_0x5f5cab,_0x13da53,_0x38f483);},'qOQnr':function(_0x30c198,_0x562319){return _0x30c198(_0x562319);},'DZcBV':_0x9c218d(0x14f)},{UA:_0x330ea4,umidtoken:_0x9bd501}=await _0x4ec74a[_0x9c218d(0x168)](initEnv,'',_0x304efb,_0x34de72),_0x333124={'bizScene':_0x4ec74a['DwPdo'],'actId':_0x9c218d(0x16e),'uniqueId':'','latitude':_0x304efb,'longitude':_0x34de72,'bizCode':_0x9c218d(0x18b),'collectionId':_0x4ec74a[_0x9c218d(0x161)],'componentId':_0x4ec74a['MRCEv'],'extParams':_0x4ec74a[_0x9c218d(0xfe)],'ua':_0x330ea4,'umidToken':_0x9bd501,'asac':_0x4ec74a[_0x9c218d(0x174)]};try{if(_0x4ec74a[_0x9c218d(0x19d)](_0x4ec74a['HpVrp'],_0x9c218d(0x13a))){const _0x2fab5b=await _0x4ec74a[_0x9c218d(0x14a)](h5Req,_0x260685,_0x333124);if(_0x4ec74a['OnFvp'](_0x40ab69,_0x2fab5b[_0x9c218d(0x11d)][_0x9c218d(0x11d)])){if(_0x4ec74a[_0x9c218d(0xf1)](_0x4ec74a['xixLH'],_0x4ec74a[_0x9c218d(0x199)]))eIzoIy[_0x9c218d(0x128)](_0x442cd5,0x3*0x7db+-0x1*0x2635+0x4*0x3a9);else return console['log'](_0x2fab5b[_0x9c218d(0x111)][-0x36b*-0x8+-0x25bc+0xa64]),![];}else{if(_0x4ec74a['VxKLk']!=='gAXfm'){const _0x166c6c=_0x2fab5b[_0x9c218d(0x11d)][_0x9c218d(0x11d)]['sendRightList'][0x21e6+-0x163d*0x1+-0x1*0xba9][_0x9c218d(0x13e)][_0x9c218d(0x10f)];return console[_0x9c218d(0x178)](_0x4ec74a[_0x9c218d(0x146)](_0x4ec74a[_0x9c218d(0x16c)],_0x166c6c),_0x4ec74a[_0x9c218d(0x129)]),_0x166c6c&&_0x4ec74a['YtcSv'](_0x166c6c,-0x7c*-0x3d+-0xc95*-0x1+-0x2a20)&&await _0x4ec74a[_0x9c218d(0x171)](_0x154fb2,_0x260685,_0x1c5c8f,_0x304efb,_0x34de72),await _0x4ec74a[_0x9c218d(0x19f)](_0x1a2f0c,-0x7*0x259+0x1a8c+0x50e*-0x2),_0x166c6c!==-0x1fb3+0x228f+-0x2db;}else return!![];}}else{const _0xe9885d=new _0x16bc75(eIzoIy[_0x9c218d(0x12b)]),_0x373576=new _0xef24e2('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x5079a4=eIzoIy[_0x9c218d(0x15c)](_0x52bf7f,eIzoIy['vqMQS']);!_0xe9885d[_0x9c218d(0x170)](eIzoIy[_0x9c218d(0x122)](_0x5079a4,_0x9c218d(0x104)))||!_0x373576[_0x9c218d(0x170)](eIzoIy['OUGFl'](_0x5079a4,eIzoIy['DblKS']))?_0x5079a4('0'):_0x42d02e();}}catch(_0x2f6dcd){if(_0x4ec74a['spaFG'](_0x4ec74a[_0x9c218d(0x10a)],_0x9c218d(0x14f)))return![];else _0x505cb2=_0x261425['parse'](_0xe664b1),_0x4ec74a[_0x9c218d(0x19d)](_0x490208[_0x9c218d(0xfc)],0x4241+0x1751*0x5+-0x68b6)?_0x4ec74a[_0x9c218d(0x15c)](_0x508db9,_0x5000fa['data']):(_0x429947[_0x9c218d(0x178)](_0x3d7274[_0x9c218d(0x108)]),_0x4522fe());}}function _0x3df7(_0x384f85,_0x311f3a){const _0x488a7c=_0x599c();return _0x3df7=function(_0xc1f766,_0x5afcb8){_0xc1f766=_0xc1f766-(-0x1*-0x23da+0x9ee*-0x2+-0xf17);let _0x524aee=_0x488a7c[_0xc1f766];return _0x524aee;},_0x3df7(_0x384f85,_0x311f3a);}async function _0x3ca360(){const _0x3c187a=_0x251337,_0x880c19={'potuo':'function\x20*\x5c(\x20*\x5c)','aFoNe':function(_0x44137e,_0x327b5d){return _0x44137e(_0x327b5d);},'gUsGv':function(_0x1967b2,_0x25dc02){return _0x1967b2+_0x25dc02;},'QEjnt':function(_0xe5de9){return _0xe5de9();},'CXhFr':function(_0x3001c5,_0xbbc7c4,_0xda23e){return _0x3001c5(_0xbbc7c4,_0xda23e);},'UsZgh':function(_0x3739c0,_0x5e6c6d){return _0x3739c0!==_0x5e6c6d;},'KcCbO':_0x3c187a(0x150),'yGUba':_0x3c187a(0x110),'sgJUq':'\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','TqxWU':_0x3c187a(0xee),'ILFIE':function(_0x4b0da,_0x5b110c){return _0x4b0da+_0x5b110c;},'fdcOt':function(_0x451996,_0x26ab17){return _0x451996!==_0x26ab17;},'wErdk':_0x3c187a(0xf2),'hZthg':_0x3c187a(0x121),'hbElV':_0x3c187a(0x15f),'RQnJY':function(_0x129314,_0x490c4c,_0x608560){return _0x129314(_0x490c4c,_0x608560);},'AJzum':'elmck','mPeEM':function(_0x1b026c,_0x1d611a){return _0x1b026c<_0x1d611a;},'pnxLf':function(_0x2233ea,_0x1f305f){return _0x2233ea!==_0x1f305f;},'jlume':'YjPcQ','yZeEL':function(_0x4ed452,_0x47f4dd,_0x255045){return _0x4ed452(_0x47f4dd,_0x255045);},'ZXaRU':function(_0xfd73c8,_0x5bffbb,_0x4a2056,_0x1b8262){return _0xfd73c8(_0x5bffbb,_0x4a2056,_0x1b8262);},'WOZbQ':_0x3c187a(0x140),'QkrWX':_0x3c187a(0xf5),'fjppJ':_0x3c187a(0x18a),'HuFCX':function(_0x438742,_0x5861ea,_0x284ff7,_0x4ed351,_0x130256){return _0x438742(_0x5861ea,_0x284ff7,_0x4ed351,_0x130256);},'SjFtY':'防止挤爆了，延时\x201\x20秒'},_0x16586b=(function(){const _0x19f6a0=_0x3c187a,_0x384992={'ncYxg':'ElNOs','IroTT':_0x880c19[_0x19f6a0(0x19b)],'FFDEk':function(_0x1a3d0f,_0xe2f0c3){const _0x28939c=_0x19f6a0;return _0x880c19[_0x28939c(0x195)](_0x1a3d0f,_0xe2f0c3);},'zxzZv':function(_0x5305ca,_0x12953e){const _0x4c01dd=_0x19f6a0;return _0x880c19[_0x4c01dd(0x13c)](_0x5305ca,_0x12953e);},'aUjZD':_0x19f6a0(0x104),'vjmNn':function(_0x3451bd,_0x5ee46b){const _0x1b2184=_0x19f6a0;return _0x880c19[_0x1b2184(0x13c)](_0x3451bd,_0x5ee46b);},'odZuG':function(_0x48c604,_0xb43aec){const _0x20fabc=_0x19f6a0;return _0x880c19[_0x20fabc(0x195)](_0x48c604,_0xb43aec);},'FsSoy':function(_0x3ed684){const _0x7826be=_0x19f6a0;return _0x880c19[_0x7826be(0x179)](_0x3ed684);},'AmDIt':function(_0x35b734,_0x36a30f,_0x1be086){const _0x447e51=_0x19f6a0;return _0x880c19[_0x447e51(0x14b)](_0x35b734,_0x36a30f,_0x1be086);}};if(_0x880c19['UsZgh'](_0x880c19[_0x19f6a0(0xf3)],_0x880c19[_0x19f6a0(0x186)])){let _0x47f1ac=!![];return function(_0x549614,_0x348595){const _0x33d475=_0x47f1ac?function(){const _0x5e4c93=_0x3df7;if(_0x384992[_0x5e4c93(0x11a)]!==_0x384992[_0x5e4c93(0x11a)])_0x578b5f['log'](_0x5c6da0['message']),_0x2bc144();else{if(_0x348595){const _0x4e1460=_0x348595[_0x5e4c93(0x155)](_0x549614,arguments);return _0x348595=null,_0x4e1460;}}}:function(){};return _0x47f1ac=![],_0x33d475;};}else VlyHgk['AmDIt'](_0x3298cf,this,function(){const _0x4ab679=_0x19f6a0,_0x586f9a=new _0x364ff9(VlyHgk[_0x4ab679(0x134)]),_0x528b6a=new _0x697d55(_0x4ab679(0xf9),'i'),_0x168651=VlyHgk[_0x4ab679(0x120)](_0x4d0059,'init');!_0x586f9a[_0x4ab679(0x170)](VlyHgk[_0x4ab679(0x177)](_0x168651,VlyHgk[_0x4ab679(0x188)]))||!_0x528b6a['test'](VlyHgk[_0x4ab679(0x139)](_0x168651,_0x4ab679(0x12d)))?VlyHgk[_0x4ab679(0x124)](_0x168651,'0'):VlyHgk[_0x4ab679(0x191)](_0x4c3001);})();}());(function(){const _0x286985=_0x3c187a,_0x4bd6b0={'QXdQg':_0x880c19['potuo'],'MxSdJ':_0x880c19[_0x286985(0x119)],'pOldI':function(_0x1e6a67,_0x1c5052){return _0x880c19['aFoNe'](_0x1e6a67,_0x1c5052);},'SwAST':_0x880c19['TqxWU'],'kZzyr':function(_0x564b6e,_0x3dd766){const _0xaf4fcc=_0x286985;return _0x880c19[_0xaf4fcc(0x149)](_0x564b6e,_0x3dd766);},'UAvOm':_0x286985(0x104),'wqcJe':function(_0x916456,_0x332081){return _0x880c19['fdcOt'](_0x916456,_0x332081);},'cEsDb':_0x880c19['wErdk'],'agpIh':function(_0x3c68ea,_0x45cd42){return _0x3c68ea(_0x45cd42);},'yISZM':function(_0x3df046){return _0x3df046();}};if(_0x880c19[_0x286985(0xf8)](_0x880c19[_0x286985(0x13f)],_0x880c19['hbElV']))_0x880c19[_0x286985(0x113)](_0x16586b,this,function(){const _0x441870=_0x286985,_0x1b7250=new RegExp(_0x4bd6b0['QXdQg']),_0x5b6bab=new RegExp(_0x4bd6b0[_0x441870(0x132)],'i'),_0x5867ea=_0x4bd6b0['pOldI'](_0x2ce375,_0x4bd6b0[_0x441870(0x1a3)]);if(!_0x1b7250[_0x441870(0x170)](_0x4bd6b0['kZzyr'](_0x5867ea,_0x4bd6b0['UAvOm']))||!_0x5b6bab[_0x441870(0x170)](_0x5867ea+_0x441870(0x12d))){if(_0x4bd6b0['wqcJe'](_0x4bd6b0['cEsDb'],_0x4bd6b0[_0x441870(0x12c)]))return![];else _0x4bd6b0[_0x441870(0x157)](_0x5867ea,'0');}else _0x4bd6b0[_0x441870(0x14e)](_0x2ce375);})();else return![];}()),await _0x30a8a3(_0x20a517,0x52*-0x1a+-0x85*-0x3+-0x22*-0x33);const _0x29a97b=_0x210594(_0x880c19[_0x3c187a(0x141)]),{latitude:_0x62f851,longitude:_0x212228}=await _0x880c19[_0x3c187a(0x179)](getCoordinates);for(let _0x26bc1b=-0x4b1*-0x2+-0xca*-0x7+0x774*-0x2;_0x880c19[_0x3c187a(0x142)](_0x26bc1b,_0x29a97b[_0x3c187a(0x164)]);_0x26bc1b++){if(_0x880c19[_0x3c187a(0x126)]('adsjO',_0x880c19[_0x3c187a(0x115)])){let _0x51b8cc=_0x29a97b[_0x26bc1b],_0x1cf034=await _0x880c19[_0x3c187a(0x19e)](_0x152c2f,_0x51b8cc,_0x2bec0b),_0x437a08=await _0x880c19['ZXaRU'](checkCk,_0x51b8cc,_0x26bc1b,process[_0x3c187a(0x153)][_0x3c187a(0x182)]);if(!_0x1cf034||!_0x1cf034[_0x3c187a(0xeb)])continue;const _0x308909=_0x1cf034['localId'];let _0x122a71=_0x1cf034[_0x3c187a(0x116)];console[_0x3c187a(0x178)](_0x880c19[_0x3c187a(0x11f)]+(_0x26bc1b+(-0x1315+-0xf32+0x2248)),_0x122a71,_0x880c19['QkrWX']),console[_0x3c187a(0x178)](_0x880c19['fjppJ'],_0x308909),await _0x880c19[_0x3c187a(0x165)](_0x154fb2,_0x437a08,'',_0x62f851[_0x3c187a(0x13d)]('\x20',''),_0x212228[_0x3c187a(0x13d)]('\x20','')),console[_0x3c187a(0x178)](_0x880c19[_0x3c187a(0x15b)]),await _0x880c19[_0x3c187a(0x195)](_0x1a2f0c,0x1*-0x8c+-0x1d75+0x17*0x14e);}else{const _0x24e1a2=_0x4f855d?function(){if(_0xa5fb1d){const _0x498c13=_0x472016['apply'](_0x331be1,arguments);return _0x244d23=null,_0x498c13;}}:function(){};return _0x1401de=![],_0x24e1a2;}}process['exit'](-0x22df+0x25e7+0x308*-0x1);}function _0x599c(){const _0x10ef4f=['EMrQk','counter','function\x20*\x5c(\x20*\x5c)','EPNyR','yxsuS','20230505143809276394718532','zxzZv','log','QEjnt','srzcU','bTgkC','2311565ehevZe','./common.js','RenderWay/H5\x20AppName/wap\x20Mozilla/5.0\x20(Linux;\x20Android\x208.0.0;\x20SM-G955U\x20Build/R16NW)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/87.0.4280.141\x20Mobile\x20Safari/537.36','xfAgZ','rpeCa','zaJVp','ELE_CARME','mMfkD','dsDmE','1401332cSDKkn','yGUba','jutjP','aUjZD','gger','账号的\x20id\x20为','XIAODANGJIA','CIGjj','kSzVI','jizvI','yIihL','IPRSk','FsSoy','constructor','XzzZV','split','aFoNe','乐园币','mymtW','POST','xixLH','ANKIQ','potuo','2A22C0239QW1FOL3UUQY7U','spaFG','yZeEL','qOQnr','2288517umAcgU','xEPUd','dfYFH','SwAST','Mozilla/5.0\x20(Linux;\x20Android\x208.0.0;\x20SM-G955U\x20Build/R16NW)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/87.0.4280.141\x20Mobile\x20Safari/537.36','stateObject','/check/getumtid','EIhkW','userName','20230421102945045949799658','kgszS','init','debu','9914232MAdIgn','oeEJY','XiiVj','KcCbO','EsBIg','*********','20pPcRMl','fpKbi','fdcOt','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','yFNMD','Xaieb','code','no-cache','FqlYb','rjxME','action','dDxSa','ltmbF','vQetJ','chain','XQGvq','mLWtV','while\x20(true)\x20{}','message','&sign=','DZcBV','tumKe','MNjIR','WtIXh','string','amount','XzQDI','ret','zmVKl','RQnJY','stringify','jlume','encryptMobile','parse','rSkav','sgJUq','ncYxg','6338295DDQRxS','SeGfA','data','6wozPnD','WOZbQ','FFDEk','YPZzV','zfSda','https://r.ele.me','odZuG','omITK','pnxLf','11615275wWUvsG','pAOjK','cTZGm','NTrqz','OdIhX','cEsDb','input','eAWNQ','fFmmn','HOST','omNei','MxSdJ','CNtrz','IroTT','2qAkhTv','313812wqSWVm','sTlfe','OfIMI','vjmNn','yRPEM','statusCode','gUsGv','replaceAll','discountInfo','hZthg','\x0a******\x20#','AJzum','mPeEM','GzYQo','cCvMG','FWFWt','ZgSdA','mgAUQ','call','ILFIE','wQmBQ','CXhFr','AjkNU','LUKcq','yISZM','lTUaV','OEhvy','Bvrem','oFCHU','env','Fvsnb','apply','getTime','agpIh','nPxVq','IpeQM','https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0','SjFtY','mRtzO','jhWCx','application/json','ExrKC','QMUno','OmzuG','CRkdl','特级厨师闯关成功。获得：','length','HuFCX','FECWk','application/x-www-form-urlencoded','WwjHV','OUsVT','yXjnp','values','sErYy','hLjvs','20230117134129770153614517','kOhyj','test'];_0x599c=function(){return _0x10ef4f;};return _0x599c();}_0x3ca360();function _0x2ce375(_0x241cf2){const _0x479373=_0x251337,_0x1929ac={'mRKrO':function(_0x436e0e,_0x5efef4){return _0x436e0e+_0x5efef4;},'XzzZV':'debu','mMfkD':function(_0x2cf4c0,_0x157deb){return _0x2cf4c0!==_0x157deb;},'srzcU':_0x479373(0x17b),'WtIXh':function(_0x2dc631,_0x3b0e1d){return _0x2dc631===_0x3b0e1d;},'xfAgZ':_0x479373(0x10e),'jizvI':_0x479373(0x107),'zaJVp':_0x479373(0x172),'Xaieb':function(_0xb877a5,_0x439bfc){return _0xb877a5!==_0x439bfc;},'IpeQM':_0x479373(0xea),'kSzVI':function(_0x40e057,_0x3a7f85){return _0x40e057+_0x3a7f85;},'CIGjj':function(_0x1399c4,_0x60ef6c){return _0x1399c4/_0x60ef6c;},'Bvrem':_0x479373(0x164),'omITK':function(_0x2338dd,_0x1c40aa){return _0x2338dd%_0x1c40aa;},'XQGvq':'nHLsK','QMUno':_0x479373(0x1a1),'vQetJ':function(_0x29dfde,_0x1a073b){return _0x29dfde+_0x1a073b;},'kgszS':_0x479373(0x100),'nPxVq':'gger','mgAUQ':function(_0x46dca4,_0x34d39b){return _0x46dca4(_0x34d39b);},'OCRCr':function(_0x6e659b,_0x3c9c15,_0xbf4845){return _0x6e659b(_0x3c9c15,_0xbf4845);},'VgHtN':'Jcpse','rpeCa':_0x479373(0x197),'XTRtA':_0x479373(0x14d),'yXjnp':_0x479373(0x16d),'sTlfe':function(_0x57f12f,_0x1a37e2){return _0x57f12f(_0x1a37e2);}};function _0x1f750b(_0x517a5c){const _0x1c132e=_0x479373,_0x202314={'JPVCe':function(_0x45c565,_0x566efe){return _0x1929ac['mRKrO'](_0x45c565,_0x566efe);},'ltmbF':_0x1929ac[_0x1c132e(0x193)],'Fvsnb':'gger','ylSFa':'stateObject'};if(_0x1929ac[_0x1c132e(0x183)](_0x1c132e(0x190),_0x1929ac[_0x1c132e(0x17a)])){if(_0x1929ac[_0x1c132e(0x10d)](typeof _0x517a5c,_0x1929ac[_0x1c132e(0x17f)]))return function(_0x555d3f){}[_0x1c132e(0x192)](_0x1929ac[_0x1c132e(0x18e)])[_0x1c132e(0x155)](_0x1929ac[_0x1c132e(0x181)]);else{if(_0x1929ac[_0x1c132e(0xfb)](_0x1c132e(0xea),_0x1929ac[_0x1c132e(0x159)]))return _0x1a11a0[_0x1c132e(0x178)](_0x1e5f3e[_0x1c132e(0x111)][0x268b+0xc*-0x1d8+-0x106b]),![];else _0x1929ac[_0x1c132e(0xfb)](_0x1929ac[_0x1c132e(0x18d)]('',_0x1929ac[_0x1c132e(0x18c)](_0x517a5c,_0x517a5c))[_0x1929ac[_0x1c132e(0x151)]],0x1abb+-0x11*0x21d+0x933)||_0x1929ac[_0x1c132e(0x10d)](_0x1929ac[_0x1c132e(0x125)](_0x517a5c,0x427*0x5+0x20c3+-0x3572),0x6c9+-0xc*0x21+-0x1*0x53d)?_0x1929ac[_0x1c132e(0xfb)](_0x1929ac[_0x1c132e(0x105)],_0x1929ac[_0x1c132e(0x160)])?function(){return!![];}[_0x1c132e(0x192)](_0x1929ac[_0x1c132e(0x103)](_0x1929ac[_0x1c132e(0x193)],'gger'))[_0x1c132e(0x148)](_0x1929ac[_0x1c132e(0xed)]):function(){return![];}['constructor'](_0x202314['JPVCe'](_0x202314[_0x1c132e(0x102)],_0x202314[_0x1c132e(0x154)]))[_0x1c132e(0x155)](_0x202314['ylSFa']):function(){return![];}[_0x1c132e(0x192)](_0x1929ac[_0x1c132e(0x103)](_0x1929ac[_0x1c132e(0x193)],_0x1929ac[_0x1c132e(0x158)]))['apply'](_0x1c132e(0xe8));}_0x1929ac[_0x1c132e(0x147)](_0x1f750b,++_0x517a5c);}else{if(_0x4c0936){const _0x38adfc=_0x176597[_0x1c132e(0x155)](_0x5bbb75,arguments);return _0x10afaf=null,_0x38adfc;}}}try{if(_0x1929ac['VgHtN']===_0x1929ac[_0x479373(0x180)])return function(_0xaaebd9){}[_0x479373(0x192)](_0x1929ac[_0x479373(0x18e)])[_0x479373(0x155)](_0x1929ac[_0x479373(0x181)]);else{if(_0x241cf2)return _0x1f750b;else _0x1929ac['XTRtA']===_0x1929ac[_0x479373(0x16a)]?_0x1929ac['OCRCr'](_0x2b53c1,_0x50b36a,(_0x104cdd,_0x5b465a,_0x45091f)=>{const _0x3b57e5=_0x479373;_0x3bb019(_0x20d3b6[_0x3b57e5(0x117)](_0x45091f));}):_0x1929ac[_0x479373(0x137)](_0x1f750b,0x1*-0x39e+0x2309*0x1+0x17f*-0x15);}}catch(_0x3ab379){}}

// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }