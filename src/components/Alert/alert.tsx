import React from 'react';
import axios from 'axios';
import store from './../../redux/store';
import { Alert } from 'reactstrap';


import email from './../email/mailgun'

export interface alertProps{}
export interface alertState {
    listCrypto:any;
    BTC:boolean,
    ETH:boolean,
    XRP:boolean,
    LTC:boolean,
    EOS:boolean,
    price:any,
    priceNow:number,
    hour:boolean,
    minute:boolean,
    alertNoMoney:boolean,
    alertNoUser:boolean
}

export default class alert extends React.Component<alertProps,alertState> {
    constructor(props:alertProps){
        super(props)
        this.state = {
            listCrypto:[],
            BTC:false,
            ETH:false,
            XRP:false,
            LTC:false,
            EOS:false,
            price:null,
            priceNow:0,
            hour:true,
            minute:false,
            alertNoMoney:false,
            alertNoUser:false
        }
        this.handleCheckedBTC = this.handleCheckedBTC.bind(this);
        this.handleCheckedETH = this.handleCheckedETH.bind(this);
        this.handleCheckedXRP = this.handleCheckedXRP.bind(this);
        this.handleCheckedLTC = this.handleCheckedLTC.bind(this);
        this.handleCheckedEOS = this.handleCheckedEOS.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.checkAlert = this.checkAlert.bind(this);
        this.handleTimeHours = this.handleTimeHours.bind(this);
        this.handleTimeMinute = this.handleTimeMinute.bind(this);
    }
    url = 'https://rest.coinapi.io'

    handleChangePrice(event:any){
        this.setState(({price: event.target.value}), () => {
            // (this.state.) ? this.listCrypto("BTC", true) : this.listCrypto("BTC", false)
            console.log(this.state.price)
        })
        
    }
    checkAlert(){
        const time = 60
        if(this.state.hour)
            setInterval(this.sendAlert, 1000 * time * time)
        else if(this.state.minute)
            setInterval(this.sendAlert, 1000 * time)
        this.sendAlert(this.state.listCrypto);
    }
    sendAlert(listcrypto:[]){
        console.log("ICI", listcrypto)
        this.setState({alertNoMoney: false, alertNoUser:false})
        if(listcrypto.length > 0){
            listcrypto.map((crypto:string)=>{
                console.log("crypto",crypto)
                    axios.get(this.url+'/v1/exchangerate/'+crypto+'/USD?apikey=873874D3-3B6F-471B-987E-84190F3A32AF',{
                            params:{'X-RateLimit-Limit': 1000000}})
                            .then(res => {
                                    this.setState(({ priceNow:res.data.rate }),()=> {
                                    if(this.state.price > this.state.priceNow){
                                        const state = store.getState();
                                        console.log("STATE :", state)
                                        if(state.user.email === "" || state.user.name === ""){
                                            console.log("No User")
                                            this.setState({alertNoUser: true})
                                    }
                                    else{
                                        console.log("User", state)
                                        email(state.user, crypto, this.state.priceNow)
                                    }
                                    }
                                })
                            })
                        })
        }
        else {
            console.log("par la ")
            this.setState({alertNoMoney: true})
            }
    }
    handleCheckedBTC () {
        this.setState(({BTC: !this.state.BTC}), () => {
            (this.state.BTC) ? this.listCrypto("BTC", true) : this.listCrypto("BTC", false)
        })
    }
    handleCheckedETH () {
        this.setState(({ETH: !this.state.ETH}), () => {
            (this.state.ETH) ? this.listCrypto("ETH", true) : this.listCrypto("ETH", false)
        })
    }
    handleCheckedXRP () {
        this.setState(({XRP: !this.state.XRP}), ()=>{
            (this.state.XRP) ? this.listCrypto("XRP", true) : this.listCrypto("XRP", false)
        })
    }
    handleCheckedLTC () {
        this.setState(({LTC: !this.state.LTC}), ()=>{
            (this.state.LTC) ? this.listCrypto("LTC", true) : this.listCrypto("LTC", false)
        })
    }
    handleCheckedEOS () {
        this.setState(({EOS: !this.state.EOS}), ()=>{
            (this.state.EOS) ? this.listCrypto("EOS", true) : this.listCrypto("EOS", false)
        })
    }
    handleTimeHours(){
            this.setState({hour:true, minute: false})
        }
    handleTimeMinute(){
            this.setState({hour:false, minute: true})
        }

    listCrypto(value:string, checked:boolean){
        // const index = this.state.listCrypto.indexOf(value);
        console.log("click", value, checked)
        
        if (checked) {
            this.setState({
                listCrypto: this.state.listCrypto.concat(value),
            })
        }
        else {
                var array = [...this.state.listCrypto]
                var index = array.indexOf(value)
                array.splice(index, 1)
                this.setState({listCrypto: array})
            }
    }
        render(){
            console.log(store.getState())
            return(
                <div className="justify-content-start">
                    {(this.state.alertNoMoney)
                    ?
                    <Alert color="danger">
                        <strong>Please choose Crypto!</strong>
                    </Alert>
                    :
                        <div></div>
                    }

                    {(this.state.alertNoUser)
                    ?
                    <Alert color="danger" >
                        <strong>Please registre you !</strong> On the top 
                    </Alert>
                    :
                        <div></div>
                    }
                <span className="crypto">Choose your Crypto : {this.state.listCrypto.map((cripto:any)=><p className="crypto-name">{cripto},</p>)}</span>
                    <div className="col alert">
                        <div className="row md-checkbox">
                            <label >BTC</label>
                            <input type="checkbox" value="BTC" checked={this.state.BTC} onChange={this.handleCheckedBTC}/>
                        </div>
                        <div className="row md-checkbox">
                            <label>ETH</label>
                            <input type="checkbox" value="ETH" checked={this.state.ETH} onChange={this.handleCheckedETH}/>
                        </div>
                            <div className="row md-checkbox">
                            <label>XRP</label>
                            <input type="checkbox" value="XRP" checked={this.state.XRP} onChange={this.handleCheckedXRP}/>
                        </div>
                        <div className="row md-checkbox">
                            <label>LTC</label>
                            <input type="checkbox" value="LTC" checked={this.state.LTC} onChange={this.handleCheckedLTC}/>
                        </div>
                        <div className="row md-checkbox">
                            <label>EOS</label>
                            <input type="checkbox" value="EOS" checked={this.state.EOS} onChange={this.handleCheckedEOS}/>
                        </div>
                    </div>
                    <div className="col alert-price">
                        <div className="row">
                            <span>Alert me when the price is below</span>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <select value={this.state.price} onChange={this.handleChangePrice} className="custom-select">
                                    <option selected>Price</option>
                                    <option value="2000">2000</option>
                                    <option value="5000">5000</option>
                                    <option value="7000">7000</option>
                                </select>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" onClick={this.checkAlert}type="button">Done</button>
                                </div>
                            </div>
                        </div>
                        <div className="time">
                            <div className="md-checkbox">
                                <label>Hours</label>
                                <input type="checkbox" checked={this.state.hour} onChange={this.handleTimeHours}/>
                            </div>
                            <div className="md-checkbox">
                                <label>Minute</label>
                                <input type="checkbox" checked={this.state.minute} onChange={this.handleTimeMinute}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
;
