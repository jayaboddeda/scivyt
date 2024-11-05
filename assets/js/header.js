let headerHtml = `<header class="header header-2 header-4 sticky-active">
        <div class="custom-container">
            <div class="top-bar top-bar-2">
                <div class="top-bar-inner">
                    <div class="top-bar-left">
                        <ul class="top-contact-list">
                            <li>Call us:<a href="tel:+25832563258">+258 3256 3258</a></li>
                            <li>Mail us:<a href="tel:+25832563258">info@scivyt.com</a></li>
                        </ul>
                    </div>
                    <div class="top-bar-right">
                        <ul class="top-social-list">
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i>Facebook</a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i>instagram</a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i>Linkedin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="primary-header">
                <div class="primary-header-inner py-3 py-md-0">
                    <div class="header-logo d-flex md:max-h-[80px] max-h-[60px]">
                        <a href="index.html">
                            <img class="logo-dark w-md-100 h-100" style="object-fit: contain;"
                                src="assets/img/logo/logo-1.png" alt="Logo">
                            <img class="logo-light" src="assets/img/logo/logo-1.png" alt="Logo">
                        </a>
                    </div>

                    <div class="header-menu-wrap">
                        <div class="mobile-menu-items">
                            <ul>
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="products.html">Our Products</a></li>
                                <li><a href="blogs.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- /.header-menu-wrap -->
                    <div class="header-right-wrap">
                        <div class="header-right">
                            <a href="tel:+58932562158" class="header-number">tel: +589 3256 2158</a>
                            <div class="search-icon dl-search-icon d-none">
                                <i class="fa-regular fa-magnifying-glass"></i>
                            </div>
                            <div class="sidebar-icon d-md-none">
                                <button class="sidebar-trigger open">
                                    <img src="assets/img/icon/sidebar-icon.png" alt="icon">
                                </button>
                            </div>
                        </div>
                        <!-- /.header-right -->
                    </div>
                </div>
                <!-- /.primary-header-inner -->
            </div>
        </div>
    </header>
    <div id="sidebar-area" class="sidebar-area">
        <button class="sidebar-trigger close">
            <svg class="sidebar-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="16px" height="12.7px" viewBox="0 0 16 12.7"
                style="enable-background: new 0 0 16 12.7" xml:space="preserve">
                <g>
                    <rect x="0" y="5.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)" width="16"
                        height="2"></rect>
                    <rect x="0" y="5.4" transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)" width="16"
                        height="2"></rect>
                </g>
            </svg>
        </button>
        <div class="side-menu-content">
            <div class="side-menu-logo mb-2">
                <a class="dark-img" href="index.html"><img src="assets/img/logo/logo-1.png" alt="logo" class="h-16"></a>
                <a class="light-img" href="index.html"><img src="assets/img/logo/logo-1.png" alt="logo"></a>
            </div>
            <div class="side-menu-wrap mb-2"></div>
            <div class="side-menu-about">
                <div class="side-menu-header">
                    <h3>About Us</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo
                    consequat.</p>
                <a href="contact.html" class="rr-primary-btn">Contact Us</a>
            </div>
            <div class="side-menu-contact">
                <div class="side-menu-header">
                    <h3>Contact Us</h3>
                </div>
                <ul class="side-menu-list">
                    <li>
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Valentin, Street Road 24, Hyderabad, </p>
                    </li>
                    <li>
                        <i class="fas fa-phone"></i>
                        <a href="tel:+000123456789">+91 123 (456) 789</a>
                    </li>
                    <li>
                        <i class="fas fa-envelope-open-text"></i>
                        <a href="mailto:nuncacontact@gmail.com">scyvitcontact@gmail.com</a>
                    </li>
                </ul>
            </div>
            <ul class="side-menu-social">
                <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li class="instagram"><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li class="g-plus"><a href="#"><i class="fab fa-fab fa-google-plus"></i></a></li>
            </ul>
        </div>
    </div>
    `;
$(document).ready(function () {
    $('#header').replaceWith(headerHtml);
})