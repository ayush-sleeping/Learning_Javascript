// WHAT IS JQUERY?
// jQuery is a fast, small, and feature-rich JavaScript library
// It makes things like HTML document traversal and manipulation,
// event handling, animation, and Ajax much simpler
// "Write less, do more" - jQuery motto

// Key features of jQuery:
// - Cross-browser compatibility
// - Simplified DOM manipulation
// - Event handling
// - AJAX support
// - Animations and effects
// - Extensive plugin ecosystem
// - Chainable methods

// Including jQuery in your project:
// Via CDN:
// <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

// Via npm:
// npm install jquery

// Check if jQuery is loaded:
if (typeof jQuery !== 'undefined') {
    console.log('jQuery version:', jQuery.fn.jquery);
} else {
    console.log('jQuery is not loaded');
}

/*
------------------------------------------------------------------- ::

Subtopics :
- What is jQuery?
- jQuery Syntax
- jQuery Selectors
- jQuery Events
- jQuery Effects
- jQuery AJAX
- jQuery Plugins
- Selectors and Filters
- Add and Update HTML elements
- add and update CSS styles
- Handling html events
- ajax calls

- Chaining methods
- Traversing the DOM (parent, children, siblings)
- Animations (fade, slide, show/hide)
- Form validation with jQuery
- Manipulating attributes and properties
- Working with data-* attributes
- Event delegation in jQuery
- jQuery utility methods ($.each, $.map, $.extend)
- Document ready vs window load
- Performance tips (minimizing DOM queries)
- Migrating from jQuery to vanilla JS
*/




// ------------------------------------------------------------------- ::
// QUERY SYNTAX
// Basic jQuery syntax: $(selector).action()
// $ is an alias for jQuery
// selector: finds HTML elements
// action(): performs action on elements

// The dollar sign ($) function:
$(document).ready(function () {
    console.log('DOM is ready!');
});

// Alternative syntax (same as above):
jQuery(document).ready(function ($) {
    console.log('Using jQuery alias within function');
});

// Shorter version of document ready:
$(function () {
    console.log('Short version of document ready');
});

// Avoiding conflicts with other libraries using $:
var $j = jQuery.noConflict();
$j(document).ready(function () {
    // Use $j instead of $ here
});




// ------------------------------------------------------------------- ::
// JQUERY SELECTORS
// jQuery uses CSS selectors to find elements

// Basic selectors:
$('*')              // All elements
$('p')              // All <p> elements
$('#myId')          // Element with id="myId"
$('.myClass')       // All elements with class="myClass"
$('p.myClass')      // <p> elements with class="myClass"

// Multiple selectors:
$('h1, h2, h3')     // All h1, h2, and h3 elements
$('p, .myClass')    // All <p> elements and elements with class="myClass"

// Descendant selectors:
$('div p')          // All <p> elements inside <div> elements
$('#container .item') // Elements with class="item" inside element with id="container"

// Child selectors:
$('div > p')        // All <p> elements that are direct children of <div>

// Sibling selectors:
$('h2 + p')         // <p> element immediately after <h2>
$('h2 ~ p')         // All <p> elements that are siblings after <h2>

// Attribute selectors:
$('[name]')         // Elements with name attribute
$('[name="email"]') // Elements where name attribute equals "email"
$('[name*="user"]') // Elements where name attribute contains "user"
$('[name^="contact"]') // Elements where name attribute starts with "contact"
$('[name$="Info"]') // Elements where name attribute ends with "Info"

// Pseudo selectors:
$('p:first')        // First <p> element
$('p:last')         // Last <p> element
$('tr:even')        // Even <tr> elements (0-indexed)
$('tr:odd')         // Odd <tr> elements (0-indexed)
$('p:eq(2)')        // Third <p> element (0-indexed)
$('p:gt(1)')        // <p> elements with index greater than 1
$('p:lt(3)')        // <p> elements with index less than 3
$(':hidden')        // All hidden elements
$(':visible')       // All visible elements
$('input:checked')  // Checked input elements
$('input:disabled') // Disabled input elements
$('input:enabled')  // Enabled input elements
$('input:focus')    // Focused input element

// Form selectors:
$(':input')         // All input elements
$(':text')          // Text input elements
$(':password')      // Password input elements
$(':radio')         // Radio button elements
$(':checkbox')      // Checkbox elements
$(':submit')        // Submit button elements
$(':reset')         // Reset button elements
$(':button')        // Button elements
$(':image')         // Image input elements
$(':file')          // File input elements

// Content filters:
$('div:contains("Hello")')  // Div elements containing text "Hello"
$('div:empty')             // Empty div elements
$('div:has(p)')           // Div elements that contain <p> elements
$('p:not(.special)')      // <p> elements that don't have class="special"

// Examples of using selectors:
$(document).ready(function () {
    // Select all paragraphs with class 'highlight'
    var highlightedParagraphs = $('p.highlight');
    console.log('Found', highlightedParagraphs.length, 'highlighted paragraphs');

    // Select the first list item in an unordered list
    var firstItem = $('ul li:first');
    console.log('First list item text:', firstItem.text());

    // Select all checked checkboxes
    var checkedBoxes = $('input:checkbox:checked');
    console.log('Number of checked boxes:', checkedBoxes.length);
});




// ------------------------------------------------------------------- ::
// JQUERY EVENTS
// jQuery provides methods to handle various events

// Document ready event:
$(document).ready(function () {
    console.log('Document is ready');
});

// Window load event:
$(window).on('load', function () {
    console.log('Window is fully loaded');
});

// Click events:
$('#myButton').click(function () {
    console.log('Button clicked!');
});

// Alternative event binding syntax:
$('#myButton').on('click', function () {
    console.log('Button clicked using .on()');
});

// Multiple events:
$('#myInput').on('focus blur', function (event) {
    console.log('Input', event.type);
});

// Event object and this keyword:
$('p').click(function (event) {
    console.log('Clicked paragraph:', $(this).text());
    console.log('Event type:', event.type);
    console.log('Mouse position:', event.pageX, event.pageY);

    // Prevent default behavior
    event.preventDefault();

    // Stop event bubbling
    event.stopPropagation();
});

// Mouse events:
$('#myDiv')
    .mouseenter(function () { console.log('Mouse entered'); })
    .mouseleave(function () { console.log('Mouse left'); })
    .mouseover(function () { console.log('Mouse over'); })
    .mouseout(function () { console.log('Mouse out'); })
    .mousemove(function (e) { console.log('Mouse moved to:', e.pageX, e.pageY); })
    .mousedown(function () { console.log('Mouse down'); })
    .mouseup(function () { console.log('Mouse up'); });

// Keyboard events:
$('#myInput')
    .keydown(function (e) { console.log('Key down:', e.which); })
    .keyup(function (e) { console.log('Key up:', e.which); })
    .keypress(function (e) { console.log('Key pressed:', e.which); });

// Form events:
$('#myForm')
    .submit(function (e) {
        console.log('Form submitted');
        e.preventDefault(); // Prevent actual form submission
    });

$('#myInput')
    .focus(function () { console.log('Input focused'); })
    .blur(function () { console.log('Input blurred'); })
    .change(function () { console.log('Input value changed:', $(this).val()); });

// Custom events:
$('#myElement').on('customEvent', function (event, data) {
    console.log('Custom event triggered with data:', data);
});

// Trigger custom event:
$('#myElement').trigger('customEvent', ['Hello World']);

// One-time events:
$('#myButton').one('click', function () {
    console.log('This will only run once');
});

// Removing event handlers:
$('#myButton').off('click'); // Remove all click handlers
$('#myButton').off(); // Remove all event handlers

// Event namespace:
$('#myButton').on('click.myNamespace', function () {
    console.log('Namespaced click event');
});
$('#myButton').off('click.myNamespace'); // Remove only namespaced events





// ------------------------------------------------------------------- ::
// JQUERY EFFECTS
// jQuery provides various built-in effects for animations

// Basic show/hide:
$('#myElement').hide();          // Hide immediately
$('#myElement').show();          // Show immediately
$('#myElement').toggle();        // Toggle visibility

// Show/hide with animation:
$('#myElement').hide('slow');    // Hide with slow animation
$('#myElement').show('fast');    // Show with fast animation
$('#myElement').toggle(1000);    // Toggle with 1000ms animation

// Fade effects:
$('#myElement').fadeIn();        // Fade in
$('#myElement').fadeOut();       // Fade out
$('#myElement').fadeToggle();    // Toggle fade
$('#myElement').fadeTo(500, 0.5); // Fade to 50% opacity in 500ms

// Slide effects:
$('#myElement').slideDown();     // Slide down
$('#myElement').slideUp();       // Slide up
$('#myElement').slideToggle();   // Toggle slide

// Custom animations:
$('#myElement').animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
}, 1000);

// Chaining animations:
$('#myElement')
    .slideUp(300)
    .delay(800)
    .fadeIn(400);

// Animation with callback:
$('#myElement').fadeOut(1000, function () {
    console.log('Fade out completed');
    $(this).text('Animation finished!').fadeIn();
});

// Stop animations:
$('#myElement').stop();          // Stop current animation
$('#myElement').stop(true);      // Stop and clear queue
$('#myElement').stop(true, true); // Stop, clear queue, and jump to end

// Animation queue:
$('#myElement')
    .animate({ left: '+=50' }, 500)
    .animate({ top: '+=50' }, 500)
    .animate({ left: '-=50' }, 500)
    .animate({ top: '-=50' }, 500);





// ------------------------------------------------------------------- ::
// JQUERY AJAX
// jQuery simplifies AJAX requests

// Basic GET request:
$.get('/api/users', function (data) {
    console.log('Users received:', data);
}).fail(function () {
    console.log('Error occurred');
});

// Basic POST request:
$.post('/api/users', { name: 'John', email: 'john@example.com' }, function (data) {
    console.log('User created:', data);
});

// Full AJAX request:
$.ajax({
    url: '/api/users',
    method: 'GET',
    dataType: 'json',
    timeout: 5000,
    beforeSend: function (xhr) {
        console.log('Sending request...');
        xhr.setRequestHeader('Authorization', 'Bearer token123');
    },
    success: function (data, textStatus, xhr) {
        console.log('Success:', data);
    },
    error: function (xhr, textStatus, errorThrown) {
        console.log('Error:', textStatus, errorThrown);
    },
    complete: function (xhr, textStatus) {
        console.log('Request completed');
    }
});

// AJAX with Promise interface:
var promise = $.ajax({
    url: '/api/users',
    method: 'GET',
    dataType: 'json'
});

promise.done(function (data) {
    console.log('Success:', data);
}).fail(function (xhr, textStatus, errorThrown) {
    console.log('Error:', textStatus);
}).always(function () {
    console.log('Always executed');
});

// Using modern Promise syntax:
$.ajax('/api/users')
    .then(function (data) {
        console.log('Users:', data);
        return $.ajax('/api/posts');
    })
    .then(function (posts) {
        console.log('Posts:', posts);
    })
    .catch(function (error) {
        console.log('Error in chain:', error);
    });

// JSON requests:
$.getJSON('/api/users.json', function (data) {
    $.each(data, function (index, user) {
        console.log(user.name, user.email);
    });
});

// Load content into element:
$('#content').load('/api/html-content');

// Load with callback:
$('#content').load('/api/html-content', function (response, status, xhr) {
    if (status === 'error') {
        console.log('Error loading content:', xhr.status, xhr.statusText);
    }
});

// Global AJAX settings:
$.ajaxSetup({
    timeout: 10000,
    beforeSend: function (xhr) {
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    },
    error: function (xhr, textStatus, errorThrown) {
        console.log('Global error handler:', textStatus);
    }
});

// Global AJAX events:
$(document).ajaxStart(function () {
    $('#loadingSpinner').show();
}).ajaxStop(function () {
    $('#loadingSpinner').hide();
}).ajaxError(function (event, xhr, settings, error) {
    console.log('AJAX error in:', settings.url, error);
});





// ------------------------------------------------------------------- ::
// JQUERY PLUGINS
// Creating and using jQuery plugins

// Basic plugin structure:
(function ($) {
    $.fn.highlight = function (options) {
        // Default settings
        var settings = $.extend({
            color: 'yellow',
            backgroundColor: 'black'
        }, options);

        return this.each(function () {
            $(this).css({
                'color': settings.color,
                'background-color': settings.backgroundColor
            });
        });
    };
})(jQuery);

// Using the plugin:
$('p').highlight();
$('p').highlight({ color: 'red', backgroundColor: 'blue' });

// More complex plugin with methods:
(function ($) {
    var methods = {
        init: function (options) {
            var settings = $.extend({
                speed: 500,
                color: 'red'
            }, options);

            return this.each(function () {
                var $this = $(this);
                $this.data('flasher', settings);
                $this.css('background-color', 'transparent');
            });
        },

        flash: function () {
            return this.each(function () {
                var $this = $(this);
                var settings = $this.data('flasher');

                $this.animate({
                    backgroundColor: settings.color
                }, settings.speed / 2).animate({
                    backgroundColor: 'transparent'
                }, settings.speed / 2);
            });
        },

        destroy: function () {
            return this.each(function () {
                $(this).removeData('flasher');
            });
        }
    };

    $.fn.flasher = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.flasher');
        }
    };
})(jQuery);

// Using the complex plugin:
$('#myElement').flasher({ speed: 1000, color: 'blue' });
$('#myElement').flasher('flash');
$('#myElement').flasher('destroy');

// Popular jQuery plugins examples:
// jQuery UI, jQuery Validation, DataTables, Slick Carousel, etc.





// ------------------------------------------------------------------- ::
// SELECTORS AND FILTERS
// More advanced selector techniques

// Combining multiple conditions:
$('input[type="text"][name^="user"]') // Text inputs with name starting with "user"

// Using variables in selectors:
var className = 'active';
var id = 'main';
$('.' + className)     // Elements with class 'active'
$('#' + id + ' p')     // Paragraphs inside element with id 'main'

// Filter methods:
$('p').filter('.highlight')           // Paragraphs with class 'highlight'
$('p').filter(function (index) {       // Paragraphs with even index
    return index % 2 === 0;
});

// Not filter:
$('p').not('.special')                // Paragraphs without class 'special'

// Finding elements:
$('#container').find('p')             // Find paragraphs inside container
$('li').has('span')                   // List items that contain span elements

// Selecting by position:
$('li').first()                       // First list item
$('li').last()                        // Last list item
$('li').eq(2)                         // Third list item (0-indexed)
$('li').slice(1, 4)                   // List items from index 1 to 3

// Advanced filtering examples:
$(document).ready(function () {
    // Select all visible paragraphs with text content
    var visibleTextParagraphs = $('p:visible').filter(function () {
        return $(this).text().trim().length > 0;
    });

    // Select all inputs that are not empty
    var filledInputs = $('input:text').filter(function () {
        return this.value.length > 0;
    });

    // Select elements based on data attributes
    var importantElements = $('[data-priority]').filter(function () {
        return $(this).data('priority') > 5;
    });
});





// ------------------------------------------------------------------- ::
// ADD AND UPDATE HTML ELEMENTS
// Manipulating HTML content and structure

// Getting and setting content:
var content = $('#myDiv').html();     // Get HTML content
$('#myDiv').html('<p>New content</p>'); // Set HTML content

var text = $('#myDiv').text();        // Get text content
$('#myDiv').text('New text content'); // Set text content

var value = $('#myInput').val();      // Get input value
$('#myInput').val('New value');       // Set input value

// Adding content:
$('#myDiv').append('<p>Added at end</p>');    // Add to end of content
$('#myDiv').prepend('<p>Added at start</p>'); // Add to start of content
$('<p>New paragraph</p>').appendTo('#myDiv'); // Create and add to end
$('<p>New paragraph</p>').prependTo('#myDiv'); // Create and add to start

// Adding siblings:
$('#myDiv').after('<div>After myDiv</div>');   // Add after element
$('#myDiv').before('<div>Before myDiv</div>'); // Add before element

// Inserting around existing content:
$('#myDiv').wrap('<section class="wrapper"></section>'); // Wrap element
$('#myDiv').wrapInner('<div class="inner"></div>');     // Wrap content

// Creating elements:
var newDiv = $('<div>').addClass('new').text('New element');
var newInput = $('<input>', {
    type: 'text',
    name: 'username',
    id: 'username',
    'class': 'form-control',
    placeholder: 'Enter username'
});

// Adding created elements:
$('#container').append(newDiv);
$('#form').append(newInput);

// Cloning elements:
var clonedElement = $('#original').clone();      // Clone without events
var clonedWithEvents = $('#original').clone(true); // Clone with events

// Removing elements:
$('#myDiv').remove();        // Remove element completely
$('#myDiv').detach();        // Remove but keep data and events
$('#myDiv').empty();         // Remove all child elements

// Replacing elements:
$('#oldDiv').replaceWith('<div id="newDiv">New content</div>');
$('<div id="newDiv">New content</div>').replaceAll('#oldDiv');

// Practical examples:
$(document).ready(function () {
    // Create a dynamic list
    var fruits = ['Apple', 'Banana', 'Orange', 'Grape'];
    var $list = $('<ul>');

    $.each(fruits, function (index, fruit) {
        $list.append($('<li>').text(fruit));
    });

    $('#fruitContainer').append($list);

    // Create a form dynamically
    var $form = $('<form>', {
        id: 'dynamicForm',
        action: '/submit',
        method: 'post'
    });

    var fields = [
        { type: 'text', name: 'name', placeholder: 'Name' },
        { type: 'email', name: 'email', placeholder: 'Email' },
        { type: 'submit', value: 'Submit' }
    ];

    $.each(fields, function (index, field) {
        var $input = $('<input>', field);
        $form.append($input);
    });

    $('#formContainer').append($form);
});





// ------------------------------------------------------------------- ::
// ADD AND UPDATE CSS STYLES
// Manipulating CSS styles and classes

// Getting and setting CSS properties:
var color = $('#myDiv').css('color');           // Get single property
$('#myDiv').css('color', 'red');                // Set single property

var styles = $('#myDiv').css(['color', 'font-size']); // Get multiple properties
$('#myDiv').css({                               // Set multiple properties
    'color': 'blue',
    'font-size': '16px',
    'margin': '10px'
});

// Working with classes:
$('#myDiv').addClass('highlight active');       // Add classes
$('#myDiv').removeClass('old-style');           // Remove class
$('#myDiv').toggleClass('visible');             // Toggle class
var hasClass = $('#myDiv').hasClass('active');  // Check if has class

// Conditional class manipulation:
$('#myDiv').toggleClass('expanded', someCondition);

// Getting computed styles:
var computedStyle = $('#myDiv').css('margin-top');

// Setting styles with functions:
$('p').css('font-size', function (index, currentValue) {
    return parseInt(currentValue, 10) + 2 + 'px';
});

// Dimensions and positioning:
var width = $('#myDiv').width();          // Content width
var height = $('#myDiv').height();        // Content height
var outerWidth = $('#myDiv').outerWidth(); // Width + padding + border
var outerHeight = $('#myDiv').outerHeight(); // Height + padding + border
var innerWidth = $('#myDiv').innerWidth(); // Width + padding
var innerHeight = $('#myDiv').innerHeight(); // Height + padding

// Setting dimensions:
$('#myDiv').width(200).height(100);

// Position:
var offset = $('#myDiv').offset();        // Position relative to document
var position = $('#myDiv').position();    // Position relative to parent

// Scroll position:
var scrollTop = $(window).scrollTop();
var scrollLeft = $(window).scrollLeft();
$(window).scrollTop(100);

// Practical styling examples:
$(document).ready(function () {
    // Highlight every other row in a table
    $('table tr:even').addClass('even-row');
    $('table tr:odd').addClass('odd-row');

    // Create a simple theme switcher
    $('#darkTheme').click(function () {
        $('body').removeClass('light-theme').addClass('dark-theme');
    });

    $('#lightTheme').click(function () {
        $('body').removeClass('dark-theme').addClass('light-theme');
    });

    // Responsive font sizing based on screen width
    function adjustFontSize() {
        var screenWidth = $(window).width();
        var fontSize = Math.max(12, Math.min(24, screenWidth / 50));
        $('body').css('font-size', fontSize + 'px');
    }

    $(window).resize(adjustFontSize);
    adjustFontSize(); // Initial call
});





// ------------------------------------------------------------------- ::
// HANDLING HTML EVENTS
// Comprehensive event handling examples

// Form validation on events:
$('#registrationForm').on('submit', function (e) {
    var isValid = true;
    var $form = $(this);

    // Clear previous errors
    $form.find('.error').removeClass('error');
    $('.error-message').remove();

    // Validate required fields
    $form.find('[required]').each(function () {
        var $field = $(this);
        if (!$field.val().trim()) {
            isValid = false;
            $field.addClass('error')
                .after('<span class="error-message">This field is required</span>');
        }
    });

    // Validate email
    var $email = $form.find('[type="email"]');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ($email.val() && !emailRegex.test($email.val())) {
        isValid = false;
        $email.addClass('error')
            .after('<span class="error-message">Please enter a valid email</span>');
    }

    if (!isValid) {
        e.preventDefault();
    }
});

// Real-time search with debounce:
var searchTimeout;
$('#searchInput').on('input', function () {
    var query = $(this).val();

    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(function () {
        if (query.length >= 2) {
            performSearch(query);
        } else {
            $('#searchResults').empty();
        }
    }, 300);
});

function performSearch(query) {
    $.ajax({
        url: '/api/search',
        data: { q: query },
        success: function (results) {
            displaySearchResults(results);
        }
    });
}

// Interactive accordion:
$('.accordion-header').on('click', function () {
    var $header = $(this);
    var $content = $header.next('.accordion-content');
    var $accordion = $header.closest('.accordion');

    // Close other sections
    $accordion.find('.accordion-content').not($content).slideUp();
    $accordion.find('.accordion-header').not($header).removeClass('active');

    // Toggle current section
    $content.slideToggle();
    $header.toggleClass('active');
});

// Image gallery with keyboard navigation:
var currentImageIndex = 0;
var images = $('.gallery img');

$('.gallery img').on('click', function () {
    currentImageIndex = $(this).index();
    openLightbox($(this).attr('src'));
});

$(document).on('keydown', function (e) {
    if ($('.lightbox').is(':visible')) {
        switch (e.which) {
            case 37: // Left arrow
                navigateImage(-1);
                break;
            case 39: // Right arrow
                navigateImage(1);
                break;
            case 27: // Escape
                closeLightbox();
                break;
        }
    }
});

function navigateImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = images.length - 1;
    if (currentImageIndex >= images.length) currentImageIndex = 0;

    var newSrc = images.eq(currentImageIndex).attr('src');
    $('.lightbox img').attr('src', newSrc);
}

// Drag and drop functionality:
$('.draggable').on('dragstart', function (e) {
    var dragData = {
        id: $(this).attr('id'),
        content: $(this).text()
    };
    e.originalEvent.dataTransfer.setData('text/plain', JSON.stringify(dragData));
});

$('.drop-zone').on('dragover', function (e) {
    e.preventDefault();
    $(this).addClass('drag-over');
}).on('dragleave', function () {
    $(this).removeClass('drag-over');
}).on('drop', function (e) {
    e.preventDefault();
    var data = JSON.parse(e.originalEvent.dataTransfer.getData('text/plain'));
    $(this).removeClass('drag-over')
        .append('<div class="dropped-item">' + data.content + '</div>');
});





// ------------------------------------------------------------------- ::
// AJAX CALLS
// More sophisticated AJAX implementations

// AJAX with loading states and error handling:
function makeAjaxRequest(url, options) {
    var settings = $.extend({
        showLoading: true,
        loadingTarget: '#loading',
        errorTarget: '#error-messages'
    }, options);

    if (settings.showLoading) {
        $(settings.loadingTarget).show();
    }

    return $.ajax(url, settings)
        .done(function (data, textStatus, xhr) {
            console.log('Request successful');
            if (settings.success) {
                settings.success(data, textStatus, xhr);
            }
        })
        .fail(function (xhr, textStatus, errorThrown) {
            var errorMessage = 'An error occurred';
            if (xhr.responseJSON && xhr.responseJSON.message) {
                errorMessage = xhr.responseJSON.message;
            }
            $(settings.errorTarget).html('<div class="alert alert-danger">' + errorMessage + '</div>');
        })
        .always(function () {
            if (settings.showLoading) {
                $(settings.loadingTarget).hide();
            }
        });
};


// CRUD operations:
var UserAPI = {
    getAll: function () {
        return $.ajax({
            url: '/api/users',
            method: 'GET',
            dataType: 'json'
        });
    },

    get: function (id) {
        return $.ajax({
            url: '/api/users/' + id,
            method: 'GET',
            dataType: 'json'
        });
    },

    create: function (userData) {
        return $.ajax({
            url: '/api/users',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData)
        });
    },

    update: function (id, userData) {
        return $.ajax({
            url: '/api/users/' + id,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(userData)
        });
    },

    delete: function (id) {
        return $.ajax({
            url: '/api/users/' + id,
            method: 'DELETE'
        });
    }
};

// Using the UserAPI:
$(document).ready(function () {
    // Load and display users
    UserAPI.getAll().done(function (users) {
        var $userList = $('#userList');
        $.each(users, function (index, user) {
            var $userItem = $('<div class="user-item">')
                .attr('data-user-id', user.id)
                .html('<strong>' + user.name + '</strong> - ' + user.email);
            $userList.append($userItem);
        });
    });

    // Create new user
    $('#createUserForm').on('submit', function (e) {
        e.preventDefault();
        var userData = {
            name: $('#name').val(),
            email: $('#email').val(),
            age: $('#age').val()
        };
        UserAPI.create(userData).done(function (newUser) {
            console.log('User created:', newUser);
            // Optionally, refresh user list or add new user to UI
        });
    });
});





// ------------------------------------------------------------------- ::
// 13. CHAINING METHODS
// jQuery's most powerful feature - method chaining

// Basic chaining:
$('#myDiv')
    .addClass('highlight')
    .css('color', 'red')
    .fadeIn(500)
    .delay(1000)
    .fadeOut(500);

// Chaining with different method types:
$('#myElement')
    .hide()                    // Effect method
    .text('New content')       // Content method
    .addClass('updated')       // Class method
    .css('font-weight', 'bold') // Style method
    .show(300);                // Effect method

// Breaking chains when needed:
var $element = $('#myDiv');
$element.addClass('processing');

if (someCondition) {
    $element.css('background-color', 'yellow');
} else {
    $element.css('background-color', 'green');
}

$element.removeClass('processing').fadeIn();

// Chaining with conditional logic:
$('.item')
    .each(function (index) {
        var $this = $(this);
        $this
            .addClass('item-' + index)
            .css('z-index', index);

        if (index % 2 === 0) {
            $this.addClass('even');
        } else {
            $this.addClass('odd');
        }
    })
    .filter(':visible')
    .fadeIn(300);

// Advanced chaining with end() method:
$('#container')
    .find('p')              // Find paragraphs
    .addClass('styled') // Style the paragraphs
    .end()              // Go back to #container
    .find('h2')             // Find h2 elements
    .addClass('header') // Style the headers
    .end()              // Go back to #container
    .addClass('processed'); // Style the container

// Chaining with callbacks:
$('#myElement')
    .slideUp(300, function () {
        $(this).text('Slide up complete');
    })
    .slideDown(300)
    .fadeOut(500, function () {
        console.log('Animation sequence complete');
    });

// Complex chaining example - image gallery:
$('.gallery')
    .find('img')
    .addClass('gallery-image')
    .wrap('<div class="image-wrapper">')
    .after('<div class="image-overlay">')
    .parent()
    .hover(
        function () { $(this).find('.image-overlay').fadeIn(200); },
        function () { $(this).find('.image-overlay').fadeOut(200); }
    )
    .end()
    .end()
    .addClass('gallery-initialized');






// ------------------------------------------------------------------- ::
// TRAVERSING THE DOM
// Navigating the DOM tree with jQuery

// Parent traversal:
$('#child').parent()           // Direct parent
$('#child').parents()          // All ancestors
$('#child').parents('div')     // Ancestors that are divs
$('#child').parentsUntil('body') // Ancestors until body
$('#child').closest('form')    // Closest ancestor that matches selector

// Child traversal:
$('#parent').children()        // Direct children
$('#parent').children('p')     // Direct children that are paragraphs
$('#parent').find('span')      // All descendants that are spans
$('#parent').find('*')         // All descendants

// Sibling traversal:
$('#element').siblings()       // All siblings
$('#element').siblings('.class') // Siblings with specific class
$('#element').next()           // Next sibling
$('#element').nextAll()        // All following siblings
$('#element').nextUntil('.stop') // Following siblings until .stop
$('#element').prev()           // Previous sibling
$('#element').prevAll()        // All preceding siblings
$('#element').prevUntil('.start') // Preceding siblings until .start

// Practical traversal examples:
$(document).ready(function () {
    // Highlight parent when child is clicked
    $('.child-element').on('click', function () {
        $(this).parent().addClass('parent-highlighted');
    });

    // Toggle visibility of sibling elements
    $('.toggle-button').on('click', function () {
        $(this).siblings('.content').slideToggle();
    });

    // Find and style nested lists
    $('ul').find('ul').addClass('nested-list');

    // Navigate form structure
    $('.form-field').on('focus', function () {
        $(this).closest('.field-group').addClass('focused');
    }).on('blur', function () {
        $(this).closest('.field-group').removeClass('focused');
    });

    // Table row operations
    $('.delete-button').on('click', function () {
        $(this).closest('tr').fadeOut(300, function () {
            $(this).remove();
        });
    });

    // Menu navigation
    $('.menu-item').hover(
        function () {
            $(this).children('.submenu').slideDown(200);
        },
        function () {
            $(this).children('.submenu').slideUp(200);
        }
    );
});

// Complex traversal example - breadcrumb navigation:
function updateBreadcrumb($currentElement) {
    var breadcrumbs = [];

    $currentElement.parentsUntil('body').each(function () {
        var $parent = $(this);
        var title = $parent.data('title') || $parent.attr('class') || 'Unknown';
        breadcrumbs.unshift(title);
    });

    var breadcrumbHTML = breadcrumbs.join(' > ');
    $('#breadcrumb').html(breadcrumbHTML);
}

// Tree structure navigation:
$('.tree-node').on('click', function (e) {
    e.stopPropagation();
    var $node = $(this);

    // Toggle children
    $node.children('ul').slideToggle();

    // Update visual state
    $node.toggleClass('expanded');

    // Update all parent nodes
    $node.parents('.tree-node').addClass('has-expanded-child');
});






// ------------------------------------------------------------------- ::
// ANIMATIONS
// Comprehensive animation examples

// Basic show/hide with different speeds:
$('#element').show();           // Instant
$('#element').show('slow');     // 600ms
$('#element').show('fast');     // 200ms
$('#element').show(1500);       // Custom duration in ms

// Fade animations:
$('#element').fadeIn();         // Fade in from invisible
$('#element').fadeOut();        // Fade out to invisible
$('#element').fadeToggle();     // Toggle fade state
$('#element').fadeTo(500, 0.7); // Fade to specific opacity

// Slide animations:
$('#element').slideDown();      // Slide down from hidden
$('#element').slideUp();        // Slide up to hidden
$('#element').slideToggle();    // Toggle slide state

// Custom animations with animate():
$('#element').animate({
    width: '200px',
    height: '200px',
    left: '100px',
    top: '50px',
    opacity: 0.8
}, 1000);

// Relative animations:
$('#element').animate({
    left: '+=50px',    // Move 50px to the right
    top: '-=25px',     // Move 25px up
    width: '*=1.5'     // Multiply width by 1.5
}, 800);

// Step-by-step animation:
$('#element').animate({
    width: '200px'
}, {
    duration: 1000,
    step: function (now, fx) {
        // Called for each animation step
        $(this).text(Math.round(now) + 'px');
    },
    complete: function () {
        console.log('Animation complete');
    }
});

// Easing functions (requires jQuery UI or easing plugin):
$('#element').animate({
    left: '200px'
}, {
    duration: 1000,
    easing: 'easeOutBounce' // Requires jQuery UI or easing plugin
});

// Animation queue management:
$('#element')
    .animate({ left: '100px' }, 500)
    .animate({ top: '100px' }, 500)
    .animate({ left: '0px' }, 500)
    .animate({ top: '0px' }, 500);

// Delay in animation chain:
$('#element')
    .fadeOut(300)
    .delay(800)
    .fadeIn(400);

// Stop animations:
$('#element').stop();              // Stop current animation
$('#element').stop(true);          // Stop and clear queue
$('#element').stop(true, true);    // Stop, clear queue, jump to end

// Animation callbacks:
$('#element').fadeOut(500, function () {
    console.log('Fade out complete');
    $(this).remove();
});

// Practical animation examples:

// Image carousel:
function showNextSlide() {
    var $current = $('.slide.active');
    var $next = $current.next('.slide');

    if ($next.length === 0) {
        $next = $('.slide').first();
    }

    $current.fadeOut(300, function () {
        $(this).removeClass('active');
        $next.addClass('active').fadeIn(300);
    });
}

// Animated progress bar:
function animateProgressBar(targetWidth) {
    $('#progressBar').animate({
        width: targetWidth + '%'
    }, {
        duration: 1500,
        step: function (now) {
            $('#progressText').text(Math.round(now) + '%');
        }
    });
}

// Floating notification:
function showNotification(message, type) {
    var $notification = $('<div class="notification ' + type + '">')
        .text(message)
        .css({
            position: 'fixed',
            top: '-50px',
            right: '20px',
            opacity: 0
        })
        .appendTo('body');

    $notification
        .animate({ top: '20px', opacity: 1 }, 300)
        .delay(3000)
        .animate({ top: '-50px', opacity: 0 }, 300, function () {
            $(this).remove();
        });
}

// Accordion with animation:
$('.accordion-header').on('click', function () {
    var $content = $(this).next('.accordion-content');
    var $otherContents = $('.accordion-content').not($content);

    $otherContents.slideUp(300);
    $content.slideToggle(300);
});

// Morphing shapes animation:
function morphShape($element, newProps) {
    $element.animate(newProps, {
        duration: 800,
        step: function (now, fx) {
            if (fx.prop === 'borderRadius') {
                $(this).css('border-radius', now + 'px');
            }
        }
    });
}






// ------------------------------------------------------------------- ::
// FORM VALIDATION WITH JQUERY
// Comprehensive form validation implementation

// Basic validation setup:
function initFormValidation() {
    $('.validated-form').each(function () {
        var $form = $(this);

        $form.on('submit', function (e) {
            if (!validateForm($form)) {
                e.preventDefault();
            }
        });

        // Real-time validation
        $form.find('input, textarea, select').on('blur', function () {
            validateField($(this));
        });
    });
}

// Field validation function:
function validateField($field) {
    var fieldName = $field.attr('name');
    var fieldValue = $field.val().trim();
    var fieldType = $field.attr('type');
    var isValid = true;
    var errorMessage = '';

    // Remove previous error states
    $field.removeClass('error');
    $field.siblings('.error-message').remove();

    // Required field validation
    if ($field.attr('required') && !fieldValue) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Email validation
    else if (fieldType === 'email' && fieldValue) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Phone validation
    else if ($field.hasClass('phone') && fieldValue) {
        var phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(fieldValue)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    // Password validation
    else if (fieldType === 'password' && fieldValue) {
        if (fieldValue.length < 8) {
            isValid = false;
            errorMessage = 'Password must be at least 8 characters long';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(fieldValue)) {
            isValid = false;
            errorMessage = 'Password must contain uppercase, lowercase, and number';
        }
    }

    // Password confirmation
    else if ($field.hasClass('password-confirm')) {
        var originalPassword = $('input[type="password"]').not('.password-confirm').val();
        if (fieldValue !== originalPassword) {
            isValid = false;
            errorMessage = 'Passwords do not match';
        }
    }

    // Custom validation patterns
    var pattern = $field.data('pattern');
    if (pattern && fieldValue) {
        var regex = new RegExp(pattern);
        if (!regex.test(fieldValue)) {
            isValid = false;
            errorMessage = $field.data('pattern-message') || 'Invalid format';
        }
    }

    // Min/Max length validation
    var minLength = $field.data('min-length');
    var maxLength = $field.data('max-length');

    if (minLength && fieldValue.length < minLength) {
        isValid = false;
        errorMessage = 'Minimum ' + minLength + ' characters required';
    } else if (maxLength && fieldValue.length > maxLength) {
        isValid = false;
        errorMessage = 'Maximum ' + maxLength + ' characters allowed';
    }

    // Display error if validation failed
    if (!isValid) {
        $field.addClass('error');
        $field.after('<span class="error-message">' + errorMessage + '</span>');
    }

    return isValid;
}

// Form validation function:
function validateForm($form) {
    var isValid = true;

    $form.find('input, textarea, select').each(function () {
        if (!validateField($(this))) {
            isValid = false;
        }
    });

    return isValid;
}

// Advanced validation examples:

// Credit card validation:
function validateCreditCard($field) {
    var cardNumber = $field.val().replace(/\s/g, '');
    var isValid = false;

    // Luhn algorithm
    var sum = 0;
    var alternate = false;

    for (var i = cardNumber.length - 1; i >= 0; i--) {
        var digit = parseInt(cardNumber.charAt(i), 10);

        if (alternate) {
            digit *= 2;
            if (digit > 9) {
                digit = (digit % 10) + 1;
            }
        }

        sum += digit;
        alternate = !alternate;
    }

    isValid = (sum % 10 === 0);

    if (!isValid) {
        $field.addClass('error').after('<span class="error-message">Invalid card number</span>');
    }

    return isValid;
}

// Date validation:
function validateDate($field) {
    var dateValue = $field.val();
    var minDate = $field.data('min-date');
    var maxDate = $field.data('max-date');

    var inputDate = new Date(dateValue);
    var isValid = true;
    var errorMessage = '';

    if (isNaN(inputDate.getTime())) {
        isValid = false;
        errorMessage = 'Please enter a valid date';
    } else if (minDate && inputDate < new Date(minDate)) {
        isValid = false;
        errorMessage = 'Date must be after ' + minDate;
    } else if (maxDate && inputDate > new Date(maxDate)) {
        isValid = false;
        errorMessage = 'Date must be before ' + maxDate;
    }

    if (!isValid) {
        $field.addClass('error').after('<span class="error-message">' + errorMessage + '</span>');
    }

    return isValid;
}

// File upload validation:
function validateFileUpload($field) {
    var files = $field[0].files;
    var allowedTypes = $field.data('allowed-types') || '';
    var maxSize = $field.data('max-size') || 5242880; // 5MB default
    var isValid = true;
    var errorMessage = '';

    if (files.length > 0) {
        var file = files[0];

        // Check file type
        if (allowedTypes) {
            var allowedArray = allowedTypes.split(',');
            var fileExtension = file.name.split('.').pop().toLowerCase();

            if (allowedArray.indexOf(fileExtension) === -1) {
                isValid = false;
                errorMessage = 'Allowed file types: ' + allowedTypes;
            }
        }

        // Check file size
        if (file.size > maxSize) {
            isValid = false;
            errorMessage = 'File size must be less than ' + (maxSize / 1024 / 1024) + 'MB';
        }
    }

    if (!isValid) {
        $field.addClass('error').after('<span class="error-message">' + errorMessage + '</span>');
    }

    return isValid;
}

// Initialize validation on document ready:
$(document).ready(function () {
    initFormValidation();

    // Custom validation for specific fields
    $('.credit-card').on('blur', function () {
        validateCreditCard($(this));
    });

    $('.date-field').on('blur', function () {
        validateDate($(this));
    });

    $('.file-upload').on('change', function () {
        validateFileUpload($(this));
    });
});






// ------------------------------------------------------------------- ::
// MANIPULATING ATTRIBUTES AND PROPERTIES
// Working with HTML attributes and DOM properties

// Getting and setting attributes:
var title = $('#myElement').attr('title');        // Get attribute
$('#myElement').attr('title', 'New title');       // Set attribute
$('#myElement').attr({                             // Set multiple attributes
    'title': 'New title',
    'data-id': '123',
    'class': 'updated'
});

// Removing attributes:
$('#myElement').removeAttr('title');               // Remove single attribute
$('#myElement').removeAttr('title class');         // Remove multiple attributes

// Properties vs Attributes:
$('#myCheckbox').prop('checked');                  // Get property (boolean)
$('#myCheckbox').attr('checked');                  // Get attribute (string or undefined)
$('#myCheckbox').prop('checked', true);            // Set property
$('#myCheckbox').attr('checked', 'checked');       // Set attribute

// Common property manipulations:
$('#myInput').prop('disabled', true);              // Disable input
$('#mySelect').prop('selectedIndex', 2);           // Select third option
$('#myTextarea').prop('readOnly', true);           // Make textarea read-only

// Working with form properties:
$('input[type="checkbox"]').prop('checked', function (index, currentValue) {
    return !currentValue; // Toggle all checkboxes
});

// Dynamic attribute manipulation:
$('.data-item').each(function (index) {
    $(this).attr({
        'data-index': index,
        'id': 'item-' + index,
        'tabindex': index + 1
    });
});

// Conditional attribute setting:
$('.button').each(function () {
    var $btn = $(this);
    var isActive = $btn.hasClass('active');

    $btn.attr('aria-pressed', isActive)
        .prop('disabled', !isActive);
});






// ------------------------------------------------------------------- ::
// 18. WORKING WITH DATA-* ATTRIBUTES
// HTML5 data attributes handling

// Setting data attributes:
$('#myElement').data('user-id', 123);              // Sets data-user-id="123"
$('#myElement').data('config', { name: 'John', age: 30 }); // Stores object

// Getting data attributes:
var userId = $('#myElement').data('user-id');      // Returns 123 (number)
var config = $('#myElement').data('config');       // Returns object

// Data vs attr for data attributes:
$('#myElement').attr('data-value', '42');          // String "42"
$('#myElement').data('value', 42);                 // Number 42

var attrValue = $('#myElement').attr('data-value'); // "42" (string)
var dataValue = $('#myElement').data('value');      // 42 (number)

// Practical data attribute examples:

// Configuration storage:
$('.widget').each(function () {
    var $widget = $(this);
    var config = {
        animation: $widget.data('animation') || 'fade',
        duration: $widget.data('duration') || 300,
        autoplay: $widget.data('autoplay') || false
    };

    // Initialize widget with config
    initWidget($widget, config);
});

// State management:
$('.toggle-button').on('click', function () {
    var $btn = $(this);
    var isExpanded = $btn.data('expanded') || false;

    $btn.data('expanded', !isExpanded);
    $btn.attr('aria-expanded', !isExpanded);

    var targetId = $btn.data('target');
    $('#' + targetId).slideToggle();
});

// Data-driven styling:
$('.status-indicator').each(function () {
    var $indicator = $(this);
    var status = $indicator.data('status');
    var priority = $indicator.data('priority');

    $indicator.addClass('status-' + status + ' priority-' + priority);
});

// Storing complex data:
function saveFormState($form) {
    var formData = {};

    $form.find('input, select, textarea').each(function () {
        var $field = $(this);
        formData[$field.attr('name')] = $field.val();
    });

    $form.data('saved-state', formData);
}

function restoreFormState($form) {
    var savedState = $form.data('saved-state');

    if (savedState) {
        $.each(savedState, function (name, value) {
            $form.find('[name="' + name + '"]').val(value);
        });
    }
}

// Data attribute selectors:
$('[data-role="button"]').addClass('btn');         // Select by data attribute
$('[data-priority="high"]').addClass('urgent');    // Select by specific value
$('[data-user-id]').each(function () {              // Select elements with data-user-id
    var userId = $(this).data('user-id');
    loadUserData(userId, $(this));
});






// ------------------------------------------------------------------- ::
// 19. EVENT DELEGATION IN JQUERY
// Handling events on dynamically created elements

// Problem with direct event binding:
$('.delete-btn').on('click', function () {
    // This won't work for dynamically added buttons
    $(this).closest('.item').remove();
});

// Solution with event delegation:
$(document).on('click', '.delete-btn', function () {
    // This works for current and future .delete-btn elements
    $(this).closest('.item').remove();
});

// Event delegation syntax:
$(container).on(eventType, selector, handler);

// Common event delegation patterns:

// Dynamic list management:
$('#itemList').on('click', '.add-item', function () {
    var $list = $(this).closest('#itemList');
    var $newItem = $('<div class="item">New Item <button class="delete-btn">Delete</button></div>');
    $list.append($newItem);
});

$('#itemList').on('click', '.delete-btn', function () {
    $(this).closest('.item').fadeOut(300, function () {
        $(this).remove();
    });
});

// Form handling with delegation:
$(document).on('submit', '.ajax-form', function (e) {
    e.preventDefault();
    var $form = $(this);

    $.ajax({
        url: $form.attr('action'),
        method: $form.attr('method') || 'POST',
        data: $form.serialize(),
        success: function (response) {
            $form.replaceWith('<div class="success">Form submitted!</div>');
        }
    });
});

// Modal dialogs with delegation:
$(document).on('click', '[data-modal]', function () {
    var modalId = $(this).data('modal');
    $('#' + modalId).fadeIn();
});

$(document).on('click', '.modal-close, .modal-overlay', function () {
    $(this).closest('.modal').fadeOut();
});

// Tab functionality with delegation:
$(document).on('click', '.tab-header', function () {
    var $tab = $(this);
    var $tabContainer = $tab.closest('.tab-container');
    var targetPanel = $tab.data('target');

    // Update active states
    $tabContainer.find('.tab-header').removeClass('active');
    $tabContainer.find('.tab-panel').removeClass('active');

    $tab.addClass('active');
    $('#' + targetPanel).addClass('active');
});

// Complex delegation example - sortable list:
$('#sortableList')
    .on('mousedown', '.drag-handle', function (e) {
        var $item = $(this).closest('.list-item');
        $item.addClass('dragging');

        $(document).data('dragging-item', $item);
    })
    .on('mouseenter', '.list-item', function () {
        var $draggingItem = $(document).data('dragging-item');
        if ($draggingItem && !$(this).is($draggingItem)) {
            $draggingItem.insertBefore($(this));
        }
    });

$(document).on('mouseup', function () {
    $('.list-item').removeClass('dragging');
    $(document).removeData('dragging-item');
});

// Performance considerations for delegation:

// Good - specific container:
$('#userTable').on('click', '.edit-user', editUserHandler);

// Better - more specific selector:
$('#userTable tbody').on('click', 'tr .edit-btn', editUserHandler);

// Avoid - too broad delegation:
$(document).on('click', 'button', genericButtonHandler); // Not recommended

// Event delegation with namespaces:
$(document).on('click.myModule', '.my-button', function () {
    console.log('Namespaced event');
});

// Remove namespaced events:
$(document).off('.myModule');







// ------------------------------------------------------------------- ::
// JQUERY UTILITY METHODS
// Useful utility functions provided by jQuery

// $.each() - Iterate over arrays and objects:
var fruits = ['apple', 'banana', 'orange'];
$.each(fruits, function (index, fruit) {
    console.log(index + ': ' + fruit);
});

var person = { name: 'John', age: 30, city: 'New York' };
$.each(person, function (key, value) {
    console.log(key + ': ' + value);
});

// $.map() - Transform arrays:
var numbers = [1, 2, 3, 4, 5];
var doubled = $.map(numbers, function (num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter with $.map():
var evenNumbers = $.map(numbers, function (num) {
    return num % 2 === 0 ? num : null;
});

// $.extend() - Merge objects:
var defaults = {
    color: 'blue',
    size: 'medium',
    visible: true
};

var options = {
    color: 'red',
    animation: true
};

var settings = $.extend({}, defaults, options);
// Result: {color: 'red', size: 'medium', visible: true, animation: true}

// Deep extend:
var obj1 = {
    prop1: {
        subprop1: 'value1',
        subprop2: 'value2'
    }
};

var obj2 = {
    prop1: {
        subprop1: 'newvalue1',
        subprop3: 'value3'
    }
};

var merged = $.extend(true, {}, obj1, obj2); // Deep merge

// $.grep() - Filter arrays:
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = $.grep(numbers, function (num) {
    return num % 2 === 0;
});

// $.inArray() - Find element in array:
var fruits = ['apple', 'banana', 'orange'];
var index = $.inArray('banana', fruits); // Returns 1
var notFound = $.inArray('grape', fruits); // Returns -1

// $.makeArray() - Convert array-like objects to arrays:
var nodeList = document.querySelectorAll('p');
var array = $.makeArray(nodeList);

// $.merge() - Merge arrays:
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var merged = $.merge(array1, array2); // array1 becomes [1, 2, 3, 4, 5, 6]

// $.unique() - Remove duplicate elements (for DOM elements):
var elements = $('.item').get().concat($('.special').get());







// ------------------------------------------------------------------- ::
// DOCUMENT READY VS WINDOW LOAD
// Understanding the difference between DOM ready and window load events

// Document Ready:
// - Fires when DOM is fully constructed
// - CSS, images, and other resources may still be loading
// - Faster execution
// - Most common for DOM manipulation
$(document).ready(function () {
    console.log('DOM is ready - can manipulate elements');
    // DOM elements are available
    // CSS may not be fully applied
    // Images may not be loaded
});

// Alternative syntax for document ready:
$(function () {
    console.log('Short syntax for document ready');
});

// Window Load:
// - Fires when ALL resources are fully loaded
// - Including images, stylesheets, scripts, iframes
// - Slower execution but everything is guaranteed to be ready
$(window).on('load', function () {
    console.log('Everything is fully loaded');
    // All images are loaded
    // All stylesheets are applied
    // All scripts are executed
});

// Comparison example:
$(document).ready(function () {
    console.log('Document ready at:', new Date().toISOString());

    // This might not work correctly if CSS isn't loaded:
    var height = $('#myElement').height(); // May return 0 or incorrect value

    // This works fine:
    $('#myButton').on('click', function () {
        console.log('Button clicked');
    });
});

$(window).on('load', function () {
    console.log('Window loaded at:', new Date().toISOString());

    // This works correctly:
    var height = $('#myElement').height(); // Correct value

    // Calculate layout-dependent positions:
    var positions = $('.gallery-item').map(function () {
        return $(this).position();
    }).get();
});

// When to use which:

// Use Document Ready for:
// - Event binding
// - DOM manipulation
// - Basic initialization
// - Most jQuery operations

// Use Window Load for:
// - Image dimensions/positions
// - Layout calculations
// - Operations dependent on external resources
// - Performance measurements

// Practical examples:

// Image gallery initialization:
$(document).ready(function () {
    // Set up event handlers early
    $('.gallery-thumbnail').on('click', function () {
        showLightbox($(this).data('full-image'));
    });
});

$(window).on('load', function () {
    // Calculate positions after images are loaded
    positionGalleryThumbnails();
    initMasonry();
});

// Performance measurement:
var domReadyTime, windowLoadTime;

$(document).ready(function () {
    domReadyTime = Date.now();
    console.log('DOM ready time recorded');
});

$(window).on('load', function () {
    windowLoadTime = Date.now();
    console.log('Window load time:', windowLoadTime - domReadyTime, 'ms after DOM ready');
});







// ------------------------------------------------------------------- ::
// PERFORMANCE TIPS (MINIMIZING DOM QUERIES)
// Best practices for optimizing jQuery performance

// 1. CACHE JQUERY OBJECTS
// Bad - Multiple queries for same element:
$('#myElement').addClass('active');
$('#myElement').css('color', 'red');
$('#myElement').fadeIn();

// Good - Cache the jQuery object:
var $myElement = $('#myElement');
$myElement.addClass('active');
$myElement.css('color', 'red');
$myElement.fadeIn();

// Better - Use chaining:
$('#myElement').addClass('active').css('color', 'red').fadeIn();

// 2. USE SPECIFIC SELECTORS
// Bad - Too broad:
$('div').addClass('highlight');

// Good - More specific:
$('#container div.content').addClass('highlight');

// Better - Use IDs when possible:
$('#specificDiv').addClass('highlight');

// 3. MINIMIZE DOM MANIPULATION
// Bad - Multiple DOM operations:
for (var i = 0; i < 100; i++) {
    $('#list').append('<li>Item ' + i + '</li>');
}

// Good - Batch operations:
var html = '';
for (var i = 0; i < 100; i++) {
    html += '<li>Item ' + i + '</li>';
}
$('#list').html(html);

// Better - Use DocumentFragment or jQuery building:
var $items = $();
for (var i = 0; i < 100; i++) {
    $items = $items.add('<li>Item ' + i + '</li>');
}
$('#list').append($items);

// 4. DEBOUNCE EXPENSIVE OPERATIONS
function debounce(func, wait) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            func.apply(context, args);
        }, wait);
    };
}

// Debounced search:
$('#searchInput').on('input', debounce(function () {
    performSearch($(this).val());
}, 300));

// 5. USE EVENT DELEGATION FOR DYNAMIC CONTENT
// Bad - Rebinding events for new elements:
function addNewItem() {
    var $newItem = $('<div class="item">New Item</div>');
    $('#container').append($newItem);
    $newItem.on('click', itemClickHandler); // Need to bind to new element
}

// Good - Event delegation:
$('#container').on('click', '.item', itemClickHandler);

function addNewItem() {
    $('#container').append('<div class="item">New Item</div>');
    // No need to bind events - delegation handles it
}

// 6. OPTIMIZE LOOPS WITH JQUERY OBJECTS
// Bad - Creating jQuery object in each iteration:
$('.items').each(function () {
    $(this).addClass('processed'); // $(this) created each time
});

// Good - Cache jQuery object:
$('.items').each(function () {
    var $this = $(this);
    $this.addClass('processed');
    // Use $this for multiple operations
});

// 7. USE CSS FOR STYLING WHEN POSSIBLE
// Bad - Individual style changes:
$('.highlight').css('background-color', 'yellow');
$('.highlight').css('border', '2px solid red');
$('.highlight').css('padding', '10px');

// Good - CSS class:
// CSS: .highlighted { background-color: yellow; border: 2px solid red; padding: 10px; }
$('.highlight').addClass('highlighted');

// 8. OPTIMIZE SELECTORS
// Performance order (fastest to slowest):
$('#id')                    // ID selector - fastest
$('.class')                 // Class selector
$('tag')                    // Tag selector
$('[attribute]')            // Attribute selector
$(':pseudo')                // Pseudo selector - slowest

// Use context for better performance:
$('.item', '#container')    // Search within context
$('#container').find('.item') // Same as above, often faster

// 9. AVOID UNIVERSAL SELECTORS
// Bad - Too broad:
$('*').hide();

// Good - Specific:
$('#content *').hide();

// Better - Even more specific:
$('#content .hideable').hide();

// 10. PERFORMANCE MEASUREMENT
function measurePerformance(name, func) {
    var start = performance.now();
    func();
    var end = performance.now();
    console.log(name + ' took ' + (end - start) + ' milliseconds');
}

// Usage:
measurePerformance('DOM Query', function () {
    $('.complex-selector').addClass('test');
});

// 11. PRACTICAL PERFORMANCE EXAMPLES

// Efficient table operations:
function optimizeTable() {
    var $table = $('#dataTable');
    var $tbody = $table.find('tbody');

    // Detach during manipulation for better performance
    var $detached = $tbody.detach();

    // Perform operations on detached element
    $detached.find('tr:even').addClass('even-row');
    $detached.find('tr:odd').addClass('odd-row');

    // Reattach to DOM
    $table.append($detached);
}

// Efficient form processing:
function processLargeForm($form) {
    var data = {};

    // Single query to get all form elements
    var $fields = $form.find('input, select, textarea');

    // Process without additional DOM queries
    $fields.each(function () {
        var $field = $(this); // Cache jQuery object
        var name = $field.attr('name');
        var value = $field.val();

        if (name) {
            data[name] = value;
        }
    });

    return data;
}







// ------------------------------------------------------------------- ::
// MIGRATING FROM JQUERY TO VANILLA JS
// Modern alternatives to common jQuery patterns

// SELECTORS
// jQuery:
$('#myId')
$('.myClass')
$('div')

// Vanilla JS:
document.getElementById('myId')
document.getElementsByClassName('myClass')
document.querySelectorAll('div')
document.querySelector('#myId') // Single element

// EVENT HANDLING
// jQuery:
$('#button').on('click', function () {
    console.log('Clicked');
});

// Vanilla JS:
document.getElementById('button').addEventListener('click', function () {
    console.log('Clicked');
});

// EVENT DELEGATION
// jQuery:
$(document).on('click', '.dynamic-button', handler);

// Vanilla JS:
document.addEventListener('click', function (e) {
    if (e.target.matches('.dynamic-button')) {
        handler.call(e.target, e);
    }
});

// DOM MANIPULATION
// jQuery:
$('#element').text('New text');
$('#element').html('<span>New HTML</span>');
$('#element').addClass('active');
$('#element').removeClass('old');
$('#element').toggleClass('visible');

// Vanilla JS:
const element = document.getElementById('element');
element.textContent = 'New text';
element.innerHTML = '<span>New HTML</span>';
element.classList.add('active');
element.classList.remove('old');
element.classList.toggle('visible');

// ATTRIBUTES
// jQuery:
$('#element').attr('data-id', '123');
var dataId = $('#element').attr('data-id');

// Vanilla JS:
const element = document.getElementById('element');
element.setAttribute('data-id', '123');
const dataId = element.getAttribute('data-id');

// CSS STYLES
// jQuery:
$('#element').css('color', 'red');
$('#element').css({
    'color': 'red',
    'font-size': '16px'
});

// Vanilla JS:
const element = document.getElementById('element');
element.style.color = 'red';
Object.assign(element.style, {
    color: 'red',
    fontSize: '16px'
});

// AJAX REQUESTS
// jQuery:
$.ajax({
    url: '/api/data',
    method: 'GET',
    success: function (data) {
        console.log(data);
    }
});

// Vanilla JS (modern):
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));

// DOCUMENT READY
// jQuery:
$(document).ready(function () {
    // DOM is ready
});

// Vanilla JS:
document.addEventListener('DOMContentLoaded', function () {
    // DOM is ready
});

// Or for modern browsers:
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init(); // DOM already loaded
}

// ANIMATIONS
// jQuery:
$('#element').fadeIn();
$('#element').slideUp();

// Vanilla JS (CSS Transitions + JS):
const element = document.getElementById('element');

// Fade in:
element.style.opacity = '0';
element.style.transition = 'opacity 0.3s';
setTimeout(() => element.style.opacity = '1', 10);

// Slide up (requires CSS):
element.style.height = element.offsetHeight + 'px';
element.style.transition = 'height 0.3s';
setTimeout(() => element.style.height = '0px', 10);

// UTILITY FUNCTIONS - MODERN ALTERNATIVES

// jQuery $.each():
$.each(array, function (index, item) {
    console.log(index, item);
});

// Modern JS:
array.forEach((item, index) => {
    console.log(index, item);
});

// jQuery $.map():
var doubled = $.map(numbers, function (num) {
    return num * 2;
});

// Modern JS:
const doubled = numbers.map(num => num * 2);

// jQuery $.extend():
var merged = $.extend({}, obj1, obj2);

// Modern JS:
const merged = { ...obj1, ...obj2 }; // Spread operator
// Or: const merged = Object.assign({}, obj1, obj2);

// MIGRATION STRATEGY
// 1. Gradual migration - replace one component at a time
// 2. Create helper functions to bridge the gap:

const $ = {
    // Simple jQuery-like selector function
    select: (selector) => {
        const elements = document.querySelectorAll(selector);
        return elements.length === 1 ? elements[0] : Array.from(elements);
    },

    // Event handling helper
    on: (selector, event, handler) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.addEventListener(event, handler));
    },

    // AJAX helper
    get: (url) => {
        return fetch(url).then(response => response.json());
    }
};

// Usage:
$.on('.button', 'click', function () {
    console.log('Clicked');
});
