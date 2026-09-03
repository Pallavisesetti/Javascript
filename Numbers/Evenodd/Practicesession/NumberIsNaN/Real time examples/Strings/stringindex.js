function onClickIndex() {
    debugger;
    let name = document.getElementById("txtName").value;
    let index=Number(document.getElementById("txtIndex").value);
    let all=name[index]
    document.getElementById("pResult").innerHTML = all;
}
