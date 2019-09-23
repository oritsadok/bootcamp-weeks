/*const person = {
  username: "Felicia",
  introduce: function(){
    console.log("Hi I'm "+ this.username)
  }
}

person.introduce() //prints "Hi, I'm Felicia"
*/
/*
const person = {
  username: "Felicia",
  introduce: function(){
    console.log("Hi, I'm " + username)
  }
}

person.introduce() //throws an error
*/
//ככה גם לא נוכל לכתוב כי לא הגדרנו את הפונקציה בגלובל סקופ




/*const counter = {
  count: 0,

  updateCounter: function () {
    this.count += 1;
  }
};

counter.updateCounter();
counter.updateCounter();
counter.updateCounter();

alert(counter.count);
// במקרה הזה הזיס מחליף לנו את הקאונטר בעצם
*/



/*const cat = {
  makeNoise: function () {
    alert(this.noise);
  },
  noise: "Meow!"
};

const dog = {
  makeNoise: cat.makeNoise,
  noise: "Woof!"
};

cat.makeNoise(); //meow!
dog.makeNoise(); // woof!
*/
//When cat.makeNoise( ) is called, this.noise is the same thing as cat.noise 

//Then, when dog.makeNoise( ) is called, this changes because it refers to the object that called the function - the dog object that called the makeNoise function. 

//Now it refers to dog instead of cat, therefore this.noise is the same as dog.noise



/*const makeNoiseFunction = function () {
  alert(this.noise);
}

const cat = {
  makeNoise: makeNoiseFunction,
  noise: "Meow!"
};

const dog = {
  makeNoise: makeNoiseFunction,
  noise: "Woof!"
};

cat.makeNoise();
dog.makeNoise();
*/
//דרך אחרת כדי לכתוב את הדוגמא שמעל










