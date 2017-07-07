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
      };

  if (!d.addEventListener) return;
  w.addEventListener(resizeEvt, recalc, false);
  d.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
