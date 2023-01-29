let prec1=document.getElementById("precent-1");
let prec2=document.getElementById("precent-2");

window.onscroll = function () {
    let x=window.pageYOffset;
    console.log(x);

let p1=0;
let p2=2;
let time=setInterval(calcprecent,.9);

function calcprecent()
{
    p1++;
    p2++;
    if(p1<=50)
    prec1.innerHTML=p1+"%";
    if(p2<=99)
    prec2.innerHTML=p2+"%";
    if(p1>=50 && p2>=99)
    {
        clearInterval(time);
    }
    
}



}