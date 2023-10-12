import React from 'react'
import { useSelector } from 'react-redux'

const Categoriesroute = () => {
    const {categoriesList} = useSelector((store) => store.categories)
  return (
    <>

    {
        categoriesList.map((single) => {
      <Route exact path={`/${single.category_name}`} element={<Productsscreen/>} />
  
        })
      }
    </>
  )
}

export default Categoriesroute