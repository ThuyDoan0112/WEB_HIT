const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const result = textEmail.match(/(m[\w]+@[\w]+.com)|(t[a-z]+@[a-z]+.com)/);
console.log(result);
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
const resulf1 = textPhone.match(/[\+]?\d{10}|\(\d{3}\)\s?-\d{6}/img);
console.log(resulf1);