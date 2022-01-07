import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="socials">
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
            </div>
        
           <div className="footer-links">
               <ul className="link-list">
                   <li ><Link to="/" className="link">FAQ</Link></li>
                   <li ><Link to="/"className="link">Financing</Link></li>
                   <li ><Link to="/"className="link">Press</Link></li>
                   <li ><Link to="/" className="link">Privacy</Link></li>
                   <li ><Link to="/" to="/"className="link">Warranty</Link></li>
                   <li ><Link to="/"className="link">Returns</Link></li>
                   <li ><Link to="/"className="link">Terms of Use</Link></li>
                   <li ><Link to="/"className="link">Blog</Link></li>
                   <li ><Link to="/"className="link">COVID-19</Link></li>
               </ul>
           </div>
        </footer>
    )
}

export default Footer
