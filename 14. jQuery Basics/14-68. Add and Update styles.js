/* Add and Update styles using jQuery :

The "CSS()" Method :
To get CSS of the HTML element, We can use the css() method.
It accepts the css property name as an argument and it returns 
the value of the first matched HTML element.

Syntax :
$('selector').css("property-name"); */

// In example :
$('section').css('background-color')
$('#todo-count').css('font-size')
$('#todo-count').css('font-size', '48px')
$('#todo-count').css({
    'font-size': '24px',
    'color': 'red'
})
$('.list-item').css('color', 'red')
$('.list-item').addClass('dark-card')
$('.list-item').removeClass('dark-card')
$('.list-item').toggleClass('dark-card')