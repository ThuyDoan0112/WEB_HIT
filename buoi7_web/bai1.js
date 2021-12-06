const str = 'tranduong';
const str1 = 'hitclubhiuhiu';
const str2 = 'aabb';
const count = (str) => {
    str.split('');
    let map = {};
    for (const item of str) map[item] = map.hasOwnProperty(item) ? ++map[item] : 1;
    for(let i in str){
        if(map[str[i]] == 1)
            return i;
    }
    return -1;
};

console.log(count(str));
console.log(count(str1));
console.log(count(str2));

