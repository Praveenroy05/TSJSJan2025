// public class MyClass {}
//let colour = "White"
class CarClass{

    colour = "Blue"
    constructor(model, year, color){
        this.model = model // this.model = Toyota
        this.year = year // this.year = 2023
        this.color = color //this.color = "Red"
    }

    getDetails(){
         const wheel = 4
        console.log("model : "+ this.model, "Year : "+ this.year, "color :" +this.colour, "wheel :" +wheel);
    }

    static price = "$10000"

    static start(){
        console.log("Car is starting");
    }

    stop(){
        console.log("Car is stopping");
    }
}
module.exports = {CarClass};

const carClass = new CarClass("Toyota", 2023, "Red")
carClass.getDetails()
carClass.stop()
console.log(carClass.colour);

console.log(CarClass.price)
CarClass.start()

//carClass.start()

