const button=document.querySelector("#submit")
const genders=document.querySelectorAll("#gender")
const output=document.querySelector(".feedback")

const days=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"

]
const maleAkanNames=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Koffi",
    "Kwame"
]
const femaleAkanNames=[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
]

button.addEventListener("click", function(e){
    e.preventDefault()
    const userInput=document.querySelector("#year").value
    
    let dateOfBirth= new Date(userInput);
    let day= dateOfBirth.getDay();
    

    console.log(`the day is:${day}`);

    for (let choice of genders){
        let gendersChoice= choice.value;
    
        if (gendersChoice==="male"){
            output.innerText=`Hey your Akan name is ${maleAkanNames[day]} and you were born on ${days[day]}`
    
        } else if (gendersChoice==="female"){
             output.innerHTML=`Hey your Akan name is ${femaleAkanNames[day]} and you were born on ${days[day]}`
        } else{
            output.innerHTML="please enter your credentials"
        }
        
    }

});

