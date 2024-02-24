import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id:1,
    title:"Tools",
    link:"#"
  },
  {
    id:2,
    title:"AWS Builder",
    link:"#"
  },
  {
    id:3,
    title:"Start Build",
    link:"#"
  },
  {
    id:4,
    title:"Build Supplies",
    link:"#"
  },
  {
    id:5,
    title:"Tooling",
    link:"#"
  },
  {
    id:6,
    title:"Blue Hosting",
    link:"#"
  },
]

const Services = () => {
  return (
    <div className='services'>
      {
        services.map((service) => (
        <Link to={service.link}>{service.title}</Link>
        ))
      }

    </div>
  )
}

export default Services