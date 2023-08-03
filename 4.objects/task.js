// Домашнее задание к занятию 4 «Объекты»
// 1.Сохранение базовых свойств:

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  };

// 2.Установка предмета: 

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };

// 3.Добавление группы оценок:

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks);
    };
  };

// 4.Вычисление среднего балла:

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length != 0) {
        const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length
    } else {
        return 0;
    };
 };

// 5.В случае отчисления студента:

  Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  };

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}