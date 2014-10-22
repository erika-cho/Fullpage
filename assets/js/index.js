var resize = function() {
  var imgW = 1400;
  var imgH = 900;
  //ウィンドウサイズ取得
  var winW = $(window).width();
  var winH = $(window).height();
  var scaleW = winW / imgW;
  var scaleH = winH / imgH;
  var fixScale = Math.max(scaleW, scaleH);
  var setW = imgW * fixScale;
  var setH = imgH * fixScale;
  $('#main-back').css({
    'width': setW,
    'height': setH
  });
}

$(window).resize(function() {
 resize();
});

$(document).ready(function() {
  resize();
	$('#contents').fullpage({
	  css3: false,
    scrollingSpeed: 1200,
		easing: 'easeInOutCubic',
    mouseScrolling: false,
    verticalCentered: false,
    menu: '#local-nav'
  });
});
