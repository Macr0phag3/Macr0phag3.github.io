function festival_is_coming(d) {
    var dateEnd = new Date();
    var year=dateEnd.getFullYear();
    var dateBegin = new Date(year+"-"+d+" 00:00:00");
    var dateDiff = dateEnd.getTime() - dateBegin.getTime();
    var dayDiff = Math.abs(Math.floor(dateDiff / (24 * 3600 * 1000)));
    return dayDiff <= 3
}

function snow(icon) {
  //1、定义一片雪花模板
  var flake = $("<div>").css({
      "position": "absolute",
      "color": "#fff"
  }).html(icon);
  //获取页面的宽度，利用这个数来算出，雪花开始时left的值
  var documentWidth = $(document).width();
  //获取页面的高度 相当于雪花下落结束时Y轴的位置
  var documentHieght = $(document).height();
  //定义生成一片雪花的毫秒数
  var millisec = 1000;
  //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
  setInterval(function() {
      //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
      var startLeft = Math.random() * documentWidth;
      //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
      var endLeft = Math.random() * documentWidth;
      //随机生成雪花大小
      var flakeSize = 20 + 10 * Math.random();
      //随机生成雪花下落持续时间
      var durationTime = 4000 + 7000 * Math.random();
      //随机生成雪花下落 开始 时的透明度
      var startOpacity = 0.7 + 0.3 * Math.random();
      //随机生成雪花下落 结束 时的透明度
      var endOpacity = 0.2 + 0.2 * Math.random();
      //3、克隆一个雪花模板,定义雪花的初始样式，拼接到页面中
      flake.clone().appendTo($("body")).css({
          "left": startLeft,
          "opacity": startOpacity,
          "font-size": flakeSize,
          "top": "-25px",
      }).animate({ //执行动画
          "left": endLeft,
          "opacity": endOpacity,
          "top": documentHieght
      }, durationTime, function() {
          //4、当雪花落下后，删除雪花。
          $(this).remove(); 
      });
  }, millisec);
};

//定义获取词语下标
var a_idx = 0;
jQuery(document).ready(function ($) {
  //点击body时触发事件
  $("body").click(function (e) {
    //需要显示的词语
    var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
    //设置词语给span标签
    var $i = $("<span/>").text(a[a_idx]);
    //下标等于原来下标+1  余 词语总数
    a_idx = (a_idx + 1) % a.length;
    //获取鼠标指针的位置，分别相对于文档的左和右边缘。
    //获取x和y的指针坐标
    var x = e.pageX, y = e.pageY;
    //在鼠标的指针的位置给$i定义的span标签添加css样式
    $i.css({
      "z-index": 999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": rand_color()
    });
    // 随机颜色
    function rand_color() {
      return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    }
    //在body添加这个标签
    $("body").append($i);
    //animate() 方法执行 CSS 属性集的自定义动画。
    //该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
    //详情请看http://www.w3school.com.cn/jquery/effect_animate.asp
    $i.animate({
      //将原来的位置向上移动180
      "top": y - 180,
      "opacity": 0
      //1500动画的速度
    }, 1500, function () {
      //时间到了自动删除
      $i.remove();
    });
  });
})
;