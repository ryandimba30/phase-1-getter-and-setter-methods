// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius * 2; // diameter of the circle is twice as large as the radius
    }
    set diameter(d){
        return this.radius = d/2; 
    }
    get circumference () { 
        return this.diameter * Math.PI; // circumference of the circle is diameter multiplied by the PI
    }
    set circumference (value){
        return this.radius = (value / Math.PI)/2; 
    }
    get area () {
        return Math.PI * this.radius ** 2
    }
    set area (area) {
        return this.radius = Math.sqrt(area / Math.PI); 
    }
}