let case0 = "  hOang Bui   ";
let case1 = " hOang     BUI hOang   ";
let case2 = "23traN  dUong23   ";
function chuanHoa(str){
    let kq = "",i;
    let tmp;
    for( i = 0;i<str.length;i++){
        while(str.charAt(i)>= '0' && str.charAt(i)<='9'){
            str = str.replace(str.charAt(i),"");
        }
    }
    let arr = str.split(" ");
    for(i=0;i<arr.length;i++){
        tmp = arr[i].trim().toLowerCase();
        if(tmp !=""){
            tmp = tmp.substring(0,1).toUpperCase() +  tmp.substring(1);
            kq += tmp + " ";
        }
    }
    return kq;
}
console.log(chuanHoa(case0));
console.log(chuanHoa(case1));
console.log(chuanHoa(case2));