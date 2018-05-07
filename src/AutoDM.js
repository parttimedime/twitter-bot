const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min

const AutoDM = () => {
  //const stream = T.stream('statuses/sample');
  const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀" + my_user_name);
  stream.on("follow", SendMessage);
 
  //stream.on('tweet', function (tweet) {
  //console.log(tweet);
  //});
  
  //stream.on('disconnect', function (disconn) {
  //console.log('disconnect')
 // });
  
 // stream.on('error', function (tweet) {
  //console.log(tweet);
 // });

 // stream.on('limitation', function (tweet) {
 // console.log(tweet);
 // });
  
  
//stream.on('connect', function (conn) {
//  console.log('connecting')
//});

//stream.on('reconnect', function (reconn, res, interval) {
//  console.log('reconnecting. statusCode:', res.statusCode)
//});
  
  



};

const SendMessage = user => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };
  console.log(' 🎉🎉🎉🎉 New Event  🎉🎉🎉🎉🎉 ${screen_name}');
 
  T.get('statuses/user_timeline', {
  screen_name: '${screen_name}',
    count: 1
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
});
  
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
const GenerateMessage = name => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  const channelName = "https://youtube.com/c/ANPAUS";
  //return `Hi ${name} Thanks for .... \n Happy ${dayName} 😊😊 `; // your message
  // My message   
  return `Hi ${name} Thanks for being a part of my social media network. \n If you want to check me out on Youtube click-> ${channelName} \n Happy to discuss anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = AutoDM;
