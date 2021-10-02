import React from 'react';

const Footer = () => {
    return (
        <div>
            <div style={{backgroundColor:"#636E72",height:"230px"}} className="mt-1 flex">
                <div className="mx-8 my-2 text-lg grid text-white">
                  <div className="my-1 text-base	">
                      Home
                  </div>
                  <div className="my-1 text-base	">
                  Events
                  </div>
                  <div className="my-1 text-base	">
                  Notifications                 </div>
                  <div className="my-1 text-base	">
                  Research
                  </div>

                    </div>
                    <div className="mx-8 my-2 text-lg grid text-white">
                  <div className="my-1 text-base	">
                      Academics
                  </div>
                  <div className="my-1 text-base	">
                  People
                  </div>
                  <div className="my-1 text-base	">
                  login                 </div>
                  <div className="my-1 text-base	">
                  Education
                  </div>

                    </div>
                    <div className="mx-8 my-2 text-lg grid text-white ">
                  <div className="my-1 text-base	">
                      Contact
                  </div>
                  <div className="my-1 text-base	">
                  People
                  </div>
                  <div className="my-1 text-base	">
                  Research                </div>
                  <div className="my-1 text-base	">
                  Events
                  </div>

                    </div>
                    <div className="mx-8 w-2/12 text-sm my-8 text-lg grid text-white">
                    
                  
                 
                  <div>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <span className="mx-3">Democse@cuh.ac.in</span>
                  </div>
                  <div>
                  <i class="fa fa-phone" aria-hidden="true"></i>

                    <span className="mx-3">+91-1234567897</span>
                  </div>
                  <div>
                  <i class="fa fa-facebook" aria-hidden="true"></i>

                    <span className="mx-3">Democse page</span>
                  </div>
                  

                    </div>
                    
                    
                    <div className="my-auto mx-auto">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.254642887116!2d76.13151241425217!3d28.351150003512867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39129577ce587a0b%3A0xbdc1de187d4dccf9!2sCentral%20University%20of%20Haryana!5e0!3m2!1sen!2sin!4v1633074376766!5m2!1sen!2sin" width="550" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                    </div>

            </div>
            <div style={{backgroundColor:"#C4C4C4",color:"#636E72"}} className="p-1 text-center font-bold text-lg">
                Made by Department of Computer Science and Engineering

            </div>
        </div>
    );
}

export default Footer;
