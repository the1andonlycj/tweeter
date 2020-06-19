//Function for creating the new tweet elements array:
const createTweetElement = function (tweetData) {
  let $tweet = `
  <article class="posted-tweet">
    <div class="tweet-header">
      <div class="top-left-tweet">
        <div class="profile-pic">
          <img src= "${tweetData.user.avatars}"}>
        </div>
        <div class="name">
          <p>${tweetData.user.name}</p>
        </div>
      </div>
      <div class="username">
        <p>${tweetData.user.handle}</p>
      </div>
    </div>
      <div class ="tweet-body">
        <p class ="tweet-text"> ${escape(tweetData.content.text)}</p>
      </div>
    <hr>
    <div class="tweet-footer">
      <div class="timestamp">
        <p>${moment(tweetData.created_at).fromNow()}</p>
      </div>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heartbeat"></i>
      </div>
    </div>
  </article>
  `;
  console.log($tweet);
  return $tweet;
}
  
//Function for sending the tweets to the page:
const renderTweets = function(data) {
  for(tweet of data) {
    $("#tweet-container").prepend(createTweetElement(tweet))
  }
}

//Function to protect against XSS attacks:
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

  
//Jquery declaration:
$(document).ready(function () {
  console.log("Client.js is ready!");
  //Defining function for loading the tweets/GETting tweets from server:
  const loadTweets = () => {
    $("#tweet-container").empty();
    $.ajax({
      url: '/tweets', 
      method: 'GET',
      dataType: 'JSON',
      }).then((res) => {
        renderTweets(res);
      });
    };

  loadTweets();
  //Applying new tweets to the page without refreshing:
  $("form").submit(function (event) {
    event.preventDefault();
    let formLength = $(this).find("textarea").val().length;
    if (formLength <= 0) {
      $("#error-message-empty").slideDown();
    } else if (formLength > 140) {
      $("#error-message-long").slideDown();
    } else {
      $("#error-message-long").slideUp();
      $("#error-message-empty").slideUp();
      $.ajax("/tweets", {
        method: 'POST',
        data: $(this).serialize()
      }).then(() => {
        $(this).find("textarea").val('')
        $(this).find(".counter").text("140");
        loadTweets();
      })
    }
  });
});
