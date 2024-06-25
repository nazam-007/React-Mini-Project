import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <h1 className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-2 text-3xl font-medium">color of display is {color}</h1>
    
      <div className="fixed flex flex-wrap justify-center bottom-40 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
                    <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>
                      red
                    </button>
                    <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>
                      Green
                    </button>
                    <button onClick={()=>{setColor("Blue")}}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>
                      Blue
                    </button>
                    <button onClick={()=>{setColor("pink")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>
                      Pink
                    </button>
                    <button onClick={()=>{setColor("Yellow")}} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>
                      Yellow
                    </button>
                    <button onClick={()=>{setColor("Black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>
                      Black
                    </button>
                    <button onClick={()=>{setColor("Indigo")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"indigo"}}>
                      Indigo
                    </button>
                    <button onClick={()=>{setColor("white")}}className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}}>
                      white
                    </button>
                    <button onClick={()=>{setColor("lime")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lime"}}>
                      Lime
                    </button>
                    <button onClick={()=>{setColor("purple")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>
                      Purple
                    </button>
                    
              </div>
      </div>



    </div>
  )
}

export default App
