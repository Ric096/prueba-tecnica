// import { useEffect } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'


const URL = 'https://fakestoreapi.com/productss'

function App() {

  const {data, loading, error} = useFetch(URL)

  console.log(
    {
      'Esta es la data':data,
      'Este es el estado de cargando':loading,
      'Este es el error':error
    }
  )

  return (
    <>
      <h2>Prueba Técnica Girolab</h2>
      {
        error && 
        <p>
          {error.message}
        </p>
      }
    </>
  )

  // if(error) { 
  //   return (
  //     <div>
  //       <p>Ha ocurrido el siguiente error:</p>
  //       <p> {error?.message} </p>
  //     </div>
  //   )
  // }

  // if(data) { 
  //   return (
  //     <div>
  //       {JSON.stringify(data)}
  //     </div>
  //   )
  // }

  


}

export default App
