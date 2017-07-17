/**
 * Created by yanma on 17-7-5.
 */
//设置不同设备根元素的fontSize
(function(d, w) {
  var docEl = d.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
          return;
        }
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
      };

  if (!d.addEventListener) return;
  w.addEventListener(resizeEvt, recalc, false);
  d.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//点击按钮出现弹窗和弹窗收回
(function() {
  var mask = document.getElementsByClassName('mask')[0];
  var selfContent = document.getElementsByClassName('self-content')[0];
  var btnRule = document.getElementsByClassName('btn-rule')[0];
  var introClose = document.getElementsByClassName('intro-close')[0];
  var noScroll = document.getElementsByTagName('body')[0];
  btnRule.addEventListener('click', function () {
    mask.style.display = 'block';
    selfContent.style.display = 'block';
    noScroll.classList.add('overflow');
  });
  mask.addEventListener('click', function () {
    mask.style.display = 'none';
    selfContent.style.display = 'none';
    noScroll.classList.remove('overflow');
  });
  introClose.addEventListener('click', function () {
    mask.style.display = 'none';
    selfContent.style.display = 'none';
    noScroll.classList.remove('overflow');
  });
})();
//点击按钮切换按钮图片，页面上划到指定位置
function changePic(){
  var btnImg1=document.getElementsByClassName('lotto')[0];
  var btnImg2=document.getElementsByClassName('holiday')[0];
  btnImg1.addEventListener('click',function () {
    btnImg1.setAttribute('src','images/lotto-focus.png');
    btnImg2.setAttribute('src','images/holiday.png');
    document.body.scrollTop = 1500;
  });
  btnImg2.addEventListener('click',function () {
    btnImg2.setAttribute('src','images/holiday-focus.png');
    btnImg1.setAttribute('src','images/lotto.png');
    document.body.scrollTop = 2400;
  });
}
changePic();
//按钮随页面滚动调整位置
window.onscroll = function () {
  myFunction();
};
function myFunction() {
  var btnTop = document.getElementById('bar');
  if(document.body.scrollTop > 1000){
    btnTop.classList.add('top-bar');
  }else {
    btnTop.classList.remove('top-bar');
  }
}


window.addEventListener("orientationchange", function() {
    alert("the orientation of the device is now " + screen.orientation.angle);
});
