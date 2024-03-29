

// Set the date we're counting down to
var countDownDate = new Date("Mar 14, 2024 7:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in "countdown" element
  document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S " + "Remaining";
    
  // If the count down is over, write "EXPIRED"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
