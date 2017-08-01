export default class Employee {

  
  constructor(id, name, phone, title){
    this.id= id;
    this.name=name;
    this.phone=phone;
    this.title=title;
  }
  
updateName(str){
    this.name = name;
  }

updatePhone(str){
  this.phone = phone;
}

updateTitle(str){
  this.title = title;
}

}