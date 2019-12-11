import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './Menu.css';
import { Button, Segment, Form } from 'semantic-ui-react'
import feed from "./resources/feed"
import './PostMessage.css';

export default class PostMessageComponent extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
        nickname: '',
        message: ''
     };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);

//        let data = JSON.parse(feed);  //parse the JSON
//        data.employees.push({
//            nickname:this.state.nickname,
//            type:"MSG",
//            avatar:"",
//            date: new Date(),
//            message: this.state.message
//        });
  }


  nicknameChangeHandler = (event) => {
    this.setState({nickname: event.target.value});
  }

   messageChangeHandler = (event) => {
      this.setState({message: event.target.value});
   }

  render() {
    return (
        <form onSubmit={this.mySubmitHandler}>
        <h1> Post New Message! </h1>
        <p>nickname:</p>
        <input
            type='text'
            onChange={this.nicknameChangeHandler}
        />

       <p>message:</p>
         <input
            type='text'
            onChange={this.messageChangeHandler}
        />

        <input
            type='submit'
        />
        </form>
    );
  }

//   handleSubmit = (event) => {
//       event.preventDefault();
//       const data = new FormData(event.target);
//
//
// //        let data = JSON.parse(feed);  //parse the JSON
// //        data.employees.push({        //add the employee
// //            nickname:"Mike",
// //            type:"MSG",
// //            avatar:"",
// //            date: new Date(),
// //            message:""
// //        });
//   }
//
//   render() {
//
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="Nickname">Nickname</label>
//                 <input id="nickname" name="nickname" type="text" />
//
//                 <label htmlFor="message">message</label>
//                 <input id="message" name="message" type="text" />
//
//             <button>Post!</button>
//       </form>
//         )
//   }

}