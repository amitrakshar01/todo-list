import React from 'react'

export const Footer = () => {
let footerStyle = {
  position: 'absolute',
  width: '100%',
  top: '100%',
}


  return (
    <footer className="bg-dark text-light py-2 my-3" style={footerStyle}>
      <p className="text-center">Copyright &copy;Amitrakshar</p>
    </footer>
  )
}
