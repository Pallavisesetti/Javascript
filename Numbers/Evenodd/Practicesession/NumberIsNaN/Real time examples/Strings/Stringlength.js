function onClickLength() {
    debugger;
    let name = document.getElementById("txtName").value;
    namelength = name.length;
    document.getElementById("pResult").innerHTML = namelength+"/200";
}