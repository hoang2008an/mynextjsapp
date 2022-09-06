const Roundto5 =(x)=>{
    return Math.round(x*100000)/100000;
}
const Roundto10 =(x)=>{
    return Math.round(x*10000000000)/10000000000;
}
//module.export={Roundto5,Roundto10};
module.exports={Roundto5,Roundto10};