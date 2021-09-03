import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
           <div className="social-icons-group">
           <i className="fab fa-instagram"/>
           <i className="fab fa-twitter"/>
           <i className="fab fa-facebook"/>
           <i className="fab fa-pinterest"/>
           <i className="fab fa-youtube"/>
           </div>
           <div className="footer-form">
               <h3>BE IN THE KNOW</h3>
               <p>Sign up to receive the latest from Artyfact</p>
               <form>
                   <input className='email-input' type="email" placeholder="email"  />
                   <input className='button-input' type="submit" value="Submit"/>
               </form>
           </div>
        </footer>
    )
}

export default Footer
