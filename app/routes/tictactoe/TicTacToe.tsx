import React, { useState } from 'react'
import {victory} from "./victory"

const TicTacToe = () => {
  const[grid,setGrid] = useState(["","","",
                                  "","","",
                                  "","","",]);
                                  
  const[turn,setTurn] = useState("X");   
  const[header,setHeader] = useState("X's turn");                           
             
  function handleClick(index : number): void {
    if(header == "X wins !" || header == "O wins !") return;
    if ( grid[index] != "" ) return;
    let temp = [...grid];
    temp[index] = turn;
    setGrid(temp);
    let newturn = turn == "X" ? "O" : "X";
    setHeader(`${newturn}'s turn`);
    setTurn(newturn);
    let winner = victory(temp);
    if ( winner == "X") setHeader("X wins !");
    else if ( winner == "O") setHeader("O wins !")
  }

  function reset() {
    setGrid(["","","","","","","","","",]);
    setTurn("X");
    setHeader("X's turn")
  }

  return (
    <div className='bg-slate-800 min-h-screen flex justify-center items-center'>
        <div className='game flex flex-col justify-center items-center'>
          <div className='text-5xl mb-6 text-red-400'>{header}</div>
          <div className='grid grid-cols-3 grid-rows-3 border-amber-300 border-2 w-100 h-100'>
            {
              grid.map((item,key)=>(
                <div key={key}className='border-3 border-amber-300 flex justify-center items-center text-7xl text-white cursor-pointer'
                onClick={()=>handleClick(key)}> 
                    <p className={`transition-all duration-300 transform ${item ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>
                      {item}
                    </p> 
                </div>
              ))
            }
          </div>
          <button className='text-5xl mt-6 text-red-400 cursor-pointer' 
          onClick = {()=>reset()} >Reset</button> : <></> 
        </div>
    </div>
  )
}

export default TicTacToe