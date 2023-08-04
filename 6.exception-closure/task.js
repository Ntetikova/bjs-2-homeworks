// Домашнее задание к лекции «Обработка исключений и замыкания»
// 1.Задача №1:

function parseCount(value) {
    const parseValue = Number.parseFloat(value);
    if (isNaN(parseValue)) {
       throw new Error("Невалидное значение");
    }
       return parseValue;
  }
  
function validateCount(value) {
    try {
       return parseCount(value);
    } catch (error) {
        return error;
    }
}

  // 2.Задача №2:

class Triangle {
    constructor(a, b, c) {
      if (a + b < c
         || b + c < a
         || c + a < b) {
            throw new Error("Треугольник с такими сторонами не существует");
      }
         this.a = a;
         this.b = b;
         this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }
}
  
function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        },
      };
    }
}
