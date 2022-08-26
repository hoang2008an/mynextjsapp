class PT{
    sqrt(number,level){
      if(level%2==0){
        if(number<0){
          return NaN;
        }
      start=0;
      end=number+1;
      result=(end+start)/2;
      while(Math.abs(result*result-number)>0.00001){
        if(result*result>number){
          end=result;
        }
        else{
          start=result;
        }
        result=(end+start)/2;
      }	
      
    }
  solve_pt1(a,b){
        if (a==0) return "PT vô nghiệm";
        return -b/a;
      }
    solve_pt2(a,b,c){
        if (a==0) return this.solve_pt1(b,c);
        let delta = b*b-4*a*c;
        if (delta<0) return "PT vô nghiệm";
        if (delta==0) return -b/(2*a);
        return [(-b+Math.sqrt(delta))/(2*a),(-b-Math.sqrt(delta))/(2*a)];
      };
      solve_pt3(a,b,c,d){
        if (a==0) return this.solve_pt2(b,c,d);
        let delta = b*b-3*a*c;
        let k=(9*a*b*c-2*b*b*b-27*a*a*d)/(2*sqrt);
      };
    }
  
}
i=PT.sqrt(4,2);
module.exports = PT;
