const date = new Date()
const greeting = name => `Hello, ${name}`

export default function(argument) {
    console.log(date, greeting(argument))
}

export {date, greeting}