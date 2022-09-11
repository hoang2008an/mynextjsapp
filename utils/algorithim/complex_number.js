class complex_number{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    add(other){
        return new complex_number(this.real + other.real, this.imaginary + other.imaginary);
    }
    subtract(other){
        return new complex_number(this.real - other.real, this.imaginary - other.imaginary);
    }
    multiply(other){
        return new complex_number(this.real * other.real - this.imaginary * other.imaginary, this.real * other.imaginary + this.imaginary * other.real);
    }
    divide(other){
        return new complex_number((this.real * other.real + this.imaginary * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary), (this.imaginary * other.real - this.real * other.imaginary) / (other.real * other.real + other.imaginary * other.imaginary));
    }
    toString(){
        return this.real + " + " + this.imaginary + "i";
    }
    sqrt(level){
        
        let abs=Math.sqrt(this.real*this.real+this.imaginary*this.imaginary);
        let angle=Math.atan(this.imaginary/this.real);
        let sqrt_abs=Math.pow(abs,1/level);
        let sqrt_angle=angle/level;
        for (let i=0;i<level;i++){
            let real=sqrt_abs*Math.cos(sqrt_angle);
            let imaginary=sqrt_abs*Math.sin(sqrt_angle);
            sqrt_angle+=2*Math.PI/level;

        }
        let sqrt_real=sqrt_abs*Math.cos(sqrt_angle);
        let sqrt_imaginary=sqrt_abs*Math.sin(sqrt_angle);
        return new complex_number(sqrt_real,sqrt_imaginary);
    }
    to_trigonometry(){
        real=this.real;
        imaginary=this.imaginary;
        let abs=Math.sqrt(real*real+imaginary*imaginary);
        let angle=Math.atan(imaginary/real);
        return [abs,angle];
    }
}
function add_complex(a,b){
    return a.add(b);
}
function subtract_complex(a,b){
    return a.subtract(b);
}
function multiply_complex(a,b){
    return a.multiply(b);
}
function divide_complex(a,b){
    return a.divide(b);
}