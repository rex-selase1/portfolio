import "./Footer.css"




const Footer = () => {
    return ( 
        <div id ="contact" className="footer">
            <div className="contact">
              <h3>Get In Touch</h3>
              <input type="text" placeholder="Email Address*" />
              < textarea name="" id="" cols="50" rows="5" placeholder="What can we help you with ?*" />
              <input type="button" value="Send" />
            </div>
            <div className="copyright">
               Made with love by Shamouah
            </div>
        </div>
     );
}
 
export default Footer;