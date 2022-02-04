function isShouted(name) {
    return name === name.toUpperCase();
}

function shoutedGreeting(name) {
    return `HELLO ${name}!`;
}

function normalGreeting(name) {
    return `Hello, ${name}.`;
}

function multipleNames(name) {
    if(Array.isArray(name)) {
        if (name.length === 2) {
            return `${name[0]} and ${name[1]}`
        }

        name = name.map((item, index) => {
            return index !== name.length - 1 ? `${item},` : `and ${item}`
        })

        return name.join(' ')
    }
    return name;
}

function greeting(name = "my friend") {

    name = multipleNames(name);


    return isShouted(name) ? shoutedGreeting(name) : normalGreeting(name);
}

module.exports = greeting
