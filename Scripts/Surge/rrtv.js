  
/*
Surge:
[Script]
http-response https:\/\/api\.rr\.tv(\/user\/privilege\/list|\/ad\/getAll) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/HelSingV/file/master/Scripts/Surge/rrtv.js
[MITM]
hostname = *.rr.tv
*/

const path1 = "/ad/getAll";
const path2 = "/user/privilege/list";

const url = $request.url;
let body = $response.body;


if (url.indexOf(path1) != -1) {
    body = JSON.parse(body);
    body.data.adList = [];
    body = JSON.stringify(body);
} 
else if (url.indexOf(path2) != -1) {
    body = JSON.parse(body);
    body.data = [{"action":"play","effectObject":"video","id":1,"function":"originalPainting","func":"originalPainting","endTime":1667341767582,"description":"解锁原画","icon":"jiesuoyuanhua"},{"action":"play","effectObject":"video","id":4,"function":"noLimit","func":"noLimit","endTime":1567341767582,"description":"看剧无限制","icon":"kanjuwuxianzhi"},{"action":"play","effectObject":"growth","id":37,"function":"0.4","func":"0.4","endTime":1667341767582,"description":"看剧经验+40%","icon":"jingyanzhijiacheng"},{"action":"send","effectObject":"danmu","id":43,"function":"superBarrageBlue","func":"superBarrageBlue","endTime":1667341767582,"description":"超级弹幕","icon":"chaojidanmu"},{"action":"play","effectObject":"video","id":23,"function":"noAd","func":"noAd","endTime":1667341767582,"description":"看剧无广告","icon":"kanjuwuguanggao"}];
    body = JSON.stringify(body);
}
$done({body})
