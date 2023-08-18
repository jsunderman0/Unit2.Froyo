const order = prompt("Please list the flavors that each person wants in your party");
console.log(order);
const orderArr = order.split(",");
console.log(orderArr);

//figure out how to make a new object out of the array and count the unique keys 

const stats = { };

for(let i = 0; i < orderArr.length; i++){
    const flavor = orderArr[i];
    if(stats[flavor] === undefined){
        stats[flavor] = 0;
    }
    stats[flavor] = stats[flavor] +1;

};

console.log(stats);





