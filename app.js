var ageInput = document.getElementsByTagName('input')[0]
var birthYear = document.getElementsByTagName('h4')[0]
var currenYear = 2023,myYear;
console.log(ageInput);
console.log(birthYear);

function age(){
        myYear = currenYear - ageInput.value;
        console.log(ageInput.value)
        birthYear.innerText = myYear;  
}