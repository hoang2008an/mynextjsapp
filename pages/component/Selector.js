export default function Selector({_value,setoption}) {

    return(
       <ul className="flex justify-center mt-20">
           {_value.map((value,key)=>(
           <li >
            <button className="px-10 flex-row list-none border-x-2 hover:border-b-2 hover:border-b-pink-600" key={key} onClick={()=> setoption(value)}>
                {value}
            </button>
           </li>
           ))}
       </ul>
   )
}