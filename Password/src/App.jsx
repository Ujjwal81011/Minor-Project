import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordref = useRef(null)

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) {str += "0123456789"}
    if (char) {str += "!@#$%^&*_+=[]{}~`"} 

    for (let i = 1; i <= length; i++) {
      let create = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(create)
    }
    setPassword(pass)

  }, [length, number, char, setPassword])

  const Clipboard = useCallback(() => {
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGen()
  }, [length, number, char, passwordGen])

  return (
    <>
    <div className='w-full max-w-md mx-auto mb-3 shadow-md rounded-lg sm:px-2 md:px-4 lg:px-8 my-8 text-orange-500 bg- bg-gray-800'>
        <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'> 
          <input type="text" value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordref}/>
          <button 
          onClick={Clipboard}
          className='bg-blue-700 text-white py-1 px-3'>
          Copy</button>
        </div>

      <div className='flex text-sm gap-x-1 space-x-1'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6} max={25} value={length} className='cursor-pointer' 
          onChange={(e) => {setLength(e.target.value)
          }}/>
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {number}
          id='numberinput'
          onChange={() => {
          setNumber((prev) => !prev);
          }}/>
          <label htmlFor="numberinput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked = {char}
          id='charinput'
          onChange={() => {
          setChar((prev) => !prev);
          }}/>
          <label htmlFor="charinput">Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
