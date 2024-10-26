import { useState } from "react"


function App() {
  const [color, setColor ] =  useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 "
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center 
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            onClick={() => setColor("white")}
            className="rounded-full shadow-lg outline-null text-black  py-1 gap-3 px-4"
            style={{backgroundColor: "white"}}
            >white</button>
            <button 
            onClick={() => setColor("red")}
            className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button
            onClick={() => setColor("orange")}
            className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "orange"}}
            >Orange</button>
            <button
            onClick={() => setColor("green")}
            className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "green"}}
            >green</button>
            <button 
            onClick={() => setColor("yellow")}
            className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button 
            onClick={() => setColor("blue")}
            className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button
            onClick={() => setColor("pink")}
            className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "pink"}}
            >Pink</button>
            <button
            onClick={() => setColor("grey")}
             className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "grey"}}
            >Grey</button>
              <button
              onClick={() => setColor("black")}
              className="rounded-full shadow-lg outline-null text-white  py-1 gap-3 px-4"
            style={{backgroundColor: "black"}}
            >Black</button>
            
          </div>
        </div>
      </div>
        
    </>
  )
}

export default App
