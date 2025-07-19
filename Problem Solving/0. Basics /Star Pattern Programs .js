// Star Pattern Programs :
// --------------------------------------------------------------------------------------------------------------::

/*
Left Triangle :

*
* *
* * *
* * * *
* * * * *

 */

let num1 = 5;
let pattern1 = " ";
if (num1 > 1) {

    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= i; j++) {
            pattern1 = pattern1 + "* ";
        }
        pattern1 += "\n";
    }
    console.log(pattern1);

} else {
    pattern1 = "Num must be greater than +1.";
}


// let num2 = 5;
// let pattern2 = " ";
// if (num2 > 1) {
// } else {
//     pattern2 = "Num must be greater than +1.";
// }


// let num3 = 5;
// let pattern3 = " ";
// if (num3 > 1) {

// } else {
//     pattern3 = "Num must be greater than +1."
// }
