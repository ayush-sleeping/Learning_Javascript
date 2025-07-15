// Switch - Conditional Statement :

console.clear()

// Switch is like a replacement of "if","else-if"
// if we have to handle 10 statement or more than that, 
// then we have to write 10 times "if","else-if",
// That's where "Switch" comes to save time and lines of code

var currentDay = "Thu"

// Lets first use : if, else-if 
if (currentDay === 'Mon') {
    console.log('Timings: 10:00-06:00')
} else if (currentDay === 'Tue') {
    console.log('Timings: 09:00-05:00')
} else if (currentDay === 'Wed') {
    console.log('Timings: 11:00-05:00')
} else if (currentDay === 'Thu') {
    console.log('Timings: 08:00-07:00')
} else if (currentDay === 'Fri') {
    console.log('Timings: 07:00-6:00')
} else if (currentDay === 'Sat') {
    console.log('Timings: 06:00-06:00')
} else if (currentDay === 'Sun') {
    console.log('Timings: 05:00-05:00')
}

// Now lets use : "Switch"

switch (currentDay) {
    case 'Mon':
        console.log('Timings: 10:00-06:00')
        break;
    case 'Tue':
        console.log('Timings: 11:00-06:00')
        break;
    case 'Wed':
        console.log('Timings: 01:00-06:00')
        break;
    case 'Thu':
        console.log('Timings: 12:00-06:00')
        break;
    case 'Fri':
        console.log('Timings: 01:00-06:00')
        break;
    case 'Sat':
        console.log('Timings: 02:00-06:00')
        break;

}