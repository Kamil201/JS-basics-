function Student (FirstName, LastName){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.grades = {}
}

const firstStudent = new Student ('Jan', 'Nowak')
const secondStudent = new Student ('Anna', 'Lewandowska')

Student.prototype.addGrade = function (subject, value ){
    if(typeof this.grades[subject] === "undefined"){
        this.grades[subject] = []
    }
    this.grades[subject].push(value)
}

firstStudent.addGrade('math', 5)
secondStudent.addGrade('biology', 4)
console.log(firstStudent, secondStudent)