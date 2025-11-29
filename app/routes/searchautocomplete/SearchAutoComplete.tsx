import React, { useEffect, useState } from 'react'

interface user {
  firstName: string;
}


const SearchAutoComplete = () => {

  const[loading, setLoading] = useState<Boolean>(false);
  const[input,setInput] = useState("");
  const [data, setData] = useState<string[]>([]);


  function handleChange(e : any ) {
    setInput(e.target.value);
  }

  useEffect(
    ()=>{ 
      async function search( keyword : string ) {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/users/search?q=${keyword}&limit=5`);
        const data = await res.json();
        setData(data.users.map((u: any) => u.firstName));
        setLoading(false);
      }
      input.trim() != "" ? search(input) : setData([]);  
    },[input]
  )


  function handleClick(name : string): void {
    setInput(name);
  }

  return (
    <div className='flex flex-col items-center'>
      <input className='p-2 border mt-4' value={input} onChange={(e)=>handleChange(e)} ></input>
      <div className='flex flex-col  items-center min-h-screen'>
        { loading ? <h1> Loading .. </h1> : data && data.map((user) => (
        <p onClick = {()=> handleClick(user)}
          key={user}
          className='cursor-pointer'> {user} 
          </p>
        )) }
      </div>
    </div>
  )
}

export default SearchAutoComplete
