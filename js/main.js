var elems = document.getElementById('clockface').children;
var increase = Math.PI * 2 / elems.length;
var x = 0, y = 0, angle = 0, elem;
for (var i = 0; i < elems.length; i++) {
    elem = elems[i];
    x = 150* Math.cos(angle) + 150;
    y = 150* Math.sin(angle) + 150;
    degrees= Math.round(angle * 180 / Math.PI) + 90;
   // elem.innerHTML 
     elem.style.WebkitTransform = 'rotate('+degrees+'deg)';
    elem.style.position = 'absolute';
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
    angle += increase;
}


var elems = document.getElementById('weatherAM').children;
var increase = Math.PI * 2 / elems.length;
var x = 0, y = 0, angle = 0.79, elem;
for (var i = 0; i < elems.length; i++) {
    elem = elems[i];
    x = 95* Math.cos(angle) + 125;
    y = 95* Math.sin(angle) + 125;
    degrees= Math.round(angle * 180 / Math.PI) + 90;
      elem.style.WebkitTransform = 'rotate('+degrees+'deg)';
    elem.style.position = 'absolute';
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
    angle += increase;
}

var elems = document.getElementById('weatherPM').children;
var increase = Math.PI * 2 / elems.length;
var x = 0, y = 0, angle = 0.79, elem;
for (var i = 0; i < elems.length; i++) {
    elem = elems[i];
    x = 180* Math.cos(angle) + 125;
    y = 180* Math.sin(angle) + 125;
    degrees= Math.round(angle * 180 / Math.PI) + 90;
      elem.style.WebkitTransform = 'rotate('+degrees+'deg)';
    elem.style.position = 'absolute';
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
    angle += increase;
}
