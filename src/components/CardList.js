import React from 'react'
import PriceCard from './PriceCard';
import { w3cwebsocket } from 'websocket';
const client = new w3cwebsocket("wss://streamer.cryptocompare.com/v2?api_key=" + process.env.API_KEY)

class CardList extends React.Component {

    state = {
        BTC_marketPrice: null,
        BTC_lastPrice: null,
        BTC_vol: null,
        BTC_css: {color: 'black', background: '#cceabb', marketColor: 'black'},
        ETH_marketPrice: null,
        ETH_lastPrice: null,
        ETH_vol: null,
        ETH_css: {color: 'black', background: '#cceabb', marketColor: 'black'},
        LTC_marketPrice: null,
        LTC_lastPrice: null,
        LTC_vol: null,
        LTC_css: {color: 'black', background: '#cceabb', marketColor: 'black'},

    };

    componentDidMount() {
        client.onopen = () => {
            var subRequest = {
                "action": "SubAdd",
                "subs": [`5~CCCAGG~BTC~USD`, `5~CCCAGG~ETH~USD`, `5~CCCAGG~LTC~USD`]
            };
            client.send(JSON.stringify(subRequest))
        };

        client.onmessage = (message) => {
            let data = JSON.parse(message.data);
            console.log(data);
            if (data.FROMSYMBOL) {
                console.log(data.PRICE, data.FROMSYMBOL);
                
                let currencySymbol = data.FROMSYMBOL;
                if (currencySymbol === 'BTC') {
                    if(data.PRICE) {
                        if (this.state.BTC_lastPrice) {
                            this.setState({BTC_lastPrice: this.state.BTC_marketPrice})
                            this.setState({BTC_marketPrice: data.PRICE})
                            this.setState({BTC_vol: data.VOLUME24HOUR.toFixed(2)})
                            this.getCssColor('BTC', {lastPrice: this.state.BTC_lastPrice, marketPrice: this.state.BTC_marketPrice})
                        }else {
                            this.setState({BTC_lastPrice: data.PRICE});
                            this.setState({BTC_marketPrice: data.PRICE});
                            this.setState({BTC_vol: data.VOLUME24HOUR.toFixed(2)})
                        }
                    }
                }else if(currencySymbol === 'ETH') {
                   if (data.PRICE) {
                    if (this.state.ETH_lastPrice) {
                        this.setState({ETH_lastPrice: this.state.ETH_marketPrice})
                        this.setState({ETH_marketPrice: data.PRICE})
                        this.setState({ETH_vol: data.VOLUME24HOUR.toFixed(2)})
                        this.getCssColor('ETH', {lastPrice: this.state.ETH_lastPrice, marketPrice: this.state.ETH_marketPrice})
                    }else {
                        this.setState({ETH_lastPrice: data.PRICE});
                        this.setState({ETH_marketPrice: data.PRICE})
                        this.setState({ETH_vol: data.VOLUME24HOUR.toFixed(2)})
                    }
                   }
                }else if (currencySymbol === 'LTC') {
                    if (data.PRICE) {
                        if (this.state.LTC_lastPrice) {
                            this.setState({LTC_lastPrice: this.state.LTC_marketPrice})
                            this.setState({LTC_marketPrice: data.PRICE})
                            this.setState({LTC_vol: data.VOLUME24HOUR.toFixed(2)})
                            this.getCssColor('LTC', {lastPrice: this.state.LTC_lastPrice, marketPrice: this.state.LTC_marketPrice})
                        }else {
                            this.setState({LTC_lastPrice: data.PRICE});
                            this.setState({LTC_marketPrice: data.PRICE})
                            this.setState({LTC_vol: data.VOLUME24HOUR.toFixed(2)})
                        }
                    }
                }
            }
            
        };
    };


    getCssColor = (type, data) => {
        let { lastPrice, marketPrice } = data;
        if (type === 'BTC') {
            if (lastPrice < marketPrice) {
                this.setState({BTC_css: {color: 'black', background: '#85ef47', marketColor: 'rgb(25, 197, 10)'}})
            }else if (lastPrice > marketPrice) {
                this.setState({BTC_css: {color: 'yellow', background: '#c40b13', marketColor: '#c40b13'}})
            }
        }else if (type === 'ETH') {
            if (lastPrice < marketPrice) {
                this.setState({ETH_css: {color: 'black', background: '#85ef47', marketColor: 'rgb(25, 197, 10)'}})
            }else if (lastPrice > marketPrice) {
                this.setState({ETH_css: {color: 'yellow', background: '#c40b13', marketColor: '#c40b13'}})
            }
        }else if (type === 'LTC') {
            if (lastPrice < marketPrice) {
                this.setState({LTC_css: {color: 'black', background: '#85ef47', marketColor: 'rgb(25, 197, 10)'}})
            }else if (lastPrice > marketPrice) {
                this.setState({LTC_css: {color: 'yellow', background: '#c40b13', marketColor: '#c40b13'}})
            }
        }
    }



    render() {
        return(
            <div style={{marginTop: '70px', display: 'flex', justifyContent: 'space-around', padding: '0 20px 0 20px'}}>
                 <PriceCard symbol="BTC" BTC_vol={this.state.BTC_vol} BTC_marketPrice={this.state.BTC_marketPrice} BTC_css={this.state.BTC_css} />
                 <PriceCard symbol="ETH" ETH_vol={this.state.ETH_vol} ETH_marketPrice={this.state.ETH_marketPrice} ETH_css={this.state.ETH_css} />
                 <PriceCard symbol="LTC" LTC_vol={this.state.LTC_vol} LTC_marketPrice={this.state.LTC_marketPrice} LTC_css={this.state.LTC_css} />
            </div>
        )
    }


};

export default CardList;
