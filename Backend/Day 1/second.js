console.log("Hello ji kaise ho");

function sum(a, b) {
    console.log(a+b);
}

function sub(a, b) {
    console.log(a-b);
    
}

// console.log(module.exports);

// module.exports = sum;

// module.exports = {sum, sub};

module.exports.sum = sum;
module.exports.sub = sub;