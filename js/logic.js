// DATE

function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }

    function display_ct() {
    var today= new Date();
    hours = today.getHours( ) % 12;
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;
    var minutes=today.getMinutes().toString();
    minutes=minutes.length==1 ? 0+minutes : minutes;
    var x = hours + ":" + minutes;
    document.getElementById('ct').innerHTML = x;
    display_c();
    }

// DISPLAYER
    function browser(){
        var x= document.getElementById("browser");
        x.style.display="block";
    }
    function camera(){
        var x= document.getElementById("camera");
        x.style.display="block";
    }
    function play(){
        var x= document.getElementById("pla");
        x.style.display="block";
    }
    function home(){
        var x=document.getElementById("browser") ;
        var y=document.getElementById("camera") ;
        var z=document.getElementById("pla") ;
        x.style.display="none";
        y.style.display="none";
        z.style.display="none";
    }
