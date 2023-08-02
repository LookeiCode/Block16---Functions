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

// Multiple Function Solution

const totalPriceWithSub = (totalPrice, hasSub) => {
    if (hasSub) {
        return totalPrice * 0.75;
    }

    return totalPrice;
}

const totalPriceWithCoupon = (totalPrice, hasCoupon) => {
    if (hasCoupon) {
        return totalPrice - 10;
    }

    return totalPrice;
}

const PricePerPerscrip = (customer) => {

    let totalPrice = customer.pricePerRefill * customer.refills;

    totalPrice = totalPriceWithSub(totalPrice, customer.subscription);

    totalPrice = totalPriceWithCoupon(totalPrice, customer.coupon);

    return totalPrice;
}
console.log(`Your grand total is ${PricePerPerscrip(rocky)}`);