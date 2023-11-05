import { useState } from 'react'
import './App.css'
import { ProductTable } from './ProductTable'
import {Search} from './Search'

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
]

function App() {
  const [showStock, setShowStock] = useState(false)
  const [search, setSearch] = useState("")
  console.log(showStock)
  console.log(search)
  const visibleProducts = PRODUCTS.filter(product =>{
    if (showStock && !product.stocked) {
      console.log(showStock)
      return false
    }

    if (search && !product.name.includes(search)) {
      console.log(search)
      return false
    }

    return true
  })


  return(
    <>
      <Search 
        showStockOnly={showStock}
        onStockOnlyChange={setShowStock}
        search={search}
        setSearch={(setSearch)}

        place="Search..."
        id="stocked"
        label="Only show products in stock"
      />
      <ProductTable products={visibleProducts}/>
    </>
  ) 
}

export default App
