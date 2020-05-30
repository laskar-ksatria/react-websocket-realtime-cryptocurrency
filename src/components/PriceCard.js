import React from 'react';

function PriceCard(props) {
    
    return (
        <div style={{width: '300px',display: 'flex', flexDirection: 'column' ,height: '175px', background: 'white', border: '1px solid grey', borderRadius: '5px', boxShadow: '3px 6px #888888'}}>
                
        <div style={{boxSizing: 'border-box',padding: '5px 10px 0px 10px', width: '100%', height: '15px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{fontWeight: '600'}}>
                {props.symbol} - USD
            </div>
            <div style={{fontSize: 'smaller'}}>
            Vol: {props[`${props.symbol}_vol`]}
            </div>
        </div>
        
        <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '19px'}}>
            <p>$  <span style={{color: props[`${props.symbol}_css`].marketColor, fontWeight: '500'}}>
                {props[`${props.symbol}_marketPrice`] ? props[`${props.symbol}_marketPrice`] : ""}
            </span></p>
        </div>

        <div style={{padding: '0 10px 0 10px', marginBottom: '10px',display: 'flex', justifyContent: 'space-between'}}>
            <div style={{textDecoration: 'none', cursor: 'pointer', fontWeight: '600', color: 'green'}}>Buy</div>
            <div style={{textDecoration: 'none', cursor: 'pointer', fontWeight: '600', color: 'red'}}>Sell</div>
        </div>

        {/* <div style={{cursor: 'pointer',fontWeight: '500',background: '#85ef47', height: '38px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            See detail
        </div> */}

        <div style={{color: props[`${props.symbol}_css`].color,cursor: 'pointer',fontWeight: '500',background: props[`${props.symbol}_css`].background, height: '38px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            See detail
        </div>

    </div>
    )
};

export default PriceCard;