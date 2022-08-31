import { Roundto5,Roundto10 } from "./rounding.js";
const solve_pt1 =(a,b)=>{
    if(a===0){
        if(b!=0){
            return "PT vô số nghiệm";
        }
        else{
            return "PT vô nghiệm";
        }
    }
    else{
        return -b/a;
    }
}
const solve_pt2 =(a,b,c)=>{
    if(a==0) return solve_pt1(b,c);
    else{
        const delta=b*b-4*a*c;
        if(delta<0) return "PT vô nghiệm";
        else if(delta==0) return -b/(2*a);
        else return [(-b+Math.sqrt(delta))/(2*a),(-b-Math.sqrt(delta))/(2*a)];
    }
}
const solve_pt3 =(a,b,c,d)=>{
    //we will solve the equation of the form ax^3+bx^2+cx+d=0
    if(a==0) return solve_pt2(b,c,d);
    else{
        const delta= b*b-3*a*c;
        const sq_delta=Math.sqrt(Math.abs(delta));
        if(delta==0){
            const result=(-b+Math.cbrt(b*b*b-27*a*a*d))/(3*a);
            return [result];
        }
        const k=(9*a*b*c-2*b*b*b-27*a*a*d)/(2*Math.pow(Math.sqrt(Math.abs(delta)),3));
        if(delta>0){
            if(Math.abs(k)<=1){
                const cos =Math.cos(Math.acos(k)/3)
                const x1=(2*sq_delta*cos-b)/(3*a);
                const x2 =(2*sq_delta*Math.cos(Math.acos(k)/3+2*Math.PI/3)-b)/(3*a);
                const x3 =(2*sq_delta*Math.cos(Math.acos(k)/3-2*Math.PI/3)-b)/(3*a);
                return [x1,x2,x3];

            }
            else{
                const x=((sq_delta*Math.abs(k))/(3*a*k))*(Math.cbrt(Math.abs(k)+Math.sqrt(k*k-1))+Math.cbrt(Math.abs(k)-Math.sqrt(k*k-1)))-b/(3*a);
                return [x];
            }
        }
        if(delta<0){
            const test =(Math.cbrt(k+Math.sqrt(k*k+1))+Math.cbrt(k-Math.sqrt(k*k+1)))
            const x=(sq_delta)/(3*a)*(Math.cbrt(Math.abs(k)+Math.sqrt(k*k+1))+Math.cbrt(Math.abs(k)-Math.sqrt(k*k+1)))-b/(3*a);
            return [x];
        }
    }
}
const solve_pt4 =(_a,_b,_c,_d,_e)=>{
    //we will solve the equation of the form ax^4+bx^3+cx^2+dx+e=0
    if(_a==0) return solve_pt3(_b,_c,_d,_e);
    const a=_b/_a;
    const b=_c/_a;
    const c=_d/_a;
    const d=_e/_a;
    let i1=16-a*a/4+b
    let i2=4*d-8*c
    let i3=c*c-4*b*d+a*a*d
    const y=Roundto5(solve_pt3(1,-b,(a*c-4*d),(c*c-4*b*d+a*a*d))[0]);
    //console.log(y);               16,75          -24          13
    const A=Math.sqrt(Roundto5(a*a/4-b+y));
    const B=Math.sqrt(Roundto5(y*y/4-d));
    var nghiem1=solve_pt2(1,a/2-A,y/2-B);
    var nghiem2=solve_pt2(1,a/2+A,y/2+B);

    return [nghiem1,nghiem2];
}
answer=solve_pt4(1,1,1,1,-4);
console.log(answer);