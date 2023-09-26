let person = {
    name: 'João',
    age: 30,
    weight: 88.8
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}