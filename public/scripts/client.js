//Testing tweets:
const tweetData1 = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];


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
    renderTweets(tweetData1)
  });