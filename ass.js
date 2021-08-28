let studentInfo = {
    firstName: "Ademola",
    lastName: "Moshood",
    studentClass: "ss 1",
    age: 13,
    parentName: "Moshood",
    state: "Lagos",

    GetAge: function GetAge()
    {
        return `${this.age}`;   
    },

    GetFullName: function GetFullName() 
    {
        return `${this.firstName} ${this.lastName}`;
    }

};


console.log(studentInfo.GetAge());

console.log(studentInfo.GetFullName());



function integer() 
{
    return (5);
}
if(integer() % 2 == 0 )
{
    console.log(`${integer()} is an even number`);
}
else
{
    console.log(`${integer()} is an odd number`);
}

function GetPrime(numb) 
{
    if(numb < 2)
    {
        return false;
    }
    for(var i = 2; i < 2; i++)
    {
        if(i % numb == 0)
        {
            return false;
        }
    }
    return true;
}
console.log(GetPrime(15));
