/**
 * Generate a one-way hash from a String
 * @returns {number}
 */
String.prototype.hashCode = function () {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

$(document).ready(function() {
  $('.js-login-form').submit(function() {
    var pw = $(this).find('#login-password').val();
    if (pw.hashCode() == 98482807) {
      $('.js-cover').remove();
    }

    return false;  // don't post back to the server
  });
  
  var $cover = $('.cover');
  function resizeCover() {
    $cover.width($(window).width());
    $cover.height($(window).height());
  }
  $(window).resize(resizeCover);
  resizeCover();
});
