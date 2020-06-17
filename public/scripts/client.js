//Function for creating the new tweet elements array:
const createTweetElement = function (tweetData) {
  // let tweetsArr = [];
  // for(tweet of data) {
    let $tweet = `
    <article class="posted-tweet">
    <div class="tweet-header">
    <div class="profile-pic">
    <img src= "${tweetData.user.avatars}"}>
    </div>
    <div class="name">
    <p>${tweetData.user.name}</p>
    </div>
    <div class="username">
    <p>${tweetData.user.handle}</p>
    </div>
    </div>
    <div class ="tweet-body">
    <p> ${tweetData.content.text}</p>
    </div>
    <hr>
    <div class="tweet-footer">
    <div class="timestamp">
    <p>${tweetData.created_at}</p>
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
    // tweetsArr.push($tweet);
  }
  
  //Function for sending the tweets to the page:
  const renderTweets = function(data) {
    for(tweet of data) {
      $("#tweet-container").append(createTweetElement(tweet))
    }
  }


  
//Jquery declaration:
$(document).ready(function () {
  console.log("Client.js is ready!");
  //Defining function for loading the tweets/GETting tweets from server:
  const loadTweets = function () {
    console.log("hey");
    $.ajax({
    url: '/tweets', 
    method: 'GET',
    dataType: 'JSON',
    // success: function(res) {
    //   renderTweets(res);
    // }
    }).then(function (res) {
      renderTweets(res);
    });
  };

  loadTweets(); //This one is running
  $("form").on("submit", function (event) {
    event.preventDefault();
    let formLength = $(this).find("textarea").val().length;
    if (formLength <= 0) {
      alert("As deep as silence can be, it doesn't really work here.")
    } else if (formLength > 140) {
      alert("Brevity is the soul of chill--lose a few characters, if you can.")
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        dataType: 'JSON',
        data: $(this).serialize()
      }).then(function(res) { //this is where things break down.
        console.log(res);
        loadTweets();
      })
    }
  });
});
