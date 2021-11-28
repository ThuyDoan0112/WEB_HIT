const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 17, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 16, gender: "male", money: 500 },
  ];
  function deleteByID(){
      let id = 2;
      for(let i=0;i<users.length;i++){
          if(users[i].id == id)
             users.splice(i,1);
      }
  }
  function updateByID(){
    let id = 3;
    for(let i=0;i<users.length;i++){
        if(users[i].id == id)
           users[i] = {id: 3, name: "Dinh A", age: 24, gender: "male", money: 1050 };
    }
 }
function cnt(){
    let cnt=cnt1=0;
    for(let i=0;i<users.length;i++){
        if(users[i].age > 15 ){
            if(users[i].gender == 'male') cnt++;
            else cnt1++;
        }
    }
    console.log("Amount male: " + cnt);
    console.log("Amount female: " + cnt1);
}
cnt(users);
function minMax(){
    let min = max= users[0].money;
    for(let i=0;i<users.length;i++){
        if(users[i].money<min)
           min = users[i].money;
        if(users[i].money>max)
            max = users[i].money;
    }
    for(let i=0;i<users.length;i++){
        if(users[i].money==min)
            console.log("Người nghèo nhất: " + users[i].name);
        if(users[i].money==max)
            console.log("Người giau nhất: " + users[i].name);
    }
}
function sum(){
    let sum = 0;
   for(let i=0;i<users.length;i++){
       if(users[i].id%2==0)
          sum += users[i].money;
   }
   return sum;
}
function gender(){
    for(let i=0;i<users.length;i++){
        users[i].gender = 'female';
    }
}
deleteByID(users)
console.log(users);
updateByID(users);
console.log(users);



minMax(users);
console.log("tổng tiền những người có ID chẵn: " + sum(users));
gender(users);
console.log(users);