const first = new Date();
let temp=first.getHours();
if(temp>18 || temp<4){
    let bg = document.getElementById("bg");
    bg.setAttribute("style","background-image: url(https://i.pinimg.com/originals/60/c1/43/60c143c5a7e8c9cccae51f5aebda73c0.jpg);    ")
}
setInterval(dateprinter,1000);
function dateprinter(){
    const d = new Date();
    let hr=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    if(hr>11){
        document.getElementById("preset").innerHTML="PM"
        hr=hr-12;
    }else{
        document.getElementById("preset").innerHTML="AM"
    }
    hr=(hr<10)?"0"+hr:hr;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    let hh = document.getElementById("hh");
    hh.innerHTML=`${hr}`;
    let mm = document.getElementById("mm");
    mm.innerHTML=`${min}`;
    let ss = document.getElementById("ss");
    ss.innerHTML=`${sec}`;
}



