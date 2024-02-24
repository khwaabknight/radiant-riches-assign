import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Input from './Body/Common/Input'

const navlinks = [
    {
        id:1,
        title:"Categories",
        path:"/categories",
    },
    {
        id:2,
        title:"Website Builders",
        path:"/website-builders",
    },
    {
        id:3,
        title:"Today's deals",
        path:"/todays-deals",
    }
]

const Navbar = () => {

    const [search, setSearch] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

  return (
    <div className='navcontainer'>
        <div className='navbar'>
            <form className='search-wrapper' onSubmit={() => {}}>
                <Input type="text" name="navbar-search" id="navbar-search" onChange={onChange} value={search}/>
                <button type='submit' className='searchicon'>
                    <img src="/images/navbar/navbar-searchicon.png" alt="search" />
                </button>
            </form>
            <div className='navlinks'>
                {
                    navlinks.map((item) => (
                        <NavLink key={item.id} to={item.path} className={`navlink ${"navlink"+item.id}`}>{item.title}</NavLink>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Navbar