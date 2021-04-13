
var notifyArray = [];
function notify(txt, time, isRed, functionOnDone) {
  $('<div style="' + "background-color:" + ((isRed) ? "#ef394e" : "#009688") + '" class="topAlert">' + txt + '<span class="close closeNotify">x</span><p class="alertBottomProgress"></p></div>').appendTo("body");
  var el = $(".topAlert:last");
  var id = (new Date()).getTime();
  var bottomProgress = el.find(".alertBottomProgress");

  var obj = { id: id, el: el };
  
  el.find(".closeNotify").click(function () {
    removeTopAlert(obj, 200);
    if (typeof functionOnDone !== 'undefined') {
      functionOnDone();
      functionOnDone = undefined;// To impede call it again after 
    }
  })
  
  notifyArray.push(obj);
  bottomProgress.animate({ width: "100%" }, time * 1000, function () {
    removeTopAlert(obj, 700);
    if (typeof functionOnDone !== 'undefined') {
      functionOnDone();
    }
  });
  setTopAlertsIndent();
}

function removeTopAlert(obj, speed) {
  obj.el.animate({ opacity: "0" }, speed, function () {
    removeFromArray(notifyArray, obj);
    obj.el.remove();
    setTopAlertsIndent();
  });
}

function setTopAlertsIndent() {
  var lnt = notifyArray.length;
  var topIndent = 0;
  for (var i = lnt - 1; i >= 0; i--) {
    var tempEl = notifyArray[i].el;
    tempEl.animate({ top: topIndent + 'px' }, 190);
    topIndent += tempEl.height() + 30;
  }
}

function removeFromArray(arr, item) {
  for (var i = arr.length; i--;) {
    if (arr[i] === item) {
      arr.splice(i, 1);
    }
  }
}


notify("Alert text", 10, true);
notify("Success text", 10, false);
setTimeout(function(){
  notify("Alert text after 3 seconds ", 7, true);
  notify("Success text after 3 seconds", 10, false, function(){
    notify("On done function test", 10, false);
  });
}, 3000);


