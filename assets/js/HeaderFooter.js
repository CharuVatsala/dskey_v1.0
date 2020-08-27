$(document).ready(function () {
    $(document).on("scroll", onScroll);
    bindHeaderToPage();
    bindFooter();
    /*    $('.navbar-nav li a').click(function (event) {
           isActive += 1;
           $('.navbar-nav li').removeClass('active');
           $(this).parent().addClass('active');
       }); */
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    var hideLead = document.getElementById('about-Lead');
    hideLead.style.display = "none";
})


function bindHeaderToPage() {

    var topHeader = '<header class=""><nav class="navbar navbar-expand-lg"><div class="container"><a class="navbar-brand" href="index.html"><img width="250" height="70" src="../assets/images/logo4.png" class="custom-logo" alt="Data Science Key"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarResponsive"><ul class="navbar-nav ml-auto"><li class="nav-item active"><a class="nav-link" href="#top">Home<span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link"= href="#resources">Resource</a></li><li class="nav-item"><a class="nav-link"= href="#blog">Blog</a></li><li class="nav-item"><a class="nav-link" href="#about-us">About Us</a></li></ul></div></div></nav></header>';

    var subHeader = '<div class="sub-header"><div class="container"><div class="row"><div class="col-md-8 col-xs-12"><ul class="left-info"><li><a href="#"><i class="fa fa-clock-o"></i>Mon-Fri 09:00-17:00</a></li><li><a href="#"><i class="fa fa-phone"></i>7679-519-557</a></li></ul></div><div class="col-md-4"><ul class="right-icons"><li><a href="https://www.facebook.com/Datasciencekey-107991680699553/" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a href="https://twitter.com/DataScienceKey1" target="_blank"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.linkedin.com/in/data-science-key-a24b52199/" target="_blank"><i class="fa fa-linkedin"></i></a></li></ul></div></div></div></div>';

    $('#subHeader').append(subHeader);
    $('#pageHeader').append(topHeader);
}

function bindFooter() {

    var footerVal = '<footer><div class="container"><div class="row"><div class="col-md-3 footer-item">   <h4>Solutions</h4><p>Interview Preparation </p> <p> Data Science Guidance </p> <p> One to one mentoring </p><p> Real Time Data Science project</p></div><div class="col-md-3 footer-item"><h4>Useful Links</h4><ul class="menu-list"><li><a href="#blog">Blogs</a></li><li><a href="#resources">Resources</a></li><li><a href="#about-us">About Us</a></li></ul></div><div class="col-md-3 footer-item"><h4>Additional Pages</h4><ul class="menu-list"><li><a href="#">About Us</a></li><li><a href="#">How We Work</a></li><li><a href="#">Quick Support</a></li><li><a href="#">Contact Us</a></li><li><a href="#">Privacy Policy</a></li></ul></div><div class="col-md-3 footer-item last-item"><h4>Contact Us</h4><div class="contact-form"><form id="contact footer-contact" action="" method="post"><div class="row"><div class="col-lg-12 col-md-12 col-sm-12"><fieldset><input name="name" type="text" class="form-control" id="name" placeholder="Full Name" required=""></fieldset></div><div class="col-lg-12 col-md-12 col-sm-12"><fieldset><input name="email" type="text" class="form-control" id="email" pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required=""></fieldset></div><div class="col-lg-12"><fieldset><textarea name="message" rows="6" class="form-control" id="message" placeholder="Your Message" required=""></textarea></fieldset></div><div class="col-lg-12"><fieldset><button type="submit" id="form-submit" class="filled-button">Send Message</button></fieldset></div></div></form></div></div></div><div class="row"><div class="col-lg-12 col-md-12 footerContactStyling"><ul class="social-icons"><li><a rel="nofollow" href="https://www.facebook.com/Datasciencekey-107991680699553/" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a href="https://twitter.com/DataScienceKey1" target="_blank"><i class="fa fa-twitter"></i></a></li><li><a href="https://www.linkedin.com/in/data-science-key-a24b52199/" target="_blank"><i class="fa fa-linkedin"></i></a></li><li><a href="mailto:datasciencekey@gmail.com"><i class="fa fa-envelope"></i></a></li><li><a href="https://maps.google.com/maps?q=marathalli&t=&z=13&ie=UTF8&iwloc=&output=embed" target="_blank"><i class="fa fa-map-marker"></i></a></li></ul></div></div></div></footer>';

    var subFooterVal = '<div class="sub-footer"><div class="container"><div class="row"><div class="col-md-12"><p>Copyright &copy; 2020 Data Science Key</p></div></div></div></div>'

    $('#pageFooter').append(footerVal);
    $('#pageSubFooter').append(subFooterVal);

}

function displayLead() {
    var hideLead = document.getElementById('about-Lead');
    var hideCompanyDetails = document.getElementById('about-company');
    hideLead.style.display = "block";
    hideCompanyDetails.style.display = "none";
}

function displayCompany(){
    var hideLead = document.getElementById('about-Lead');
    var hideCompanyDetails = document.getElementById('about-company');
    hideLead.style.display = "none";
    hideCompanyDetails.style.display = "block";
}

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav li').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}