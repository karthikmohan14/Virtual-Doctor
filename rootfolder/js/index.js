/*
* Credits to http://www.htmldrive.net/items/show/13/HTML5-Demo-drag-and-drop
*
*/

var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();

(function () {

var pre = document.createElement('pre');
pre.id = "view-source"

// private scope to avoid conflicts with demos
addEvent(window, 'click', function (event) {
  if (event.target.hash == '#view-source') {
    // event.preventDefault();
    if (!document.getElementById('view-source')) {
      pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
      document.body.appendChild(pre);
    }
    document.body.className = 'view-source';

    var sourceTimer = setInterval(function () {
      if (window.location.hash != '#view-source') {
        clearInterval(sourceTimer);
        document.body.className = '';
      }
    }, 200);
  }
});

})();


var a = new Array(10);
for(var i=0;i<a.length;i++){
  a[i] = '';
}

  i=0;
  var yum = document.createElement('p');
  var msie = /*@cc_on!@*/0;
  yum.style.opacity = 1;

  var links = document.querySelectorAll('li > a'), el = null;
  for (var i = 0; i < links.length; i++) {
    el = links[i];

    el.setAttribute('draggable', 'true');

    addEvent(el, 'dragstart', function (e) {
      e.dataTransfer.effectAllowed = 'copy'; // only dropEffect='copy' will be dropable
      e.dataTransfer.setData('Text', this.id);
      //a[i++]=this.id;
      a[i++]=this.id;

      // required otherwise doesn't work
    });
  }

  var bin = document.querySelector('#bin');

  addEvent(bin, 'dragover', function (e) {
    if (e.preventDefault) e.preventDefault(); // allows us to drop
    this.className = 'over';
    e.dataTransfer.dropEffect = 'copy';
    return false;
  });

  // to get IE to work
  addEvent(bin, 'dragenter', function (e) {
    this.className = 'over';
    return false;
  });

  addEvent(bin, 'dragleave', function () {
    this.className = '';
  });

  addEvent(bin, 'drop', function (e) {

    if (e.stopPropagation) e.stopPropagation(); // stops the browser from redirecting...why???

    var el = document.getElementById(e.dataTransfer.getData('text'));
    //window.alert(a);

    el.parentNode.removeChild(el);
    if(a==",,,stomach pain,,,,,,")
    {
      //<body bgcolor="#f56a6a">
      document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>FOOD POISONING<br>INDIGESTION<br>ACIDITY<br>");
      //</body>
    }
    else if (a==",,,low appetite,,,,,,") {
        document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>ANIXIETY<br>DEPRESSION<br>HYPOTHYROIDISM<br>");
    }
    else if (a==",,,loose stools,,,,,,") {
        document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>FOOD POISONING<br>GASTROENTERITITIS<br>FOOD ALLERGY<br>");
    }
    else if (a==",,,,,,Heavy sweating,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>STRESS<br>OBESITY<br>HEAT EXHAUSTION<br>");
    }
    else if (a==",,,,,,Head ache,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>STIFF NECK<br>SHAKING CHILLS<br>EXTREME FATIGUE<br>");
    }
    else if (a==",,,,,,vomitting,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>FOOD POISONING<br>MOTION SICKNESS<br>ULSER<br>");
    }
    else if (a==",,,,,,memory loss,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>STRESS<br>DEMENTIA<br>SMOKING<br>");
    }
    else if (a==",,,,,,speech difficulty,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>DEMENTIA<br>VOCAL CORD DAMAGE<br>MUSCLE WEAKNESS<br>");
    }
    else if (a==",,,,,,vomitting blood,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>GASTRITIS<br>ESOPHAGATIS<br>CIRRHOSIS<br>");
    }
    else if (a==",,,,,Cramps,,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>RICKETS<br>LOW BLOOD POTASSIUM OR SODIUM<br>SPRAINS&STRAINS<br>");
    }
    else if (a==",,,,,Bone Pain,,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE:</h2> <br>RICKETS<br>CALCIUM DEFICIENCY<br>STRAINS<br>");
    }
    else if (a==",,,,,Bleeding,,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE DUE TO:</h2> <br>WOUNDS<br>ACCIDENT<br>");
    }
    else if (a==",,,,,Deep cut,,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE DUE TO:</h2> <br>SPORTS INJURIES<br>ACCIDENTS<br>ANIMAL BITES<br>");
    }
    else if (a==",,,,,Burns,,,,") {
          document.write("<style>body{background-color:#F56A6A}</style><h1>THE POSSIBLE DISEASES ARE DUE TO:</h2> <br>FIRE<br>ELECTRIC CURRENTS <br>RADIATION EXPOSTURE<br>");
    }


    // stupid nom text + fade effect
    //bin.className = '';
    //yum.innerHTML = eat[parseInt(Math.random() * eat.length)];

    var y = yum.cloneNode(true);
    bin.appendChild(y);

    setTimeout(function () {
      var t = setInterval(function () {
        if (y.style.opacity <= 0) {
          if (msie) { // don't bother with the animation
            y.style.display = 'none';
          }
          clearInterval(t);
        } else {
          y.style.opacity -= 0.1;
        }
      }, 50);
    }, 250);

    return false;
  });


// For discussion and comments, see: http://remysharp.com/2009/01/07/html5-enabling-script/
/*@cc_on'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})@*/
