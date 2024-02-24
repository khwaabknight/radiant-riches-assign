
import React from 'react'
import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    title: 'WixPro 72-Inch Responsive Website Builder-',
    description:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
    imgcaption:"Builder 1",
    highlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
    bestChoice:true,
    rating:9.8,
    remark:'Exceptional',
    stars:5,
  },
  {
    id: 2,
    title: 'SiteCraft 68-Inch Ultimate Web Design Studio-',
    description:'Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
    imgcaption:"Builder 1",
    highlights:'[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
    bestValue:true,
    rating:9.5,
    remark:'Excellent',
    stars:4.5,
  },
  {
    id: 3,
    title: 'WixPro 72-Inch Responsive Website Builder-',
    description:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
    imgcaption:"Builder 1",
    highlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
    rating:9.3,
    remark:'Exceptional',
    stars:4,
  },
  {
    id: 4,
    title: 'CDK Resposive Builder:',
    description:'An extensive library of widgets and apps, and detailed step-by-step guides',
    imgcaption:"CDK",
    discount: "26% Off",
    highlights:[
      {
        id:41,
        highlight:"Building Responsive",
        number:9.9
      },
      {
        id:42,
        highlight:"Cool",
        number:8.9
      },
      {
        id:43,
        highlight:"Docs",
        number:8.9
      }
    ],
    advantages:[
      "Documentation",
      "Easy Use",
      "Out Of Box",
    ],
    rating:9.1,
    remark:'Good',
    stars:4,
  }
]

const Products = () => {
  return (
    <div className='products'>
      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            imgcaption={product.imgcaption}
            highlights={product.highlights}
            bestChoice={product.bestChoice}
            bestValue={product.bestValue}
            rating={product.rating}
            remark={product.remark}
            stars={product.stars }
            discount={product.discount || null}
            advantages={product.advantages || null}
          />
        ))
      }
    </div>
  )
}

export default Products