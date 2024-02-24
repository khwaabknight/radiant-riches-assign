import React from 'react'
import './input.scss'

type InputProps = {
    type?: string
    name: string
    id: string
    value: string
    className?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({type,name,id,className,onChange,value}) => {
  return (
    <input type={type || "text"} name={name} id={id} className={className || 'inputbox'} onChange={onChange} value={value}/>
  )
}

export default Input