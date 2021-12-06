const set = (digits) =>{
    let set = "";
    digits.forEach(item => {
        set += item.toString();
    });
    let number = parseInt(set);
    number += 1;
    set = number.toString();
    let array = [];
    for(let i of set){
        array.push(parseInt(i));
    }
    return array;
}
const digits = [1, 2, 3];
console.log(set(digits));
const digits1 = [0];
console.log(set(digits1));
const digits2 = [9];
console.log(set(digits2));