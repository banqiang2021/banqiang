// ==UserScript==
// @name         会员视频解析
// @namespace    http://QQ.COM
// @version      0.231
// @description  try to DESTrOY the world!
// @author       张由之
// @include       *://v.qq.com/x/cover/*
// @include       *://*.mgtv.com/b/*
// @include       *://*.le.com/ptv/vplay/*
// @include       *://v.youku.com/v_show/*
// @include       *://*.iqiyi.com/v_*
// @include       *://*.tudou.com/albumplay/*
// @include       *://*.wasu.cn/Play/show/id/*
// @include       *://tv.sohu.com/20*
// @include       *://film.sohu.com/album/*
// @include       *://ddp.vip.pptv.com/vod_detail/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var cracks=[
        {name:"无名小站",url:"http://www.wmxz.wang/video.php?url=%s"},
        {name:"47影视云",url:"http://api.47ks.com/webcloud/?v=%s"},
        {name:"71靠椅",url:"http://jx.71ki.com/index.php?url=%s"},
        {name:"爱看影院",url:"http://www.521804.com/www/jiexi.php?url=%s"}
    ];
    var select=document.createElement("select");
    select.style.cssText="position:absolute;z-index:999999;";
    select.innerHTML="<option>vip视频解析</option>";
    cracks.forEach(function(item){
        var optionStr="<option value='"+item.url+"'>"+item.name+"</option>";
        select.innerHTML+=optionStr;
    });
    select.onchange=function(){window.location.href=select.options[select.options.selectedIndex].value.replace("%s",location.href);};
    var video=document.querySelector("object");
    if(video){
        video.parentNode.appendChild(select);
    }
})();
