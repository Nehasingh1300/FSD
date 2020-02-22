// this helps in accessing the value pointed in the particular class

var employee = {
  id: 1,
  greet:function(){
    console.log(this.id);
  }
};
employee.greet();
