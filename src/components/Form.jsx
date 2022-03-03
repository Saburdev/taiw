import React,{ useState } from 'react'
import { StyleSheetContext } from 'styled-components'

export const Form = ({list,setList}) => {

    const [value,setValue] = useState('')
    const [text,setText]=useState('')

    function submitHandler(event){
        event.preventDefault()
        let obj ={
            input:value,
            text:text
        }
        setList([...list,obj])
        setValue('')
    }

  return (
        <form className=' bg-gray-400 w-80 h-96 rounded-lg
         flex justify-center items-center  flex-col gap-4'  onSubmit={(event) => submitHandler(event)}>
            <input className='rounded-lg' type="text" value ={value}  onChange={(event) => setValue(event.target.value)}/>
            <textarea className='rounded-lg' value={text} onChange={(event) => StyleSheetContext(event.target.value)}></textarea>
            <button className='bg-white p-2 rounded-lg' >Send</button>
        </form>
  )
}
