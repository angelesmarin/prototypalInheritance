//Prototypal Inheritance
//Activity function
function Activity(amount) {
    this.amount = amount;
}

//setAmount function
Activity.prototype.setAmount = function(value) {
    if (value <= 0) {
        return false;
    };
    this.amount = value;
    return true;
};

//getAmount function
Activity.prototype.getAmount = function() {
    return this.amount;
}

//Payment function
Payment.prototype = Object.create(Activity.prototype);
/*  establish a prototype chain and enable prototypal inheritance
    between Payment and Activity 

    a new object is created for the prototype of Payment
*/

//getReceiver function
Payment.prototype.getReceiver = function(value) {
    this.receiver = value;
    // new value will be assigned 
};

//setReceiver function
Payment.prototype.setReceiver = function () {
    return this.receiver;
}

//Refund function 
Refund.prototype = Object.create(Activity.prototype);

//setSender function
Refund.prototype.setSender = function (value) {
    this.sender = value;
}

//getSender function
Refund.prototype.getSender = function () {
    return this.sender;
}

