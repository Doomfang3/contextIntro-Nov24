import { useContext } from 'react'
import { CountContext } from '../contexts/CountCountext'

const Counter = () => {
  const { count, handleIncrement } = useContext(CountContext)

  return (
    <button type='button' onClick={handleIncrement}>
      {count}
    </button>
  )
}

export default Counter
