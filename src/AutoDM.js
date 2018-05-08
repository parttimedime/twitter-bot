const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min
const timeout2 = 1000 * 5;
const timeout3 = 1000 * 15;

const AutoDM = () => {
  //const stream = T.stream('statuses/sample');
  const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀" + my_user_name);
  stream.on("follow", SendMessage);
  
  stream.on('tweet', function (tweet) {
   
    if (tweet.user.screen_name == 'SenseofCents')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'tess_wicks')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'FITnancials')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'followprojecten')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
     if (tweet.user.screen_name == 'RunZwithDooBiEs')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'RamIsRising')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    
     
    if (tweet.user.screen_name == 'CandySlimeAsmr')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
       if (tweet.user.screen_name == 'WriterB2b')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'ganseyman')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'projetofftricqk')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
    if (tweet.user.screen_name == 'CammyDJ777')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
    if (tweet.user.screen_name == 'Jn_Shine1')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
   
    if (tweet.user.screen_name == 'decorartehogar')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
    if (tweet.user.screen_name == 'Mystik_Justice')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
  });
 
  
};

const SendMessage = user => {
  const { screen_name, name } = user.source;
  
  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };
  //console.log(" 🎉🎉🎉🎉 New Event  🎉🎉🎉🎉🎉 " + screen_name);
 
  
  
  //T.get('friends/list', {
  //screen_name: my_user_name,
 // count:2
  //}, (err, data, response) => {
   //   data.users.forEach(user => {
   //     console.log(user.screen_name);
        //     T.get('friendships/lookup', {
    //    screen_name: user.screen_name
    //    },(err, data, response) => {
    //          console.log(data);
    //     });
  //  })
  //});
 
  
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    const handle = screen_name;
  
  /* T.get('followers/list', {
      screen_name: 'JustDannYT',
      count: 5
      }, (err, data, response) => {
        data.users.forEach(t => {
          T.post('friendships/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${t.screen_name} followed from jDT!`);
          });
        });
      //console.log(data);
    });*/
     //const handle = screen_name;
  
    /*T.get('statuses/home_timeline', {
    count: 1
    }, (err, data, response) => {
        //console.log(data);
      data.forEach(t => {
          //console.log(t.text);
          //console.log(t.user.screen_name);
         // console.log(t.id_str);
          //console.log('\n');
           T.post('favorites/create', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${data.text} from HomeTimeline tweet liked!`);
            });

             T.post('statuses/retweet/:id', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${data.text} from Home Timeline tweet RT!`);
            });
        });
    });*/
    
    T.post('friendships/create', {
            screen_name: handle
          }, (err, data, response) => {
              console.log(`${screen_name} followed back!`);
          });
    
    /*T.get('statuses/user_timeline', {
    screen_name: handle,
      count: 1
    }, (err, data, response) => {
       data.forEach(t => {
        //console.log(t.text);
        //console.log(t.user.screen_name);
       // console.log(t.id_str);
        //console.log('\n');
         T.post('favorites/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${data.text} tweet liked!`);
          });
         
           T.post('statuses/retweet/:id', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${data.text} tweet RT!`);
          });
      });
    });*/
    
    
    /*T.get('followers/list', {
      screen_name: handle,
      count: 5
      }, (err, data, response) => {
        data.users.forEach(t => {
          T.post('friendships/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${t.screen_name} followed from New Follower!`);
          });
        });
      //console.log(data);
    });*/
    
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
  const channelName = "https://parttimedime.com";
  //return `Hi ${name} Thanks for .... \n Happy ${dayName} 😊😊 `; // your message
  // My message   
  return `Hello ${name} Thank you for joining my social media network. \n If you want to check out my blog click-> ${channelName} \n Happy to chat anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = AutoDM;
