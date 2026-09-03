function onClickClick(){
    debugger;
    let name=document.getElementById("txtName").value;
    let age=document.getElementById("txtAge").value;
    let gender=document.getElementById("txtGender").value;
    let all=`My name is:${name}<br> My age is:${age}<br> My gender is ${gender}<br> My serial number is:${1}<br> My login time is :${12}<br> My logout time is :${6}<br>`;
    document.getElementById("onClickClick").innerHTML=all;
    }
    



