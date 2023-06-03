import React from 'react'
import TestimonialList from './TestimonialList'

const Footer = () => {
  const today = new Date()
  return (
    <>
      <TestimonialList />
      <footer className="footer">
        <p>Copyright &copy; {today.getFullYear()}</p>
      </footer>
    </>
  )
}

export default Footer
