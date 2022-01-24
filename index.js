// Your code here

class Polygon{
    constructor(array){
        this.array = array
    }
    
    get countSides(){
        let sideNum = 0;
        sideNum = this.array.length
        return sideNum
    }

    get perimeter(){
        let sum = 0;
        for(let side in this.array){
            sum += this.array[side]
        }
        return sum
    }
}

class Triangle extends Polygon{

    get isValid(){
        let firstSum = this.array[0] + this.array[1]
        if (firstSum > this.array[2]){
            firstSum = this.array[0] + this.array[2]
        if(firstSum > this.array[1]){
            firstSum = this.array[1] + this.array[2]
            if(firstSum > this.array[0]){
                return true
            }
        }
        }
        return false
    }
}

class Square extends Polygon {
    get isValid(){
        let side1 = this.array[0];
        for(let side in this.array){
            if(this.array[side] !== side1){
                return false
            }else {
                side1 = this.array[side]
            }
            
        }
        return true
    }

    get area(){
        let area;
        area = this.array[0] * this.array[1]
        return area
    }
}