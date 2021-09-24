// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce(function(accumulator, element){
            return element + accumulator
        })
    }
}

class Triangle extends Polygon{
    get isValid(){
        const s1 = this.sides[0];
        const s2 = this.sides[1];
        const s3 = this.sides[2];
        if (s1 + s2 < s3) {
            return false
        } else if (s1 + s3 < s2) {
            return false
        } else if (s2 + s3 < s1) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon{
    get isValid(){
            const s1 = this.sides[0];
            const s2 = this.sides[1];
            const s3 = this.sides[2];
            const s4 = this.sides[3];
            if (s1 != s2) {
                return false
            } else if (s1 != s3) {
                return false
            } else if (s1 != s4) {
                return false
            } else {
                return true
            }
    }  
    
    get area(){
        const s1 = this.sides[0];
        const s2 = this.sides[1]; 
        return s1 * s2
    }
}

