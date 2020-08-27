
$(document).ready(function () {
  bindToPage();
  /* popupHTM(); */
  $('.popup-btn').click(function () {
    var popupBlock = $('#' + $(this).data('popup'));
    popupBlock.addClass('active')
      .find('.fade-out').click(function () {
        popupBlock.css('opacity', '0').find('.popup-content').css('margin-top', '350px');
        setTimeout(function () {
          $('.popup').removeClass('active');
          popupBlock.css('opacity', '').find('.popup-content').css('margin-top', '');
        }, 600);
      });
  });
})

function bindToPage() {

  var callbackDiv = '<div class="callback-request"><a href="#" class="filled-button popup-btn" data-popup="popup-reg">Request a call back</a></div>';
  /* var popupContent = '  <div class="popup"><div class="popup-content"><div class="event-header"><h6>Say Hi!</h6></div><form id="send" class="send-form"><div class="form-group"><label for="name"><i class="fa fa-user"></i></label><input type="text" placeholder="Enter name..." id="name" name="name" required="required"></div><div class="form-group"><label for="phone"><i class="fa fa-phone"></i></label><input type="tel" placeholder="Enter phone..." id="phone" name="phone" required="required"></div><div class="form-group"><label for="mail"><i class="fa fa-envelope"></i></label><input type="email" placeholder="Enter mail..." id="mail" name="mail" required="required"></div><div class="form-group"><label for="text"><i class="fa fa-comment"></i></label><textarea placeholder="Enter message..." name="text" id="text"></textarea></div><button type="submit" class="main-btn-rect" name="text" value="Send"><i class="fa fa-paper-plane"></i>Send</button></form><span class="fade-out main-btn-circle">╳</span></div></div>'; */

  $('#callback').append(callbackDiv);
  /* $('#popup-reg').append(popupContent); */
}

/* function popupHTM() {
  var popupContent = '<div id="popup-reg" class="popup"><div class="popup-content"><div class="event-header"><h6>Say Hi!</h6></div><form id="send" class="send-form"><div class="form-group"><label for="name"><i class="fa fa-user"></i></label><input type="text" placeholder="Enter name..." id="name" name="name" required="required"></div><div class="form-group"><label for="phone"><i class="fa fa-phone"></i></label><input type="tel" placeholder="Enter phone..." id="phone" name="phone" required="required"></div><div class="form-group"><label for="mail"><i class="fa fa-envelope"></i></label><input type="email" placeholder="Enter mail..." id="mail" name="mail" required="required"></div><div class="form-group"><label for="text"><i class="fa fa-comment"></i></label><textarea placeholder="Enter message..." name="text" id="text"></textarea></div><button type="submit" class="main-btn-rect" name="text" value="Send"><i class="fa fa-paper-plane"></i>Send</button></form><span class="fade-out main-btn-circle">╳</span></div></div>';
  $('#popup-reg').append(popupContent);
} */