var flyimage1, flyimage2, flyimage3

function pagestart(){
 flyimage1=new Chip("flyimage1",47,68);
 flyimage2=new Chip("flyimage2",47,68);
 flyimage3=new Chip("flyimage3",47,68);
movechip("flyimage1");
movechip("flyimage2");
movechip("flyimage3");
}

    if (window.addEventListener)
        window.addEventListener("load", pagestart, false)
    else if (window.attachEvent)
        window.attachEvent("onload", pagestart)
    else if (document.getElementById)
        window.onload = pagestart