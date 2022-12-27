/* Selectors and Filters in jQuery :

Basic Syntax of jQuery :

$(selector).method() - syntax to use jQuery 
- The "$" sign is used to access jQuery.
- The "selector" is used to find HTML elements.
- The "method()" is used to perform some action on the selected elements()


Selectors and Filters :
Selectors and Filters provide a way of finding and extracting information
    from our web page. 

Selectors are used to select the HTML elements using CSS-like selectors.

For example :
$('p')
The above statment will select all the HTML elements with the paragraph tag
    and will return it as a list of objects.
$('#topbar')
$('header section')


Filters are used to refine the results returned from the selectors.
For example :
$('p:first')
This "something" is a filter which selects the first paragraph returned 
    by $('p') selector.
The above line of code can also be written like this : $('p').first() 

*/