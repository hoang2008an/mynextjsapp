//import { Roundto5,Round_to10 } from "./rounding.js";
//import {Roundto5,Round_to10} from "./rounding";
function counting(array,number){
    let count = 0;
    array.forEach((value)=>{
        if(number==value){
            count++;
        }
    })
    return count;
}
function findDuplicates(array,numberofdupes){
    let result=[];
    for (let i=0;i<numberofdupes;i++){
        result[i]={"number":Math.max}
        for(let j=0;j<array.length;i++){
            for(let k=j+1;k<array.length;k++){
                if (array[j]==array[k]){
                    if(i==1) if(result[0]["number"]==array[j]) continue;

                    result[i]={"number":array[j],"count":counting(array,array[j])};


                }
            }
        }
    }
    return result;
}
function containsDuplicates(array) {
    return array.length !== new Set(array).size;


}
const Roundto5 =(x)=>{
    return Math.round(x*100000)/100000;
}
const Round_to10=(x)=>{
    return Math.round(x*10000000000)/10000000000;
}


const solve_pt1 =(a,b)=>{
    if(a===0){

        if(b!==0){
            return [[],"PT vô số nghiệm"];
        }
        else{
            return [[],"PT vô nghiệm"];
        }
    }
    else{
        return [[-b/a]];
    }
}
const solve_pt2 =(a,b,c)=>{
    if(a===0) return solve_pt1(b,c);
    else{
        const delta=b*b-4*a*c;
        if(delta<0) return [[],"PT vô nghiệm"];
        else if(delta===0) return [[-b/(2*a)],"PT có nghiệm kép"];
        else return [[(-b+Math.sqrt(delta))/(2*a),(-b-Math.sqrt(delta))/(2*a)]];
    }
}
const solve_pt3 =(a,b,c,d)=>{
    //we will solve the equation of the form ax^3+bx^2+cx+d=0
    if(a===0) return solve_pt2(b,c,d);
    else{
        const delta= b*b-3*a*c;
        const sq_delta=Math.sqrt(Math.abs(delta));
        if(delta===0){
            const result=(-b+Math.cbrt(b*b*b-27*a*a*d))/(3*a);
            return [[result]];
        }
        const k=(9*a*b*c-2*b*b*b-27*a*a*d)/(2*Math.pow(Math.sqrt(Math.abs(delta)),3));
        if(delta>0){
            if(Math.abs(k)<=1){
                const cos =Math.cos(Math.acos(k)/3)
                const x1=(2*sq_delta*cos-b)/(3*a);
                const x2 =(2*sq_delta*Math.cos(Math.acos(k)/3+2*Math.PI/3)-b)/(3*a);
                const x3 =(2*sq_delta*Math.cos(Math.acos(k)/3-2*Math.PI/3)-b)/(3*a);
                return [[x1,x2,x3]];

            }
            else{
                const x=((sq_delta*Math.abs(k))/(3*a*k))*(Math.cbrt(Math.abs(k)+Math.sqrt(k*k-1))+Math.cbrt(Math.abs(k)-Math.sqrt(k*k-1)))-b/(3*a);
                return [[x]];
            }
        }
        if(delta<0){
            //const test =(Math.cbrt(k+Math.sqrt(k*k+1))+Math.cbrt(k-Math.sqrt(k*k+1)))
            const x=(sq_delta)/(3*a)*(Math.cbrt(k+Math.sqrt(k*k+1))+Math.cbrt(k-Math.sqrt(k*k+1)))-b/(3*a);
            //const test1=(sq_delta)/(3*a)*(Math.cbrt(k+Math.sqrt(k*k+1))+Math.cbrt(k-Math.sqrt(k*k+1)));
            //test1=test1;
            return [[x]];
        }
    }
}
const solve_pt4 =(_a,_b,_c,_d,_e)=>{
    //we will solve the equation of the form ax^4+bx^3+cx^2+dx+e=0
    if(_a===0) return solve_pt3(_b,_c,_d,_e);
    const a=_b/_a;
    const b=_c/_a;
    const c=_d/_a;
    const d=_e/_a;

    const y=Round_to10(solve_pt3(1,-b,(a*c-4*d),-(c*c-4*b*d+a*a*d))[0][0]);



  
    const A=Math.sqrt(Round_to10(a*a/4-b+y));
    let B=Math.sqrt(Round_to10(y*y/4-d));
    if(a*y/2-c<0){
        B=B*-1;
    }
    let nghiem1=solve_pt2(1,a/2-A,y/2-B)[0];
    let nghiem2=solve_pt2(1,a/2+A,y/2+B)[0];

    return nghiem1.concat(nghiem2);
}
function process_data(a){
    let state="";
    if(typeof a!== "object" ) return "Lỗi . Vui lòng thử lại"
    let result="";
    if (a.length===0){
        return "PT vô nghiệm"
    }

    if (containsDuplicates(a) === false) {
        result = `PT có ${a.length} nghiệm phân biệt`
    }
    else{
        result=`PT có ${new Set(a)}.size} nghiệm `
        let numberofdup=a.length-new Set(a).size
        if(numberofdup==2){
            result +=`trong đó có: 2 nghiệm kép là`
        }
        if(numberofdup==1){
                result+="là: "
            new Set(a).forEach((value)=>{
                result+=`${value},  `
            })
            result+="và "
        }
        let data=findDuplicates(a,numberofdup);
    for(let i=1;i<=numberofdupe;i++){
            number=data[i]["number"];
            dupetime=data[i]["dupetime"];
            if(dupetime==2){
                state=` nghiệm kép`
            }
            else{
                state=` nghiệm bội`;
            }
            if(numberofdupe==2){
                if(i==2) result+=` và `;
                result+=`{{number}}`;
            }
            if(numberofdupe==1){
                result+=`1 ${state} là ${number}`
            }

    }
    }

    return result;
}
//let answer=solve_pt3(1,2,3,4);
//module.exports={solve_pt1,solve_pt2,solve_pt3,solve_pt4};
let answer=solve_pt4(1,1,1,1,-4);
console.log(process_data([1,1,1,1]));
console.log(answer);