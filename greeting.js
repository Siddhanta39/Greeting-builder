function formatName(firstname, lastname)
{
return(firstname + " " + lastname);
}

function getGreeting(timeofday)
{
    return("Good morning")
}

function createGreeting(firstname, lastname, timeofday)
{
    const greeting=getGreeting(timeofday);
    const name= formatName(firstname, lastname);
    return(greeting + ", " + name);
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));