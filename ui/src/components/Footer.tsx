import React from 'react'
import TestimonialList from './TestimonialList'

const Footer = () => {
  return (
    <>
      <TestimonialList />
      <footer className="footer">
        <div className="footer__copyright">
          Copyright &copy; PB Technologies Ltd All rights reserved. 587 Great
          South Road, Manukau, Auckland, New Zealand
        </div>
        <div className="footer__disclaimer">
          PB Technologies Ltd is not responsible for typographical errors. All
          prices and specifications are subject to change without notice.
        </div>
      </footer>
    </>
  )
}

export default Footer
