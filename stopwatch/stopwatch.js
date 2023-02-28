var hh = document.getElementById("hh");
var mm = document.getElementById("mm");
var ss = document.getElementById("ss");
hh.innerHTML="00"
mm.innerHTML="00"
ss.innerHTML="00"
var h=0;
var m=0;
var s=0;
var store=null;
function start(){
    if(store!==null){
        clearInterval(store);
    }
    store=setInterval(print,1000)
}

function stop(){
    clearInterval(store);
}
function reset(){
    h=0;
    m=0;
    s=0;
    hh.innerHTML="00"
    mm.innerHTML="00"
    ss.innerHTML="00"
    stop();
}
function print(){
    s++;
    if(s==59){
        m++;
        if(m==59){
            h++;
            m=0;
        }
        s=0;
    }
    let hour=h<10?"0"+h:h;
    let min=m<10?"0"+m:m;
    let sec=s<10?"0"+s:s;
    hh.innerHTML=`${hour}`
    mm.innerHTML=`${min}`
    ss.innerHTML=`${sec}`
}
