"use client";
export default function Footer() {
  return (
    <>
    
<footer className="footer util-flex-mx">
  <div className="footer-container">
    <div className="footer-section">
      <h3>About Us</h3>
      <ul>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Freight Solutions</a></li>
        <li><a href="#">Cross-border</a></li>
        <li><a href="#">Infrastructure</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Contact</a></li>
        {/* <li><a href="#">Raise a Query</a></li> */}
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Contact Us</h3>
      <ul>
        <li>100 Market Drive, Milton, ON</li>
        <li>+1 905 864 6443</li>
        <li><a href="mailto:admin@transexpert.ca">admin@transexpert.ca</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2025 TransExpert Inc. All Rights Reserved.</p>
  </div>
</footer>


    </>
     );
}