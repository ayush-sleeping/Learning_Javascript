/* Meta Characters and Characters Classes :

Sets, Ranges and Character Classes _

Sets and Ranges :
Sets and Ranges are represented by several characters inside 
square brackets []. This is just means to "search for any character
among given values".

It has two variations:
First is to write it like this [ABC]. It means any of the 3 characters:
'A', 'B', 'C' will be matched. This is called Set.
For example : 
String : Air Birm Circle.
Pattern : [ABC]irm


Square brackets may also contain character ranges,
[A-Z] is a character in range from A to Z, and [0-9] is a digit
from 0 to 9.

For example :
String : Same Name Fame Glam
Pattern : [A-Z]ame 
*/

/* Practice on regrex101.com */