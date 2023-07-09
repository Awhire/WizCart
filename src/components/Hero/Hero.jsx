import './Hero.css'
import images from '../../assets/logo1.png'

const Hero = ()=>{
  return (
    <div className="banner-container">
        <div className="banner-text md:mt-[-150px] lg:mt-28">
          <h1 className='font-bold text-2xl mb-3'>The Chrismas Sale <br />Is Now Back!</h1>
          <p>Get your favourite device at an unbelievable price and win many cool <br />Christmas Discounts available on all gadgets from just Rs.299 only</p>
          <span>Get your device at unbelievable prices!!!</span>
          <button className='mt-5'>Shop Now</button>
        </div>

        <div className='md:mt-[-180px] lg:mt-32'>
          <img src={images} alt="banner-logo"></img>    
        </div>

    </div>
  )
}

export default Hero;