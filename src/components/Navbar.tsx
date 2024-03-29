import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Input from './Body/Common/Input/Input';

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
    const [menuActive, setMenuActive] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

  return (
    <div className='navcontainer'>
        <div className='navbar'>
            <div className='mobile-nav'>
                <button
                    className='menu-btn'
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <img src={menuActive ? "images/navbar/cross.svg" : "/images/navbar/menu.svg"} alt='' className={`menu-icon`}/>
                </button>
                <form className='search-wrapper' onSubmit={() => {}}>
                    <Input type="text" name="navbar-search" id="navbar-search" onChange={onChange} value={search}/>
                    <button type='submit' className='searchicon'>
                        <img src="/images/navbar/navbar-searchicon.png" alt="search" />
                    </button>
                </form>
            </div>
            <div className={`navlinks ${menuActive && 'menu-active'}`}>
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