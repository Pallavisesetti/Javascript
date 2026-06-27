function onClickAdd(){
    debugger;
    var num1=document.getElementById("txtInput1").value;
    var num2=document.getElementById("txtInput2").value;
    alert(isNaN(num1));
    alert(isNaN(num2));
    if(!isNaN(num1)&&!isNaN(num2)){
        alert(Number(num1)+Number(num2));
    }
    else{
        alert(num1+num2);
    }
}