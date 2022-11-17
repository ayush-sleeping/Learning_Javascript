/* More action in Array 
( Like Adding, Removing iems at a specific location, Catenation and Sorting) */

console.clear()

var Friends = ['Ayush', 'Shivam', 'Ashish', 'Rahul', 'Prathmesh']
Friends.splice(3, 0, 'Donna', 'Rachel')

/*
1st tells where to start
2nd tells how many items to be deleted
3rd and 4th and so on tells what iems to be added
 */

console.log(Friends)


Friends.splice(0, 0, 'Harvey')
console.log(Friends)

// Delete item at Spcific Position
Friends.splice(2, 1)
console.log(Friends)

Friends.splice(0, 2)
console.log(Friends)

// Concatenation
var OfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paula']
var AllFriends = Friends.concat(OfficeFriends)

console.log(AllFriends)

// Sorting Ascending and Decending

AllFriends.sort()
console.log(AllFriends)

AllFriends.reverse()
console.log(AllFriends)
