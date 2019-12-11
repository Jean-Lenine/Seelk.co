import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'



export interface coinApiProps{}
export interface coinApiState {
    listExchangesBTC:any,
    listExchangesETH:any,
    listExchangesXRP:any,
    listExchangesLTC:any,
    listExchangesEOS:any,
    // listExchanges:any,
    iconUrl:any
}

export default class CoinApi extends React.Component<coinApiProps,coinApiState> {
    // moneys = [
    //     'BTC',
    //     'ETH',
    //     'XRP',
    //     'LTC',
    //     'EOS'
    // ];

    constructor(props:coinApiProps){
        super(props)
        this.state = {
            listExchangesBTC:[],
            listExchangesETH:[],
            listExchangesXRP:[],
            listExchangesLTC:[],
            listExchangesEOS:[],
            // listExchanges:[],
            iconUrl:[]
        }
    }
    url = 'https://rest.coinapi.io';

    // defineMoney = (Money:string):string => {

    //     return `/v1/exchangerate/${Money}/USD?apikey=873874D3-3B6F-471B-987E-84190F3A32AF`
    // }
    
    // callApi = (baseUrl:string, url:string, money:string) => {
        
    //     // this.IconExchanges();
    //     axios.get(baseUrl+url,{
    //         params:{'X-RateLimit-Limit': 1000000}})
    //         // axios.get(this.url+'/v1/exchanges?apikey=873874D3-3B6F-471B-987E-84190F3A32AF')
    //         .then(res => {
    //                 this.setState({ 'listExchanges${money}: res.data'});
    //         })
    //     }
      

    ListExchangesBTC(){
        // this.IconExchanges();
        axios.get(this.url+'/v1/exchangerate/BTC/USD?apikey=873874D3-3B6F-471B-987E-84190F3A32AF',{
            params:{'X-RateLimit-Limit': 1000000}})
            // axios.get(this.url+'/v1/exchanges?apikey=873874D3-3B6F-471B-987E-84190F3A32AF')
            .then(res => {
                this.setState({ listExchangesBTC:res.data });
            })
        }
    ListExchangesETH(){
        // this.IconExchanges();
        axios.get(this.url+'/v1/exchangerate/ETH/USD?apikey=873874D3-3B6F-471B-987E-84190F3A32AF',{
            params:{'X-RateLimit-Limit': 1000000}})
            // axios.get(this.url+'/v1/exchanges?apikey=873874D3-3B6F-471B-987E-84190F3A32AF')
            .then(res => {
                this.setState({ listExchangesETH:res.data });
            })
        }
    ListExchangesXRP(){
        // this.IconExchanges();
        axios.get(this.url+'/v1/exchangerate/XRP/USD?apikey=873874D3-3B6F-471B-987E-84190F3A32AF',{
            params:{'X-RateLimit-Limit': 1000000}})
            // axios.get(this.url+'/v1/exchanges?apikey=873874D3-3B6F-471B-987E-84190F3A32AF')
            .then(res => {
                this.setState({ listExchangesXRP:res.data });
            })
        }
    ListExchangesLTC(){
        // this.IconExchanges();
        axios.get(this.url+'/v1/exchangerate/LTC/USD?apikey=873874D3-3B6F-471B-987E-84190F3A32AF',{
            params:{'X-RateLimit-Limit': 1000000}})
            // axios.get(this.url+'/v1/exchanges?apikey=873874D3-3B6F-471B-987E-84190F3A32AF')
            .then(res => {
                this.setState({ listExchangesLTC:res.data });
            })
        }
    listExchangesEOS(){
        // this.IconExchanges();
        axios.get(this.url+'/v1/exchangerate/EOS/USD?apikey=873874D3-3B6F-471B-987E-84190F3A32AF',{
            params:{'X-RateLimit-Limit': 1000000}})
            // axios.get(this.url+'/v1/exchanges?apikey=873874D3-3B6F-471B-987E-84190F3A32AF')
            .then(res => {
                this.setState({ listExchangesEOS:res.data });
            })
        }
    componentDidMount(){
        // this.moneys.map(money => {this.callApi(this.url, this.defineMoney(money), money)})
        this.ListExchangesBTC()
        this.ListExchangesETH()
        this.ListExchangesXRP()
        this.ListExchangesLTC()
        this.listExchangesEOS()
    }
        render(){
            return(
                <div className="table-coin">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">USD</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"><FontAwesomeIcon icon={faBitcoin} /></th>
                                <td>{this.state.listExchangesBTC.asset_id_base}</td>
                                <td>{this.state.listExchangesBTC.asset_id_quote}</td>
                                <td>{this.state.listExchangesBTC.rate}</td>
                            </tr>
                            <tr>
                                <th scope="row"><FontAwesomeIcon icon={faEthereum} /></th>
                                <td>{this.state.listExchangesETH.asset_id_base}</td>
                                <td>{this.state.listExchangesETH.asset_id_quote}</td>
                                <td>{this.state.listExchangesETH.rate}</td>
                            </tr>
                            <tr>
                                <th scope="row"><FontAwesomeIcon icon={faCoins} /></th>
                                <td>{this.state.listExchangesXRP.asset_id_base}</td>
                                <td>{this.state.listExchangesXRP.asset_id_quote}</td>
                                <td>{this.state.listExchangesXRP.rate}</td>
                            </tr>
                            <tr>
                                <th scope="row"><FontAwesomeIcon icon={faCoins} /></th>
                                <td>{this.state.listExchangesLTC.asset_id_base}</td>
                                <td>{this.state.listExchangesLTC.asset_id_quote}</td>
                                <td>{this.state.listExchangesLTC.rate}</td>
                            </tr>
                            <tr>
                                <th scope="row"><FontAwesomeIcon icon={faCoins} /></th>
                                <td>{this.state.listExchangesEOS.asset_id_base}</td>
                                <td>{this.state.listExchangesEOS.asset_id_quote}</td>
                                <td>{this.state.listExchangesEOS.rate}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
        }
    }
;
