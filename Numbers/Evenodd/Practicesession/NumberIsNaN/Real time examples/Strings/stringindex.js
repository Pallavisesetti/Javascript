function onClickIndex() {
    debugger;
    let name = document.getElementById("txtName").value;
    let indexs=Number(document.getElementById("txtIndex").value);
    let resume = name[indexs]
    document.getElementById("pResult").innerHTML = resume;
}