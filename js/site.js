
//get values -- start or controller function
function getValues(){
    document.getElementById("alert").classList.add("invisible");
    let str = document.getElementById("stringValue").value;
    let revString = reverseString(str);
    displayReverseString(revString);
    
    
}

//reverse a string -- logic function
function reverseString(str){
let revString =[];

//reverse a string using a for loop
for (let index = str.length-1; index >= 0; index--) {
    revString += str[index];
     
}
return revString;

}

//display the reversed string to the user -- view function
function displayReverseString(revString){
    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
    document.getElementById("alert").classList.add("show");
    

}