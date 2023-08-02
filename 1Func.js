// OBJECTS

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// FUNCTIONS

// 1 Function Solution
const PricePerPerscript = (customer) => {
    let totalPrice = customer.pricePerRefill * customer.refills;

    if (customer.subscription) {
        totalPrice = totalPrice * 0.75
    }

    if (customer.coupon) {
        totalPrice = totalPrice - 10;
    }

    return totalPrice;
}
console.log(PricePerPerscript(rocky));