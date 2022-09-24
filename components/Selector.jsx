export default function Selector({_value,setoption}) {

    return(
       <ul className=" justify-center mt-20 text-center">
           {_value.map((value,key)=>(
           <li key={key} className={"inline-block"}>
            <button className="px-10  list-none border-x-2 hover:border-b-2 hover:border-b-pink-600" key={key} onClick={()=> setoption(value)}>
                {value}
            </button>
           </li>
           ))}
       </ul>
   )
}