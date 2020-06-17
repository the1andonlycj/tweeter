/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
  console.log( "Client.js is ready!" );
});

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

//Function for creating the new tweet elements:
const createTweetElement = function (tweetData) {
  
  let $tweet = `
  <article>
  <div class="tweet-header">
  <div class="profile-pic">
  <p>${tweetData.user.avatars}</p>
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
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
} 

const $tweet = createTweetElement(tweetData);
// const renderTweets = function(tweets) {
  // THIS IS FOR LATER
  // }