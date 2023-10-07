let spanyear = document.querySelector("span.year-span");
let spanmonth = document.querySelector("span.month-span");
let dayspan = document.querySelector("span.day-span");
let reset = () => {
    spanyear.innerHTML = `--`;
    spanmonth.innerHTML = `--`;
    dayspan.innerHTML = `--`;
}
reset()
const input = document.querySelectorAll(".input .inpt-box input");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const btn = document.querySelector("button");

let labelyear = document.querySelector(".input .inpt-box.year label");
let inputyear = document.querySelector(".input .inpt-box.year input");
let pyear = document.querySelector(".input .inpt-box.year p");

let labelmonth = document.querySelector(".input .inpt-box.month label");
let inputmonth = document.querySelector(".input .inpt-box.month input");
let pmonth = document.querySelector(".input .inpt-box.month p");

let labelday = document.querySelector(".input .inpt-box.day label");
let inputday = document.querySelector(".input .inpt-box.day input");
let pday = document.querySelector(".input .inpt-box.day p");




btn.addEventListener("click", (e) => {
    check(e);

});



const yearvalue = document.getElementById("year").value;
const monthvelue = document.getElementById("month").value;
const dayvalue = document.getElementById("day").value;


let count = (yearvalue,monthvelue,dayvalue) => {
    let date = new Date();
    let ye = date.getFullYear() - yearvalue;
    let mo = date.getMonth()- Number(monthvelue)  ;
    let da = date.getDay() + 1 + (30 - Number(dayvalue));
    if (Number(monthvelue) > date.getMonth()) {
        mo =  Number(monthvelue)-date.getMonth();
    }
    if (date.getMonth()===0||date.getMonth()===2||date.getMonth()===4||date.getMonth()===6||date.getMonth()===7||date.getMonth()===9||date.getMonth()===11) {
        da = (date.getDay() + 1) + (31 - Number(dayvalue));
    } else {
        da = date.getDay() + 1 + (30 - Number(dayvalue));
    }
    

    spanyear.innerHTML = ye;
    spanmonth.innerHTML = mo;
    dayspan.innerHTML = da;
}
let check = (e) => {
if ((document.getElementById("year").value > 2023 || document.getElementById("year").value < 1900)) {
    pyear.classList.remove("hide");
    labelyear.classList.add("error");
    inputyear.classList.add("error");
    pyear.innerHTML = `please enter valid year`;
    e.preventDefault();
    reset();

} else if (document.getElementById("year").value === "") {
    pyear.classList.remove("hide");
    labelyear.classList.add("error");
    inputyear.classList.add("error");
    pyear.innerHTML = `This Fiel is required`;
    e.preventDefault();
    reset();
}
else {
    pyear.classList.add("hide");
    labelyear.classList.remove("error");
    inputyear.classList.remove("error");
    pyear.innerHTML = `This Fiel is required`;
        count(
        document.getElementById("year").value,
        document.getElementById("month").value,
        document.getElementById("day").value
    );
}

if ((document.getElementById("month").value > 12 || document.getElementById("month") < 1)) {
    pmonth.classList.remove("hide");
    labelmonth.classList.add("error");
    inputmonth.classList.add("error");
    pmonth.innerHTML = `please enter valid month`;
    e.preventDefault();
    reset();
} else if (document.getElementById("month").value === "") {
    pmonth.classList.remove("hide");
    labelmonth.classList.add("error");
    inputmonth.classList.add("error");
    pmonth.innerHTML = `This Fiel is required`;
    e.preventDefault();
    reset();
}
else {
    pmonth.classList.add("hide");
    labelmonth.classList.remove("error");
    inputmonth.classList.remove("error");
    count(
        document.getElementById("year").value,
        document.getElementById("month").value,
        document.getElementById("day").value
    );
}

if ((document.getElementById("day").value > 31 || document.getElementById("day") < 1)) {
    pday.classList.remove("hide");
    labelday.classList.add("error");
    inputday.classList.add("error");
    pday.innerHTML = `please enter valid day`;
    e.preventDefault();
    reset();
} else if (document.getElementById("day").value === "") {
    pday.classList.remove("hide");
    labelday.classList.add("error");
    inputday.classList.add("error");
    pday.innerHTML = `This Fiel is required`;
    e.preventDefault();
    reset();
}
else {
    pday.classList.add("hide");
    labelday.classList.remove("error");
    inputday.classList.remove("error");
    count(
        document.getElementById("year").value,
        document.getElementById("month").value,
        document.getElementById("day").value
    );
    }
}
