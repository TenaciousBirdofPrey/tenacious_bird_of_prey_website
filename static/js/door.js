browserName = navigator.appName;
browserVersion = parseInt(navigator.appVersion);
if (browserName == "Netscape" && browserVersion >= 3 || browserName == "Microsoft Internet Explorer" && browserVersion >= 4) imageSwap = "yes";
else imageSwap = "no";
if (imageSwap == "yes") {
pic1in = new Image();
pic1in.src = "static/img/dooropen.gif";
pic1out = new Image();
pic1out.src = "static/img/doorclose.gif";
}
function moveIn(whichImg) {
  if (imageSwap == "yes") {
  imgIn = eval(whichImg + "in.src");
  document [whichImg].src = imgIn;
  }
}
function moveOut(whichImg) {
  if (imageSwap == "yes") {
  imgOut = eval(whichImg + "out.src");
  document [whichImg].src = imgOut;
  }
}

