function onClickClick(){
    debugger;
    let name=document.getElementById("txtName").value;
    let age=document.getElementById("txtAge").value;
    let gender=document.getElementById("txtGender").value;
    let all=`My name is:${name}<br> My age is:${age}<br> My gender is ${gender}`;
    document.getElementById("onClickClick").innerHTML=all;
    



}