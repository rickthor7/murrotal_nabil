//audio start
function audioPlayer(){
            var currentSong = 0;
            $("#audioPlayer")[0].src = $("#playlist li a")[0];
            $("#audioPlayer")[0].play();
            $("#playlist li a").click(function(e){
               e.preventDefault(); 
               $("#audioPlayer")[0].src = this;
               $("#audioPlayer")[0].play();
               $("#playlist li").removeClass("current-song");
                currentSong = $(this).parent().index();
                $(this).parent().addClass("current-song");
            });
            
            //Script playlist//
            $("#audioPlayer")[0].addEventListener("ended", function(){
               currentSong++;
                if(currentSong == $("#playlist li a").length)
                    currentSong = 0;
                $("#playlist li").removeClass("current-song");
                $("#playlist li:eq("+currentSong+")").addClass("current-song");
                $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
                $("#audioPlayer")[0].play();
            });
        }//audio end
        
          ///dark mode
           var _0x2f0e=['innerHTML','addEventListener','click','preventDefault','classList','toggle','dark-mode','setItem','removeItem','localStorage','getItem','myDarkMode','documentElement','\x20dark-mode','querySelector','#dark-myar'];(function(_0x1b79a7,_0x3a0621){var _0x966a12=function(_0x3e79fd){while(--_0x3e79fd){_0x1b79a7['push'](_0x1b79a7['shift']());}};_0x966a12(++_0x3a0621);}(_0x2f0e,0xa9));var _0x2b5b=function(_0x462a3a,_0x3e5e7f){_0x462a3a=_0x462a3a-0x0;var _0x26f27e=_0x2f0e[_0x462a3a];return _0x26f27e;};;(function(_0x512a50,_0x163dc1,_0x16c793){if(!(_0x2b5b('0x0')in _0x512a50))return;var _0x1d0913=localStorage[_0x2b5b('0x1')](_0x2b5b('0x2'));if(_0x1d0913){_0x163dc1[_0x2b5b('0x3')]['className']+=_0x2b5b('0x4');}}(window,document));;(function(_0x78db9c,_0x2d7dec,_0x44c5fe){if(!('localStorage'in _0x78db9c))return;var _0x41c733=_0x2d7dec[_0x2b5b('0x5')](_0x2b5b('0x6'));if(!_0x41c733)return;_0x41c733[_0x2b5b('0x7')]+='<li\x20id=\x22dark-mode\x22><a\x20class=\x22mydark\x22\x20role=\x22button\x22\x20href=\x22#\x22><i\x20class=\x22fas\x20fa-moon\x22></i></a></li>';var _0x42910d=_0x2d7dec[_0x2b5b('0x5')]('#dark-mode');if(!_0x42910d)return;_0x42910d[_0x2b5b('0x8')](_0x2b5b('0x9'),function(_0x186dc3){_0x186dc3[_0x2b5b('0xa')]();_0x2d7dec[_0x2b5b('0x3')][_0x2b5b('0xb')][_0x2b5b('0xc')](_0x2b5b('0xd'));if(_0x2d7dec['documentElement'][_0x2b5b('0xb')]['contains'](_0x2b5b('0xd'))){localStorage[_0x2b5b('0xe')](_0x2b5b('0x2'),!![]);return;}localStorage[_0x2b5b('0xf')](_0x2b5b('0x2'));},![]);}(window,document));//darkmode end
//hamburger menu
document.getElementsByClassName("toggler-navbar")[0].addEventListener("click", toogleClass);

function toogleClass() {
    document.getElementsByClassName("hamburger-menu")[0].classList.toggle('open')
    document.getElementsByClassName("sidebar")[0].classList.toggle('open')
}
//Back to top
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

//Timer
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 30;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}

//Timer 2
var start = document.getElementById('start2');
var reset = document.getElementById('reset2');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 30;
        m.value = 0;
        s.value = 0;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}