//declaring a constant variable
const Args = process.argv.slice(2);

if (Args.length === 0)
{
	console.log("No argument");
}
else if (Args.length === 1)
{
	console.log("Argument found");
}
else if (Args.length > 1)
{
	console.log("Arguments found");
}
