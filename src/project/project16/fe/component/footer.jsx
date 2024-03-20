import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <p>&copy; Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
