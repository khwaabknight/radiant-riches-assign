import React, { useState } from 'react'
import Input from './Common/Input/Input'
import Button from './Common/Button/Button'

const SignUp = () => {
  const [signup, setSignup] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignup(e.target.value)
  }

  return (
    <div className='signup'>
      <div className='signup-tag'>
        <p>
          Sign up and get exclusive special deals
        </p>
      </div>
      <form onSubmit={() => {}} className='signup-form'>
        <Input name='signup' id='signup' onChange={onChange} className='signup-input' value={signup}/>
        <Button className='signup-btn'>
          Sign Up
        </Button>
      </form>
    </div>

  )
}

export default SignUp