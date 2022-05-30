import "./App.css"
import React, { useState, useEffect } from "react"
import Product from "./components/Product"

function App() {
  const dataUrl = "https://fakestoreapi.com/products"

  const [data, setData] = useState([])

  const dataFetch = async () => {
    try {
      const response = await fetch(dataUrl)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    dataFetch()
  }, [])

  // Method 2:
  //const [data, setData] = useState([])

  //const dataFetch = async () => {
  //  const response = await fetch("https://fakestoreapi.com/products")
  //  console.log(response)
  //  const data = await response.json()
  //  console.log(data)
  //  setData(data)
  //}
  //useEffect(() => {
  //  dataFetch()
  //}, [])

  return (
    <>
      <Product data={data} />
    </>
  )
}

export default App
