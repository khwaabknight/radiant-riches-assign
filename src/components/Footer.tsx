import React from 'react'
import FooterColumn from './Footer/FooterColumn'
import Select from './Body/Common/SelectInput/Select';

const selectOptions = ["United States","India", "United Kingdom", "Canada"];

const footerLinks = [
  {
    id:1,
    title:"Categories",
    links:[
      {id:11, name:"Web Builder", url:"/web-builder"},
      {id:12, name:"Hosting", url:"/hosting"},
      {id:13, name:"Data Center", url:"/data-center"},
      {id:14, name:"Robotic-Automation", url:"/robotic-automation"},
    ]
  },
  {
    id:2,
    title:"Contact",
    links:[
      {id:21, name:"Contact", url:"/contact"},
      {id:22, name:"Privacy Policy", url:"/privacy-policy"},
      {id:23, name:"Terms Of Service", url:"/terms-of-service"},
      {id:24, name:"Categories", url:"/categories"},
      {id:25, name:"About", url:"/about"},
    ]
  },
]


const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-container'>
        <div className='footer-left'>
          {
            footerLinks.map((footerLink) => (
              <FooterColumn key={footerLink.id} title={footerLink.title} links={footerLink.links} />
            ))
          }
        </div>
        <div className='footer-right'>
          {/* Country Select */}
          <div className='country-select'>
            <Select optionList={selectOptions}/>
          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer