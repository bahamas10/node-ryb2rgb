/**
 * Original Work
 * http://www.paintassistant.com/rybrgb.html
 * Modified by Dave Eddy <dave@daveeddy.com>
 */

;(function() {
  function cubicInt(t, A, B){
    var weight = t*t*(3-2*t);
    return A + weight*(B-A);
  }

  function getR(iR, iY, iB) {
    // red
    var x0 = cubicInt(iB, 1.0, 0.163);
    var x1 = cubicInt(iB, 1.0, 0.0);
    var x2 = cubicInt(iB, 1.0, 0.5);
    var x3 = cubicInt(iB, 1.0, 0.2);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return Math.ceil (255 * cubicInt(iR, y0, y1));
  }

  function getG(iR, iY, iB) {
    // green
    var x0 = cubicInt(iB, 1.0, 0.373);
    var x1 = cubicInt(iB, 1.0, 0.66);
    var x2 = cubicInt(iB, 0.0, 0.0);
    var x3 = cubicInt(iB, 0.5, 0.094);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return Math.ceil (255 * cubicInt(iR, y0, y1));
  }

  function getB(iR, iY, iB) {
    // blue
    var x0 = cubicInt(iB, 1.0, 0.6);
    var x1 = cubicInt(iB, 0.0, 0.2);
    var x2 = cubicInt(iB, 0.0, 0.5);
    var x3 = cubicInt(iB, 0.0, 0.0);
    var y0 = cubicInt(iY, x0, x1);
    var y1 = cubicInt(iY, x2, x3);
    return Math.ceil (255 * cubicInt(iR, y0, y1));
  }

  function ryb2rgb(color){
    var R = color[0] / 255;
    var Y = color[1] / 255;
    var B = color[2] / 255;
    var R1 = getR(R,Y,B) ;
    var G1 = getG(R,Y,B) ;
    var B1 = getB(R,Y,B) ;
    var ret = [ R1, G1, B1 ];
    return ret;
  }

  // export
  if (typeof module !== 'undefined') {
    module.exports = ryb2rgb;
  } else {
    window.ryb2rgb = ryb2rgb;
  }
})();
