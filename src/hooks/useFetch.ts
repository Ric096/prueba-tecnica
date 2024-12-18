import { useEffect, useState } from "react"
import axios from "axios"

type ErrorFetch = Error | null

interface Params<T> {
  data: T | null;
  error: ErrorFetch;
  loading: boolean;
}

export const useFetch = <T>(url: string): Params<T> => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ErrorFetch>(null)

  useEffect(() => {

    const controller = new AbortController()

    setLoading(true)
    const fetchData = async () => {
      try{
        const response = await axios.get(url)

        const result = await response.data

        setData(result)
      } catch (error) {

        setError(error as ErrorFetch)
      }
    }

    fetchData()
    
    setLoading(false)

    return () => {controller.abort()}

  },[url])

  return {data, loading, error}

}