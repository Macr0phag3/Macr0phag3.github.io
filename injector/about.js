var autoplay = true;
var loop = true;
var songs = {
    name: '完美开局',
    artist: 'Obadiah Brown-Beach',
    url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/about-bgm.mp3',
    cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/bgm-about.png'
}

var festivals = [
    {fdate: "12-25", icon: "❄️", name: '圣诞节', artist: 'Blizzard', url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/Jingle Bells.mp3', cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/ow.png'},
    {fdate: "02-11", icon: "🧧", name: '春节', artist: 'Blizzard', url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/酒馆曲子-Tavern Mittagskrug.mp3', cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/ow.png'},
    {fdate: "11-01", icon: "🎃", name: '万圣节', artist: 'Blizzard', url: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/bgm/这是什么旋律.mp3', cover: 'https://blog-theme-source-1252075454.cos.ap-nanjing.myqcloud.com/img/ow.png' }
]

for (i = 0; i < festivals.length; i++) { 
    if(festival_is_coming(festivals[i]["fdate"])){
      var songs = festivals[i];
      snow(festivals[i]["icon"]);
      break
    }
}
