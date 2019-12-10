import React from 'react';

export interface alertProps{}
export interface alertState {}

export default class alert extends React.Component<alertProps,alertState> {
    constructor(props:alertProps){
        super(props)
        this.state = {}
    }
    //     'BTC',
    //     'ETH',
    //     'XRP',
    //     'LTC',
    //     'EOS'
    paramAlert(){}

        render(){
            return(
                <div className="justify-content-start">
                    <span>Choose your Crypto</span>
                    <div className="col">
                        <div className="row md-checkbox">
                            <label >BTC</label>
                            <input type="checkbox"/>
                        </div>
                        <div className="row md-checkbox">
                            <label>ETH</label>
                            <input type="checkbox"/>
                        </div>
                            <div className="row md-checkbox">
                            <label>XRP</label>
                            <input type="checkbox"/>
                        </div>
                        <div className="row md-checkbox">
                            <label>LTC</label>
                            <input type="checkbox"/>
                        </div>
                        <div className="row md-checkbox">
                            <label>EOS</label>
                            <input type="checkbox"/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <span>Alert me when the price is below</span>
                        </div>
                        <div className="row">
                            <div className="input-group">
                                <select className="custom-select" id="inputGroupSelect04">
                                    <option selected>Price</option>
                                    <option value="1">2000</option>
                                    <option value="2">5000</option>
                                    <option value="3">7000</option>
                                </select>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">Done</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
;
