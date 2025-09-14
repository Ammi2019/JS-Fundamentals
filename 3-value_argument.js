const Args = process.argv.slice(2);

if (Args[0] === undefined)
{
console.log("No argument");
}
else if(Args[1] === undefined)
{
console.log(Args[0]);
}
