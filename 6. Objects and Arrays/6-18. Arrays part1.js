// Arrays & CRUD Operation in Javascript :

console.clear()

var Friends = ['Ayush', 'Shivam', 'Ashish', 'Rahul', 'Prathmesh']

console.log(Friends)
console.log(typeof(Friends))
console.log(Friends[2])
console.log(Friends[0])


// Update a value
Friends[0] = 'Ahaan'
console.log(Friends)

// Add more Items:
Friends[5] = 'Dhanush'
console.log(Friends)

Friends[10] = 'kkjda'
console.log(Friends)

Friends[Friends.length]='Rob'
console.log(Friends)

Friends.push('Jack')
console.log(Friends)

// Delete a value
var Name = Friends.pop()
console.log(Name)
console.log(Friends)
var Name = Friends.pop()
console.log(Name)
console.log(Friends)
var Name = Friends.pop()
console.log(Name)
console.log(Friends)
var Name = Friends.pop()
console.log(Name)
console.log(Friends)
var Name = Friends.pop()
console.log(Name)
console.log(Friends)