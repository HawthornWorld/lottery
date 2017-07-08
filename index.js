/**
 * Created by yanma on 17-7-5.
 */
(function(){
  "use strict";
})();

(function(d, w) {
  var docEl = d.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) {
          return;
        }
        docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        console.log(docEl.schemaTypeInfo);
      };

  if (!d.addEventListener) return;
  w.addEventListener(resizeEvt, recalc, false);
  d.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

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