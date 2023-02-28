let x="";
let arr = [];
let flag=true;



function writingNum(digit){
    x=x+digit;
    if(!flag){
        document.getElementById('secondVal').innerHTML=`${x}`;
    }else{
        document.getElementById('display').innerHTML=`<h1>${x}</h1>`;
    }
}



function backSpace(){
    if(flag){
        let z=x.slice(0,(x.length-1));
        x=z;
        if(x.length===0){
            arr=[];
        }else{
            arr[0]=x*1;
        }
        document.getElementById("display").innerHTML=`<h1>${x}</h1>`
    }else if(!flag && x.length===0){
        document.getElementById("opr").remove();
        x=""+arr[0];
        flag=true;
    }else{
        let z=x.slice(0,(x.length-1));
        x=z;
        arr[2]=x*1;
        document.getElementById("secondVal").innerHTML=`<h1>${x}</h1>`
    }
}



function allClear(){
    document.getElementById('display').innerHTML=``;
    flag=true;
    x="";
    arr=[];
}


function oprator(opr){
    if(flag && x.length===0 && opr==='-'){
        x=x+opr;
        document.getElementById('display').innerHTML=`<h1>${x}</h1>`;
        return;
    }else if(flag && x.length!=0){
    let oprelmnt=document.createElement('h3');
    oprelmnt.innerHTML=opr;
    document.getElementById("display").appendChild(oprelmnt);
    oprelmnt.setAttribute("id","opr");
    if(arr.length===0){
        arr.push(x*1);
    }
    arr.push(opr);
    let elmnt = document.createElement("h1");
    oprelmnt.appendChild(elmnt);
    elmnt.setAttribute("id","secondVal");
    x="";
    flag=false; 
    }else if(!flag && x.length===0 && opr==='-'){
        x=x+opr;
        document.getElementById('secondVal').innerHTML=`${x}`;
    }
}



function result(){
    arr.push(x*1);
    console.log(arr);
    x="";
    let res=0;
    if(arr[1]==='+'){
        res=arr[0]+arr[2];
    }else if(arr[1]==='-'){
        res=arr[0]-arr[2];
    }else if(arr[1]==='×'){
        res=arr[0]*arr[2];
    }else if(arr[1]==='÷'){
        res=arr[0]/arr[2];
    }else if(arr[1]==='%'){
        res=arr[0]%arr[2];
    }
    let z=""+res;
    if(Number.isInteger(res)){
    document.getElementById('display').innerHTML=`<h1>${res}</h1>`;
    }else{
        let twoDeci=parseFloat(res).toFixed(2);
    document.getElementById('display').innerHTML=`<h1>${twoDeci}</h1>`;
    }
    flag=true;
    arr=[];
    arr.push(res);
    x=""+res;
}

function roundTo(n, place) {    
    return +(Math.round(n + "e+" + place) + "e-" + place);
}