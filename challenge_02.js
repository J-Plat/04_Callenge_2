/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

var name, alter;

name = prompt("Bitte geben Sie Ihren Namen ein");
alterInput = prompt("Bitte geben Sie Ihr Alter ein");

alter = parseInt(alterInput)

console.log(typeof alter);

switch (true) 
{
    case (alter < 6):
        console.log(name + " bekommt Milch");
        break;
    case (alter < 13):
        console.log(name + " bekommt Saft");
        break;
    case (alter < 18):
        console.log(name + " bekommt Cola");
        break;
    default:console.log(name + " bekommt Wein");
        break;
}