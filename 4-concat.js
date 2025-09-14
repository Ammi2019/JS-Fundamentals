//declaring a constant variable
const Args = process.argv.slice(2);

if (Args.length === 2)
{
	console.log(Args[0] + " "  + "is"+ " " + Args[1]);
}
else if (Args.length === 1)
{
	console.log(Args[0] + " " + "is" + " "+undefined );
}
else if (Args.length === 0)
{
	console.log(undefined + " " +  "is" + " " + undefined);
}
