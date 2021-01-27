//function to get current interest rate selected from the ranger slider
function rate(){
    var ratevalue=document.getElementById("interestRate");
    document.getElementById("selectedRate").innerHTML=ratevalue.value+"%";
}

//function that obtains input vals and calculates interest gained
function compute(){
    var rate=parseFloat(document.getElementById("interestRate").value);
    var principal=parseFloat(document.getElementById("amount").value);
    var time=parseFloat(document.getElementById("years").value);
    var total= parseFloat(principal*(1+((rate/100)*(time))));
    var gain=(total-principal);
    if(document.getElementById("amount").value==""){
        alert("Please enter the principal amount");
        document.getElementById("amount").focus();
    } else if ((principal <= 0)){
        alert("Enter a positive number"); 
        document.getElementById("amount").focus();
      
    } else {
        var today=new Date();
        var year=today.getFullYear();
        time+=year;
        var output="If you deposit ";
        output+=principal;
        output+=" at an interest rate of ";
        output+=rate;
        output+="%";
        output+=" You will receive an amount of ";
        output+=gain;
        output+=" in the year ";
        output+=time;
        document.getElementById("result").innerHTML=output;
    }
}