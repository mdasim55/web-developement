// This Keyword      ---------->>>>>
const student= {
    fullName:"Mahammad Asim",
    id: 22273030182,
    printId:function() {
        console.log("Id= ",this.id);           // this.id = student.id
    },
};

// _ _Proto Keywords_ _ ------------>>>>>>
const employee= {
    calTax() {
        console.log("Tax rate is 10%");
    }
}
const newEmployee =  {
    salary:50000,
    id:5124,
    calTax() {
        console.log("Tax rate is 20%");
    } 
}
newEmployee.__proto__=employee;