import React from 'react'
import './select.scss'

type SelectProps = {
  optionList: string[]
}

const Select:React.FC<SelectProps> = ({optionList}) => {
  return (
    <>
      <select className='dropdown-select'>
        {
          optionList.map((option, index) => (<option key={index} value={option}>{option}</option>))
        }
        
      </select>
      <img src='/images/body/down.svg' alt='down' className='dropdown-arrow'/>
    </>
  )
}

export default Select