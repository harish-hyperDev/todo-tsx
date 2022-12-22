import React from 'react'

function SearchBar() {
  return (
    <div className=''>
      <input className='border border-black hover:shadow-[0_0_5px] transition-shadow duration-500 outline-none opacity-1 px-2 py-2 rounded-full  text-xl' 
        type='input' 
        placeholder='Watchu wanna do?' 
      />      
      <button className='absolute py-0.5 mt-2 -ml-10 px-1 rounded-full transition-all duration-500 bg-black text-white  text-base hover:bg-white hover:text-black hover: border hover: border-black hover:duration-300 shadow-[0_0_3px] shadow-black ' 
        type="submit"
      >
        Go
      </button>


    </div>
  )
}

export default SearchBar


