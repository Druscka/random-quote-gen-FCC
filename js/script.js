$(document).ready(function() {
  $("#clickMe").click(function(event){
  $.getJSON('https://talaikis.com/api/quotes/random/', function(jd) {
      $('.quote').html('<p id="quote"> '+ jd.quote + '</p>');
      $('.quote').append('<p id="author"><strong>' + jd.author+ '</strong></p>');
      $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text='+ jd.quote + ' - ' + jd.author).attr('target', '_blank')
      });
  });
});
