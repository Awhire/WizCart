import './Footer.css'
import images from '../../assets/g-play.png'


const Footer = ()=>{
  return (
    <>
      <div className='first-column'> 
        <h1>Download Our App</h1>
        <p>Download App for Android and ios mobile phone</p>
        <div className='images'>
          <img src={images} alt='g-play' />
        </div>
      </div>

      {/* <div className='second-column'>
        <img src={logo} alt='logo' />
        
      </div> */}

      <div className='third-column'>
        <h1>Useful Links</h1>
        <p>Coupons</p>
        <p>Blog Post</p>
        <p>Return Policy</p>
        <p>KizTech Hub</p>
      </div>

      <div className='fourth-column'>
        <h1>Follow Us</h1>
        <a href='#'>Facebook</a>
        <a href='#'>Instagram</a>
        <a href='#'>Twitter</a>
      </div>

    </>
  )
}

export default Footer;