// Домашнее задание к лекции 5 «Классы»
// Задача №1:

// 1.Создайте базовый класс PrintEditionItem со свойствами

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    fix() {
      this.state = this.state * 1.5;
    }
  
    get state() {
      return this._state;
    }
  }

  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
   );
   
   console.log(sherlock.releaseDate); //2019
   console.log(sherlock.state); //100
   sherlock.fix();
   console.log(sherlock.state); //100

// 2.Создайте класс Magazine

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

// 3.Создайте класс Book

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

// 4.Создайте классы, которые наследуются от класса Book: NovelBook — для романов, FantasticBook — для фантастических произведений и DetectiveBook — для детективов

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);;
		this.type = "novel"
	}

}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}

}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}

}

// Задача №2
// Создайте класс Library со свойствами и методами:

class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    
    addBook(book) {
        if (book.state > 30) {
          this.books.push(book);
        }
      }

    findBookBy(type, value) {
        let book = this.books.find((item) => item[type] === value);
        if (book) {
          return book;
        } else {
          return null;
        }
      }
      
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].name === bookName) {
            return this.books.splice(i, 1)[0];
          }
        }
        return null;
      }
} 

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Домашнее задание к лекции 5 «Классы». Дополнительное задание*

class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (this.marks.hasOwnProperty(subject)) {
          this.marks[subject].push(mark);
        } else {
          this.marks[subject] = [];
          this.marks[subject].push(mark);
        }
      }
    }
  
    getAverageBySubject(subject) {
      if (this.marks.hasOwnProperty(subject)) {
        let result = this.marks[subject].reduce((sum, current) => sum + current, 0);
        return result / this.marks[subject].length;
      } else {
        return 0;
      }
    }
  
    getAverage() {
      let subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      } else {
        let sum = 0;
  
        for (let i = 0; i < subjects.length; i++) {
          sum += this.getAverageBySubject(subjects[i]);
        }
  
        return sum / subjects.length;
      }
    }
  }