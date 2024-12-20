import { useContext } from 'react'
import { CountContext } from '../contexts/CountCountext'

const DisplayCount = () => {
  const { count } = useContext(CountContext)

  return <h2>Current Count: {count}</h2>
}

export default DisplayCount
