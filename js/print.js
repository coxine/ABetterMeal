"use strict";let day=["","周一","周二","周三","周四","周五","周六","周日"],date=`${(new Date).getMonth()+1}/${(new Date).getDate()}&nbsp${day[(new Date).getDay()]}`,areaNumber=["","自助餐","套餐A","套餐A","套餐B","套餐B","盖浇饭","套餐C","面档","套餐B"];document.getElementById("nowtime-print").innerHTML=date;let usrname=prompt("Please enter your name:"),area=prompt("Amount of donation:");area>=1&&area<=9?(document.getElementById("area-print").innerHTML=area,alert("Thanks for your donation!")):(alert("Illegal input!"),window.location.reload()),document.getElementById("name-print").innerHTML=usrname,document.getElementById("qrcode-print").src=`https://api.qrserver.com/v1/create-qr-code/?size=300x300&charset-source=UTF-8&ecc=M&data=https://usfns.tk/scan.html?id=${encodeURI(usrname)}_${area}`,document.getElementById("floor-print").innerHTML=area>=1&&area<=3?"一":"二",document.getElementById("district-print").innerHTML=areaNumber[area];