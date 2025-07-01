
export default function HeroSection() {
  return (
    <>
      
  
      <section className="hero-section util-flex-mx">
          <div className="hero-diagonal-overlay"></div>
    <div className="hero-content">
      <h1 className="hero-heading">
        We Don’t Just Move Freight. <br />
        We Power North American Enterprise.
      </h1>
      <p className="hero-description">
        From mission-critical deliveries to cross-border precision — Trans
        Expert is the logistics backbone trusted by industry leaders
      </p>
      <a href="#about" className="hero-button">
        About Us
      </a>
    </div>
     <div className="hero-testimonial">
    <p>
      ⭐⭐⭐⭐⭐<br/>
      TransExpert has been an exceptional partner to work with. Not only have they brought forward strategic solutions, 
      but have allowed us to manage our business with peace-of-mind and strive towards our value of delivering on 
      Commitment and Customer Focus. As a partner, if a solution does not exist they are willing to work with you to 
      assist in developing one or offering alternative approaches.
    </p>
    <p className="testimonial-source">— Paper Manufacturing Industry</p>
  </div>

  <div className="testimonial-cards">
    <div className="card">
      SERVICES
    </div>
    <div className="card">
      <img src="/images/img2.png" alt="Full Truck Load" />
     
    </div>
    <div className="card">
      <img src="/images/img1.png" alt="Less Than Truckload" />
     
    </div>
    <div className="card">
      <img src="/images/img2.png" alt="Cross Border" />
      
    </div>
    <div className="card">
      <img src="/images/img1.png" alt="Dedicated" />
     
    </div>
  </div>
  </section>

 
    </>
  );
}
