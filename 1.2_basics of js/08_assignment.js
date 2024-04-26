// Create a counter in js (counts down from 30 to 0)

// let counter = 30;

// for(let i = 0 ; i <=30 ; i++ )
// {
//     console.log(counter--);
// }


// Calculate the time it takes between a setTimeout call and the inner function actually running

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
let counter = 1;
let Transaction = [{
    id:1,
    timestamp : counter++,
    category : 'food',
    itemName : 'Pizza',
    totalSpent : 225
}, {
    id:2,
    timestamp : counter++,
    category : 'drink',
    itemName : 'sprite',
    totalSpent : 25
    
}, {
    id:3,
    timestamp : counter++,
    category : 'drink',
    itemName : 'sting',
    totalSpent : 20
} , {
    id:4,
    timestamp : counter++,
    category : 'food',
    itemName : 'samosha',
    totalSpent : 25
}
]

function calculateTotalSpentByCategory(transactions) {
    let totalSpent = [];
    for(let i = 0 ; i < transactions.length ; i++)
    {
        totalSpent

    }
    return [];
  }