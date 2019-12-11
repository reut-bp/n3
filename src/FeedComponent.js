import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import feed from "./resources/feed"
import PostMessageComponent from "./PostMessageComponent"


export default class FeedComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    calculateDate  = date => {
    let newDate = new Date(date * 1000);
    let h= newDate.getHours();
    let min = "0" + newDate.getMinutes();
    let sec = "0" + newDate.getSeconds();
     return h + ":" + min + ":" + sec ;
    }

  render() {

    return (
    <div>
    <h1> My Feed </h1>
        <Feed> {
            feed.map((feed) => {
                return (
                         <Feed.Event>
                           <Feed.Label image='/images/avatar/small/joe.jpg' />
                           <Feed.Content>
                             <Feed.Summary>
                              <a>{feed.nickname}</a> posted a new message
                               <Feed.Date> {this.calculateDate(feed.date)}</Feed.Date>
                             </Feed.Summary>
                             <Feed.Extra text>{feed.message}</Feed.Extra>
                             <Feed.Meta>
                               <Feed.Like>
                                 <Icon name='like' />5 Likes
                               </Feed.Like>
                             </Feed.Meta>
                           </Feed.Content>
                         </Feed.Event>
                )
            }
            )
         }
     <Feed.Event>
       <Feed.Label image='/images/avatar/small/joe.jpg' />
       <Feed.Content>
         <Feed.Summary>
           <a>Joe Henderson</a> posted on his page
           <Feed.Date>3 days ago</Feed.Date>
         </Feed.Summary>
         <Feed.Extra text>
           Ours is a life of constant reruns. We're always circling back to where
           we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
         </Feed.Extra>
         <Feed.Meta>
           <Feed.Like>
             <Icon name='like' />5 Likes
           </Feed.Like>
         </Feed.Meta>
       </Feed.Content>
     </Feed.Event>

{/*     <Feed.Event> */}
{/*       <Feed.Label image='/images/avatar/small/justen.jpg' /> */}
{/*       <Feed.Content> */}
{/*         <Feed.Summary> */}
{/*           <a>Justen Kitsune</a> added <a>2 new photos</a> of you */}
{/*           <Feed.Date>4 days ago</Feed.Date> */}
{/*         </Feed.Summary> */}
{/*         <Feed.Extra images> */}
{/*           <a> */}
{/*             <img src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
{/*           </a> */}
{/*           <a> */}
{/*             <img src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
{/*           </a> */}
{/*         </Feed.Extra> */}
{/*         <Feed.Meta> */}
{/*           <Feed.Like> */}
{/*             <Icon name='like' /> */}
{/*             41 Likes */}
{/*           </Feed.Like> */}
{/*         </Feed.Meta> */}
{/*       </Feed.Content> */}
{/*     </Feed.Event> */}
  </Feed>

  <PostMessageComponent />
  </div>
)}

}

