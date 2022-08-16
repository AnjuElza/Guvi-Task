//--------------------------------------QUESTION 1----------------------------------
//Class Movie

class Movie {
    constructor(title, studio, rating="PG") {
    
     this.title = title;
     this.studio = studio;
     this.rating = rating;
    }

    static getPG(arr) {
    let pgArray = arr.filter((movie) => movie.rating == "PG");
        return pgArray;
    }
}

let Movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let Movie2= new Movie("The Batman", "Warner Bros");
let Movie3= new Movie("Minions", "Universal Pictures", "G");
let Movie4= new Movie("Infinite", "Paramount");
let Movie5= new Movie("Wonder", "Lionsgate", "PG");

console.log(Movie.getPG([Movie1, Movie2, Movie3, Movie4, Movie5]));


/*---output---------

Day6_oopsTask.js:24 (3) [Movie, Movie, Movie]
0: Movie {title: 'The Batman', studio: 'Warner Bros', rating: 'PG'}
1: Movie {title: 'Infinite', studio: 'Paramount', rating: 'PG'}
2: Movie {title: 'Wonder', studio: 'Lionsgate', rating: 'PG'}
length: 3
[[Prototype]]: Array(0)
*/

//-----------------------------------------------------QUESTION2------------------------------
//CIRCLE CLASS

class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(rad) {
        this.radius = rad;
    }
    getColor() {
        return this.color;
    }
    setColor(col) {
        this.color = col;
    }
    toString(){
        return `Radius : ${this.radius}, Color : ${this.color}`;
    }

    toString(){
    return `Radius : ${this.radius}, Color : ${this.color}`;
    }
    getArea(){
        return Math.PI * Math.pow(this.radius, this.radius);
    }
    getCircumference(){
        return Math.PI * 2*this.radius;
    }


}

let circle1 = new Circle();
let circle2 = new Circle(7);
let circle3 = new Circle(1, "red") ;

//------------------------------------------------------------------------------------------------
//------------------------------QUESTION 3-------------------------
//Person class

class Person{
    constructor(name, age,place,job,food){
        this.name = name;
        this.age = age;
        this.place = place;
        this.job = job;
        this.food = food;
        }
        eat(){
            console.log(`I am : ${this.food}`);
        }

}
let person1= new Person("John", 30,"Delhi","Doctor","vegetarian");

//------------------------------------------------------------------------------------------------
//------------------------------QUESTION 4--------------------------------------------------------
//class to calculate uber price

class UberPriceCalculator{
    constructor(minimumPrice,distance,surgeMultiplier,ratePerKM){
        this.minimumPrice = minimumPrice;
        this.distance = distance;
        this.surgeMultiplier = surgeMultiplier;
        this.ratePerKM = ratePerKM;
        }
        calculatePrice(){
            Price=(this.minimumPrice+ (this.distance*this.ratePerKM))* this.surgeMultiplier
            console.log(`Uber price is: ${Price}`);

        }
}