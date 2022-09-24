import {useForm} from "react-hook-form";

export default function Setter({num_param, setoption: setpara}) {
    let param=['a','b','c','d','e'];
    param=param.filter((value,key)=>key<num_param);


    function setData(data) {

        let arr=[];
        const keys = Object.keys(data);
        keys.forEach((key,index) => {
            if(index<num_param)     arr.push(data[key]);
        })
        //data.map((value,key)=>(
          //  arr.push(value)
        //))
        setpara(arr);
    }
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    return (
        <form className= " place-items-center justify-center" onSubmit={handleSubmit((data) => setData(data))}>
            <div className="text-center">
            {param.map((value, key)=>(
                <div key={key+key} className={"inline-block"}>
                    <div key={key} className=" flex-col flex text-center mt-20  w-40 ">
                        <label className="text-center" key={key}>{value}</label>
                        <input placeholder={value} className="first:border-l-2 last:border-r-2 border-x-black px-10 flex-row  border-x hover:border-b hover:border-b-pink-600" {...register(value)} />
                    </div>
                </div>
                ))}
            </div>
            <div className="flex justify-center">
            <input type="submit" className="grid place-items-center bg-pink-600 text-white px-10 py-2 rounded-lg hover:bg-pink-700 p-6 m-4" value={"Giải"} />
             <input type={"reset"} className="grid place-items-center bg-pink-600 text-white px-10 py-2 rounded-lg hover:bg-pink-700 p-6 m-4" value={"Nhập lại"} onClick={()=>{setpara([])}} />
            </div>

                </form>


    )
}