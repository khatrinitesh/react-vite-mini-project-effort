import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Copyright {currentYear}</p>
    </footer>
  )
}

export default Footer
