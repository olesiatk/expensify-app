
// PERSON

const person = {
    // name: 'Andrew',
    age: 26,
    location: {
        town: 'Philadelphia',
        temp: 92,
    }
}

const {name: firstName = 'Anonymous', age} = person
console.log(`${firstName} is ${age}`)

const {town, temp: temperature} = person.location

if (town && temperature) {
    console.log(`It is ${temperature} in ${town}`)
}

// BOOK

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    },
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// ADRESS

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvanis', '199147']

const [, city, state = 'New Yourk'] = address

console.log(`You are in ${city} ${state}.`)

// PRICE

const item = ['Coffe (hot)', '$2.00', '2.50', '$2.75']
const [itemName, ,mediumPrice] = item

console.log(`A medium ${itemName} cost ${mediumPrice}`)