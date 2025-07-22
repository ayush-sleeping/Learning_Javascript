// Star Pattern Programs :
// --------------------------------------------------------------------------------------------------------------::

/*
Left Triangle :

*
* *
* * *
* * * *
* * * * *

STEP-BY-STEP THINKING PROCESS:
1. OBSERVE THE PATTERN:
   - Row 1: 1 star
   - Row 2: 2 stars
   - Row 3: 3 stars
   - Row 4: 4 stars
   - Row 5: 5 stars

2. IDENTIFY THE LOGIC:
   - Number of stars = Row number
   - Row i has i stars

3. ALGORITHM APPROACH:
   - Outer loop: controls rows (i from 1 to num1)
   - Inner loop: prints stars (j from 1 to i)
   - For each row i, print i stars

4. HOW TO START CODING:
   Step 1: Think "I need 5 rows" → for(i=1; i<=5; i++)
   Step 2: Think "Row 1 needs 1 star, Row 2 needs 2 stars" → for(j=1; j<=i; j++)
   Step 3: Think "Print star and space" → pattern += "* "
   Step 4: Think "New line after each row" → pattern += "\n"

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


/*
Downward Left Triangle :

* * * * *
* * * *
* * *
* *
*

STEP-BY-STEP THINKING PROCESS:
1. OBSERVE THE PATTERN:
   - Row 1: 5 stars
   - Row 2: 4 stars
   - Row 3: 3 stars
   - Row 4: 2 stars
   - Row 5: 1 star

2. IDENTIFY THE LOGIC:
   - Stars decrease by 1 each row
   - Row i has (total_rows - i + 1) stars
   - OR Row i has (num2 - i + 1) stars

3. ALGORITHM APPROACH:
   - Outer loop: controls rows (i from 1 to num2)
   - Inner loop: prints decreasing stars (j from 0 to num2-i)
   - Each row has fewer stars than previous

4. HOW TO START CODING:
   Step 1: Think "I need 5 rows" → for(i=1; i<=5; i++)
   Step 2: Think "Row 1: 5 stars, Row 2: 4 stars..." → for(j=0; j<=num2-i; j++)
   Step 3: Think "Print star and space" → pattern += "* "
   Step 4: Think "New line after each row" → pattern += "\n"

*/

let num2 = 5;
let pattern2 = "";
if (num2 > 1) {


    for (let i = 1; i <= num2; i++) {
        for (let j = 0; j <= (num2-i); j++) {
            pattern2 = pattern2 + "* ";
        }
        pattern2 = pattern2 + "\n";
    }
    console.log(pattern2);


} else {
    pattern2 = "Number must be greater than 1 to print this pattern."
}


/*
Right Triangle :

        *
      * *
    * * *
  * * * *
* * * * *

STEP-BY-STEP THINKING PROCESS:
1. OBSERVE THE PATTERN:
   - Row 1: 8 spaces + 1 star
   - Row 2: 6 spaces + 2 stars
   - Row 3: 4 spaces + 3 stars
   - Row 4: 2 spaces + 4 stars
   - Row 5: 0 spaces + 5 stars

2. IDENTIFY THE LOGIC:
   - Spaces decrease, stars increase
   - Row i: (num3-i) sets of 2 spaces + i stars
   - Need TWO inner loops: one for spaces, one for stars

3. ALGORITHM APPROACH:
   - Outer loop: controls rows (i from 1 to num3)
   - First inner loop: prints spaces (j from 1 to num3-i)
   - Second inner loop: prints stars (k from 1 to i)

4. HOW TO START CODING:
   Step 1: Think "I need 5 rows" → for(i=1; i<=5; i++)
   Step 2: Think "Spaces decrease: Row 1 has 4*2=8 spaces" → for(j=1; j<=num3-i; j++) add "  "
   Step 3: Think "Stars increase: Row 1 has 1 star" → for(k=1; k<=i; k++) add "* "
   Step 4: Think "New line after each row" → pattern += "\n"

*/

let num3 = 5;
let pattern3 = "";
if (num3 > 1) {


    for (let i = 1; i <=num3; i++){
        for (let j = 1; j <= (num3 - i); j++) {
            pattern3 = pattern3 + "  ";
        }
        for (let k = 1; k <= i; k++) {
            pattern3 = pattern3 + "* ";
        }
        pattern3 = pattern3 + "\n";
    }
    console.log(pattern3);


} else {
    pattern3 = "Number must be greater than 1.";
}

/*
Downward Right Triangle :

* * * * *
  * * * *
    * * *
      * *
        *

STEP-BY-STEP THINKING PROCESS:
1. OBSERVE THE PATTERN:
   - Row 1: 0 spaces + 5 stars
   - Row 2: 2 spaces + 4 stars
   - Row 3: 4 spaces + 3 stars
   - Row 4: 6 spaces + 2 stars
   - Row 5: 8 spaces + 1 star

2. IDENTIFY THE LOGIC:
   - Spaces increase, stars decrease
   - Start from maximum stars, go down
   - Row i: (num4-i) sets of 2 spaces + i stars

3. ALGORITHM APPROACH:
   - Outer loop: controls rows (i from num4 down to 1)
   - First inner loop: prints increasing spaces
   - Second inner loop: prints decreasing stars

4. HOW TO START CODING:
   Step 1: Think "Start from 5 stars, go down" → for(i=num4; i>=1; i--)
   Step 2: Think "Spaces increase each row" → for(j=1; j<=num4-i; j++) add "  "
   Step 3: Think "Stars equal current i value" → for(k=1; k<=i; k++) add "* "
   Step 4: Think "New line after each row" → pattern += "\n"
*/

let num4 = 5;
let pattern4 = "";
if (num4 > 1) {


    for (let i = num4; i >= 1; i--) {
        for (let j = 1; j <= (num4 - i); j++) {
            pattern4 = pattern4 + "  ";
        }
        for (let k = 1; k <= i; k++) {
            pattern4 = pattern4 + "* ";
        }
        pattern4 = pattern4 + "\n";
    }
    console.log(pattern4);


} else {
    pattern4 = "Number must be greater than 1.";
}

/*
Pyramid Triangle :

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *

STEP-BY-STEP THINKING PROCESS:
1. OBSERVE THE PATTERN:
   - Row 1: 8 spaces + 1 star
   - Row 2: 6 spaces + 3 stars
   - Row 3: 4 spaces + 5 stars
   - Row 4: 2 spaces + 7 stars
   - Row 5: 0 spaces + 9 stars

2. IDENTIFY THE LOGIC:
   - Stars follow odd number pattern: 1, 3, 5, 7, 9
   - Row i has (2*i - 1) stars
   - Spaces decrease by 2 each row
   - Row i has (num5-i) sets of 2 spaces

3. ALGORITHM APPROACH:
   - Outer loop: controls rows (i from 1 to num5)
   - First inner loop: prints decreasing spaces
   - Second inner loop: prints odd number of stars

4. HOW TO START CODING:
   Step 1: Think "I need 5 rows" → for(i=1; i<=5; i++)
   Step 2: Think "Spaces decrease" → for(j=1; j<=num5-i; j++) add "  "
   Step 3: Think "Stars: 1,3,5,7,9 = (2*i-1)" → for(k=1; k<=(2*i-1); k++) add "* "
   Step 4: Think "New line after each row" → pattern += "\n"

*/

let num5 = 5;
let pattern5 = "";
if (num5 > 1) {

    for (let i = 1; i <= num5; i++) {
        for (let j = 1; j <= (num5 - i); j++) {
            pattern5 = pattern5 + "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {
            pattern5 = pattern5 + "* ";
        }
        pattern5 = pattern5 + "\n";
    }
    console.log(pattern5);

} else (
    pattern5 = "Number must be greater than 1."
)

/*
Downward Pyramid :

* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *

STEP-BY-STEP THINKING PROCESS:
1. OBSERVE THE PATTERN:
   - Row 1: 0 spaces + 9 stars
   - Row 2: 2 spaces + 7 stars
   - Row 3: 4 spaces + 5 stars
   - Row 4: 6 spaces + 3 stars
   - Row 5: 8 spaces + 1 star

2. IDENTIFY THE LOGIC:
   - Reverse of pyramid: start with maximum stars
   - Stars follow decreasing odd pattern: 9, 7, 5, 3, 1
   - Row i has (2*i - 1) stars
   - Spaces increase by 2 each row

3. ALGORITHM APPROACH:
   - Outer loop: controls rows (i from num6 down to 1)
   - First inner loop: prints increasing spaces
   - Second inner loop: prints decreasing odd stars

4. HOW TO START CODING:
   Step 1: Think "Start from max stars, go down" → for(i=num6; i>=1; i--)
   Step 2: Think "Spaces increase each row" → for(j=1; j<=num6-i; j++) add "  "
   Step 3: Think "Stars decrease in odd pattern" → for(k=1; k<=(2*i-1); k++) add "* "
   Step 4: Think "New line after each row" → pattern += "\n"

*/

let num6 = 5;
let pattern6 = "";
if (num6 > 1) {


    for (let i = num6; i >=1; i--) {
        for (let j = 1; j <= (num6 - i); j++) {
            pattern6 += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {
            pattern6 += "* ";
        }
        pattern6 += "\n";
    }
    console.log(pattern6);


}
else {
    pattern6 = "Number must be greater than 1 to print star pattern.";
}
