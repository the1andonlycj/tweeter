

$(document).ready(function() {
  $("#tweet-text").keyup(function(){
    let countdown = 140 - this.value.length;
    if (countdown < 0) {
      $(this).parent().find(".counter").addClass("negative");
    } else {
      $(this).parent().find(".counter").removeClass("negative");
    }
    $(this)
      .parent()
      .find(".counter")
      .val(countdown)
  });
})