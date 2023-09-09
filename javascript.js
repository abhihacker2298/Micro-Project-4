
const display = document.getElementById("display");
var displayInputs = "";


function getInput(input){
    const val = input;

    displayInputs+=val;

    display.innerHTML = displayInputs;
}

function deleteDigit(){
    const tempString = displayInputs;
    const charArray = tempString.split("");
    charArray[tempString.length-1] = "";
    displayInputs = charArray.join("");
    display.innerHTML = displayInputs;
}

function calculate(){

    var digit1 = "";
    var digit2 = "";
    var symbol = "";

    function short_calculate(){
        if(symbol.length==1){
            if(symbol[0]=="+"){
                var newdigit = parseFloat(digit1)+parseFloat(digit2);
                digit1 = newdigit.toString();
                digit2 = "";
            }
            else if(symbol[0]=="-"){
                var newdigit = parseFloat(digit1)-parseFloat(digit2);
                digit1 = newdigit.toString();
                digit2 = "";
            }
            else if(symbol[0]=="/"){
                var newdigit = parseFloat(digit1)/parseFloat(digit2);
                digit1 = newdigit.toString();
                digit2 = "";
            }
            else{
                var newdigit = parseFloat(digit1)*parseFloat(digit2);
                digit1 = newdigit.toString();
                digit2 = "";
            }
        }
    }

    for(let index=0; index<displayInputs.length; index++)
    {
        if(displayInputs[index]=="+"){
            short_calculate();
            symbol = "+";
        }
        else if(displayInputs[index]=="-"){
            short_calculate();
            symbol="-";
        }
        else if(displayInputs[index]=="x"){
            short_calculate();
            symbol = "x";
        }
        else if(displayInputs[index]=="/"){
            short_calculate();
            symbol = "/";
        }
        else{
            if(symbol.length==0)
            {
                digit1+=displayInputs[index];
            }
            else if(symbol.length==1)
            {
                digit2+=displayInputs[index];
            }
        }
    }


    short_calculate();

    if(digit1.length>6){
        displayInputs = "";
        display.innerHTML = "Invalid";
    }
    else{
        displayInputs = digit1;
        display.innerHTML = digit1;
    }
    
}

function reset(){

    displayInputs="";

    display.innerHTML = 0;
}