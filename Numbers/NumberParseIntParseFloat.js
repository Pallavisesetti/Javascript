
    
        function onClickCheckingnumber(){
        debugger;
        var a=document.getElementById("txtCheckNumber").value;
        number=Number(a);
        document.getElementById("pResult").innerHTML=number;
    }
     function onClickCheckingParseInt(){
        debugger;
        var a=document.getElementById("txtCheckNumber").value;
        number1=parseInt(a);
        document.getElementById("pResult1").innerHTML=number1;
        
    }
     function onClickCheckingParseFloat(){
        debugger;
        var a=document.getElementById("txtCheckNumber").value;
        number2=parseFloat(a);
        document.getElementById("pResult2").innerHTML=number2;
    }
     