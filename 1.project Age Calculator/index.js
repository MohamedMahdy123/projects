const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result")
function CalculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue ===""){
        alert("please enter your birthday")
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
}

function getAge(birthdayValue) {
    const birthday = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = birthday.getFullYear()-birthdayDate.getFullYear();
    const month = birthday.getMonth()-birthdayDate.getMonth();
    if(month<0 || (month === 0 && birthday.getDate() < birthdayDate.getDate())){
        age--;
    }
    return age;
}
btnEl.addEventListener("click",CalculateAge)