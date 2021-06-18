let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let music=document.querySelector('audio');

setInterval(() => {
    
    music.play();
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();

    hrotation=(360/12)*h+(360*m)/(12*60)+(360*s)/(12*3600);
    mrotation=(360/60)*m+(360/12)*(s/300);
    srotation=(360/60)*s;

    hours.style.transform=`rotate(${hrotation}deg)`
    minutes.style.transform=`rotate(${mrotation}deg)`
    seconds.style.transform=`rotate(${srotation}deg)`;
    
}, 1000);