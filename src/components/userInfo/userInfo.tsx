import React from 'react'
import { Control, Form } from 'react-redux-form';
import store from './../../redux/store';

export interface userInfoProps{}

export interface userInfoState {
    username:string;
    email:string;
}

export default class userInfo extends React.Component<userInfoProps,userInfoState> {
    constructor(props:userInfoProps) {
        super(props)
        this.state={
            username:'',
            email:''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
      }
       
      handleSubmit(user:any){
        alert(`Your registration detail: \n 
               Email: ${user.email} \n 
               Name: ${user.name}`)
        
               console.log(store.getState())
        
      }
      render() {
        return (
          <Form
            model="user"
            onSubmit={(user) => this.handleSubmit(user)}
            className="form-group form-inline my-2 my-lg-0"
          >
            <label htmlFor="user.email"></label>
            <Control.text className="form-control mr-sm-2" model="user.email" id="user.email" placeholder="email@email.com"/>
    
            <label htmlFor="user.name"></label>
            <Control.text className="form-control mr-sm-2" model="user.name" id="user.name" placeholder="Name"/>
    
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Finish registration!
            </button>
          </Form>
        );
      }
    }