import React from 'react'
import { useSelector } from 'react-redux'
export const Label = () => {
  const username = useSelector((state) => state.user.username)
  return (
    <div className='form-cnt'>
        <h1>Componente "Label"</h1>
        <h2>{username}</h2>
    </div>
  )
}
