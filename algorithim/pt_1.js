class PT{
    solve_pt1 =(a,b)=>{
        if (a==0) return "PT vô nghiệm";
        return -b/a;
      }
    solve_pt2 =(a,b,c)=>{
        if (a==0) return this.solve_pt1(b,c);
        let delta = b*b-4*a*c;
        if (delta<0) return "PT vô nghiệm";
        if (delta==0) return -b/(2*a);
        return [(-b+Math.sqrt(delta))/(2*a),(-b-Math.sqrt(delta))/(2*a)];
      }
      solve_pt3 =(a,b,c,d)=>{
        if (a==0) return this.solve_pt2(b,c,d);
        let delta = c*c-3*a*b;
        let delta0 = 2*c*c*c-9*a*b*c+27*a*a*d;
        if (delta<0) return "PT vô nghiệm";
        if (delta==0) return -b/(3*a);
        if (delta0==0) return "PT có nghiệm kép";
        let x1 = (-c+Math.sqrt(delta))/(3*a);
        let x2 = (-c-Math.sqrt(delta))/(3*a);
        return [x1,x2];
      }
    }
console.log(PT.solve_pt3(1,-1,1,-1));
module.exports = PT;
