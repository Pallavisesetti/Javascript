function onClickToFixed(){
    debugger;
    var inputnumber=Number(document.getElementById("txtNumber").value);
    var digits=Number(document.getElementById("txtDigit").value);
    result=inputnumber.toFixed(digits);
    alert(result);
}
function onClickToPrecision(){
    debugger;
    var inputnumber=Number(document.getElementById("txtNumber").value);
    var digits=Number(document.getElementById("txtDigit").value);
    result=inputnumber.toPrecision(digits);
    alert(result);
}