import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer class="footer">

            <div class="footer-container">
                <div class="footer-row row">
                    <div id="col-1" class="col-lg-3 col-md-6 col-sm-12">
                        <h4>Navigate To</h4>
                        <ul>
                            <li><a class="footer-a" href="#">Summary</a></li>
                            <li><a class="footer-a" href="#">Skills</a></li>
                            <li><a class="footer-a" href="#">Qualifications</a></li>
                        </ul>

                    </div>
                    <div id="col-2" class="col-lg-3 col-md-6 col-sm-12">
                        <h4>Projects</h4>
                        <ul>
                            <li><a class="footer-a" href="#">Desktop App Development</a></li>
                            <li><a class="footer-a" href="#">Web Design</a></li>
                            <li><a class="footer-a" href="#">3D Printing & CAD</a></li>
                            
                        </ul>

                    </div>
                    <div id="col-3" class="col-lg-3 col-md-6 col-sm-12">
                        <h4>Others</h4>
                        <ul>
                            <li><a class="footer-a" href="#">Recommendations</a></li>
                            <li><a class="footer-a" href="#">Endorsements</a></li>
                            <li><a class="footer-a" href="#">Certificates</a></li>
                        </ul>

                    </div>
                    <div id="col-4" class="col-lg-3 col-md-6 col-sm-12">
                        <h4>My Social Links</h4>
                        <div class="social-links row">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>

                    </div>
                </div>

            </div>



            <p class="copyright">© 2022 Mohammad Talha. All rights reserved</p>



        </footer>
    );
}

export default Footer;