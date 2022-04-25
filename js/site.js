//get the values from the page
//start or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    //
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
    } else {
        alert("You must enter integers");
    }
    //we call displayNumbers
}

//generate numbers from startvalue to the endvalue
//logic function(s)
function generateNumbers(sValue, eValue){
    let numbers = [];
    //we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index ++){
        //this will execute in a loop until index = eValue
        numbers.push(index);
    }
    return numbers;
}

//display the numbers and mark even numbers bold
//display or view function(s)
function displayNumbers(){

}