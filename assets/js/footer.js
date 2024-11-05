const footerHtml = ` <div class="shapes">
                    <div class="shape shape-1"><img src="assets/img/shapes/footer-shape-1.png" alt="shape"></div>
                    <div class="shape shape-2"><img src="assets/img/shapes/footer-shape-2.png" alt="shape"></div>
                </div>
                <div class="container-lg">
                    <div class="footer-top max-sm:mb-5 max-sm:pb-5">
                        <h2 class="title">Let's Create <br>Something Great</h2>
                        <a href="contact.html" class="rr-white-btn">Book Appointment</a>
                    </div>
                    <div class="row footer-wrap">
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="footer-widget">
                                <div class="widget-header">
                                    <h3 class="widget-title">Contact</h3>
                                </div>
                                <ul class="address-list">
                                    <li>
                                        <div class="icon"><i class="fa-sharp fa-solid fa-location-dot"></i></div>
                                        <div class="content">
                                            <p>256 Daniel Avenue, Suite Road, <br>VBA 21, Hyderabad India</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon"><i class="fa-sharp fa-solid fa-phone-volume"></i></div>
                                        <div class="content"><a href="tel:+252145612321">(+91) 1456 123 21</a></div>
                                    </li>
                                    <li>
                                        <div class="icon"><i class="fa-sharp fa-solid fa-envelope"></i></div>
                                        <div class="content"><a href="mailto:help@scivyt.com">help@scivyt.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="footer-widget footer-col-2">
                                <div class="widget-header">
                                    <h3 class="widget-title">Special Links</h3>
                                </div>
                                <ul class="footer-list">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="products.html">Our Products</a></li>
                                    <li><a href="blogs.html">Blogs</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6 d-none">
                            <div class="footer-widget footer-col-2 footer-col-3">
                                <div class="widget-header">
                                    <h3 class="widget-title">Quick Links</h3>
                                </div>
                                <ul class="footer-list">
                                    <li><a href="contact.html">Web Development</a></li>
                                    <li><a href="contact.html">Digital Marketing</a></li>
                                    <li><a href="contact.html">UI/UX Product Design</a></li>
                                    <li><a href="contact.html">Graphic Design</a></li>
                                    <li><a href="contact.html">Growth Management</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-6 col-md-6">
                            <div class="footer-widget">
                                <div class="widget-header">
                                    <h3 class="widget-title">Newsletter</h3>
                                </div>
                                <p class="news-desc">Don't miss any updates</p>
                                <div class="footer-form md:mb-20">
                                    <form action="#" class="rr-subscribe-form">
                                        <input class="form-control" type="email" name="email"
                                            placeholder="Email address">
                                        <input type="hidden" name="action" value="mailchimpsubscribe">
                                        <button class="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container-lg">
                        <div class="copyright-content text-center">
                            <p>Â© Copyright 2024, All Rights Reserved.</p>
                        </div>
                    </div>
                </div>`;
$(document).ready(function () {
    $('footer').html(footerHtml);
})