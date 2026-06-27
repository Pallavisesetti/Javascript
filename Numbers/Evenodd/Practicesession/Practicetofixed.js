function onClickToFixed(){
    debugger;
    var inputnumber=Number(document.getElementById("txtInputnumber").value);
    var digit=Number(document.getElementById("txtDigits").value);
    result=inputnumber.toFixed(digit);
    alert(result);
}
function onClickToPrecision(){
    debugger;
    var inputnumber=Number(document.getElementById("txtInputnumber").value);
    var digit=Number(document.getElementById("txtDigits").value);
    result=inputnumber.toPrecision(digit);
    alert(result);
}
