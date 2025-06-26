var autoplay = true;
var loop = false;
var songs = {
    name: 'さみしい夜道',
    artist: '三澤康広',
    url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/main.mp3',
    cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/bgm-main.png'
}

var festivals = [
    {fdate: "12-25", icon: "❄️", name: '圣诞节', artist: 'Blizzard', url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/暴雪世界-雪国仙境.mp3', cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/暴雪世界（雪国仙境）.png'},
    {fdate: "02-11", icon: "🧧", name: '春节', artist: 'Blizzard', url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/新春.mp3', cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/春节.png'},
    {fdate: "11-01", icon: "🎃", name: '万圣节', artist: 'Blizzard', url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/万圣惊魂夜.mp3', cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/ow.png'},
]

for (i = 0; i < festivals.length; i++) { 
    if(festival_is_coming(festivals[i]["fdate"])){
      var songs = festivals[i];
      snow(festivals[i]["icon"]);
      break;
    }
}
