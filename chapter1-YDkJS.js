const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.9;
const ACCESSORY_PRYCE = 9.99;

var bankBalance = 303.91;
var amount = 0;

function calculateTax(amount){
	return amount * TAX_RATE;
}

function formatAmount(amount){
	return "$" + amount.toFixed( 2 );
}

// keep buying phones while you still have money

while (amount < bankBalance){
	// buy a new phone!
	amount = amount + PHONE_PRICE;

	// can we afford the accessory?
	if(amount < SPENDING_THRESHOLD){
		amount = amount + ACCESSORY_PRYCE;
	}
}

// don't forget to pay the government, too
amount = amount + calculateTax( amount );

console.log(
	"Your pourchase is " + formatAmount(amount)
	);

// can you actually afford this purchase?
if(amount < bankBalance){
	console.log(
		"You can by everything"
		);
}