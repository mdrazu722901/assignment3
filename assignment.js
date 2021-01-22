// https://github.com/mdrazu722901/assignment3


// =============================================strat-main-code-strat=======================================================//
//=============================================================================================================//



//=====================================kilometerTOMeter-convert-start=======================================//

function kilometerToMeter(kilometer) {
    var result = kilometer * 1000;
    return result;
}

var meter = kilometerToMeter(7.8);
console.log(meter);


//========================================kilometerToMeter-convert-end======================================//

//==================================================== budgetCalculator-start===========================================//

function budgetCalculator(laptop, clock, phone) {
    var laptop1 = laptop * 500;
    var clock1 = clock * 50;
    var phone1 = phone * 100;
    var total = laptop1 + clock1 + phone1;
    return total;

}

var result = budgetCalculator(2, 2, 2);
console.log(result);

//===================================================budgetCalculator-end==================================================//




//==================================hotelCost-start==========================================//


function hotelCost(n) {
    var taka = 0;
    if (n <= 10) {
        taka = n * 100;
    } else if (n <= 20) {
        var fastTime = 10 * 100;
        var afterDays = n - 10;
        var secondTime = afterDays * 80;
        taka = fastTime + secondTime;
    } else {
        var fastTime = 10 * 100;
        var secondTime = 10 * 80;
        var afterDays = n - 20;
        var thirdTime = afterDays * 50;
        taka = fastTime + secondTime + thirdTime;
    }
    return taka;
}

var countDays = hotelCost(30);
console.log(countDays);


//================================hotelCost-end================================================//

// =================================megaFriend-code-start===================================//

function megaFriend(array) {
    var longest = array.reduce(function(a, b) {
        return (a.length > b.length) ? a : b;
    });
    return longest;
}

var array = ["raju", "rakibhossen", "you", "kamal hosseen", "sakib"];
var resutl = megaFriend(array);
console.log(resutl);



//==========================================megaFriend-code-end=================================//



// =============================================-main-code-end=======================================================//
//=============================================================================================================//