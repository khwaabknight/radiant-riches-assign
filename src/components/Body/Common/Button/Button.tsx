import React from 'react'
import './button.scss'

type ButtonProps = {
    children: React.ReactNode
    className ?: string
}

const Button:React.FC<ButtonProps> = ({children,className}) => {
  return (
    <button type='submit' className={className || 'btn'}>{children}</button>
  )
}

export default Button