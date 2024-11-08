import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContex'
import { Link } from 'react-router-dom';
import Home from './Home';
function Input() {
    const { options, setOptions, callresponse,} =
      useContext(GlobalContext);

      const handleinput =(e)=>{
setOptions(e.target.value)
      }

      const handlesend=()=>{
        callresponse()
      }
  return (
    <>
      <Home />
      <div className="h-[100vh] bg-black flex items-center justify-center">
        <div className="h-[50vh] sm:h-[70vh] flex-col gradient w-[90%] sm:w-[70vw] flex items-center justify-center  ">
          <p className="text-[20px] sm:text-[30px] font-[600]">
            Welcome To Tech Road Map
          </p>
          <p className="text-[20px] text-center sm:text-[30px] font-[600]">
            What Carrer in tech do you want to Search?
          </p>
          <div className="flex p-4  ">
            <div className="w-[18rem]  sm:w-[30rem] h-[4rem]  relative ">
              <input
                id="search"
                type="text"
                autoComplete="off"
                value={options}
                onChange={handleinput}
                className="absolute forminput top-0 left-0 w-[100%] h-[100%] rounded-s-lg text-white  border border-black outline-none bg-black p-[10px] bg-none
            "
              />
              <label
                className="text-blue-500 w-[100px] text-[20px] text-center  absolute left-[2rem] top-[25%]  cursor-text transition "
                htmlFor="search"
              >
                search
              </label>
            </div>

            <Link to="/flowchartDisplay">
              <button
                className="bg-blue-400  h-[4rem] rounded-r-lg sm:text-[20px] w-[110px] sm:w-[150px]"
                onClick={handlesend}
              >
                Genarate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Input
