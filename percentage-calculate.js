//Percentage calculator

function CalculatePercentage(){
    var fieldX = document.getElementById("valueX");
    var fieldY = document.getElementById("valueY"); 
    var result = document.getElementById("valueResult");

    if(!fieldX.value || !fieldY.value){
        alert("Please enter value in the fields");
    }else{
        var x = parseFloat(fieldX.value);
        var y = parseFloat(fieldY.value);
        var r =  x/y ;
        r = r*100;
        result.innerText = "Result: "+ r.toString() + "%";
        event.preventDefault();
    }
    
};