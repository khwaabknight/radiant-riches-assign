import React from 'react'
import { Link } from 'react-router-dom'

type FooterColumnProps = {
    title: string,
    links: {id:number, name:string, url:string}[]
}

const FooterColumn:React.FC<FooterColumnProps> = ({title,links}) => {
  return (
    <div className='footer-column'>
        <h4>{title}</h4>
        <ul>
            {links.map((link) => (
                <li key={link.id}>
                    <Link to={link.url}>{link.name}</Link>
                </li>
            ))}
        </ul>                
    </div>
  )
}

export default FooterColumn