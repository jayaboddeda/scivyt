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
    </header>`;
$(document).ready(function () {
    $('#header').append(headerHtml);
})