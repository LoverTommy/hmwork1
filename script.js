"use strict"


let fam=prompt("Какая у вас фамилия?");
let nam=prompt("Как вас зовут?");
let otch=prompt("Какое у вас отчество?");
let age=prompt("Сколько вам лет?");
let gen=confirm("Ваш пол мужской?");
let age2=parseFloat(age);
let pens="";
if (gen===true) {
    gen="Мужской";
} else {
    gen="Женский";
}

// if (age2>55 && gen===false) {
//     pens="Да";
// } else {
//     pens="Нет";
// }

// if (age2>60 && gen===true) {
//     pens="Да";
// } else {
//     pens="Нет";
// }


alert( ("Ваше ФИО:"+(' ' + fam + ' ' + nam + ' ' + otch)) + '\n' + ("Ваш возраст в годах:" + ' ' + age2) + '\n' + ("Ваш возраст в днях:" + ' ' + age2*12*30) + '\n' + ("Через 5 лет вам будет:" + ' ' + (age2+5)) + '\n' + ("Ваш пол:") + ' ' + gen );