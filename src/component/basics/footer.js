import React from 'react'

function Footer() {
  return (
    <div className='foot-bg'>
        <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center demo-text">
                        {/* <a href="#"><img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo"></a> */}
                        <h1><big className='brand'>Billu ka Dhaba</big></h1>
                        <p className='des'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                        <div className="hr"></div>
                        <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                        <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <p>Copyright &copy; 2019 All Rights Reserved.</p>
    </footer>

    </div>
  );
};

export default Footer;