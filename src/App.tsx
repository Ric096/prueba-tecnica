// import { useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { Navbar, Footer, Dashboard } from './components'
import { Data } from './model'


const URL = 'https://fakestoreapi.com/products'

function App() {

  const {data, loading, error} = useFetch<Data>(URL)

  console.log(data, loading)

  return (
    <main className="flex flex-col items-center justify-center h-100vh">
      {/* <h2>Prueba Técnica Girolab</h2> */}
      
        <Navbar />

        {
          data && 
          <p>
            se han encontrado los productos
          </p>

        }
        {/* <ProductPage /> */}
        <Dashboard />
        {
          error && 
          <p>
            error
          </p>
        }


        <Footer />
    </main>
  )

}

export default App
