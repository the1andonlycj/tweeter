

$(document).ready(function() {
  $("#tweet-text").keyup(function(){
    console.log("Tweet-text is happenin'")
    let countdown = 140 - this.value.length;
    if (countdown < 0) {
      $(this).parent().find(".counter").addClass("negative");
    }
    $(this)
      .parent()
      .find(".counter")
      .val(countdown)
  });
  
})