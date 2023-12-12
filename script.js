"use strict"


let fam
let nam
let otch
let age
let pens="";

do {
    fam = prompt("Какая у вас фамилия?")
} while (!fam)

do {
    nam = prompt("Какое у вас имя?")
} while (!nam)

do {
    otch = prompt("Какое у вас отчество?");
} while (!otch)

do {
    age=prompt("Сколько вам лет?");
} while (!age)

let gen=confirm("Ваш пол мужской?");
if (gen===true) {
    gen="Мужской";
} else {
    gen="Женский";
}

let age2=parseFloat(age);

if (age2>55) {
    pens="Да";
} else {
    pens="Нет";
}

alert( ("Ваше ФИО:"+(' ' + fam + ' ' + nam + ' ' + otch)) + '\n' + ("Ваш возраст в годах:" + ' ' + age2) + '\n' + ("Ваш возраст в днях:" + ' ' + age2*12*30) + '\n' + ("Через 5 лет вам будет:" + ' ' + (age2+5)) + '\n' + ("Ваш пол:") + ' ' + gen + '\n' + ("Вы на пенсии:") + ' ' + pens );