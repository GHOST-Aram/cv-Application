import React from 'react'

const Footer = () => {
  return (
    <footer className='py-8 bg-slate-500 text-center'>
        <p className="text-light">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer