import React from 'react';


function TableOrder() {




    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
            <div style={{width: '91%'}}>

            <table className="table table-bordered" style={{border: '1px solid #5d5d5d'}}>
                <thead>
                    <tr style={{backgroundColor: '#eae9e9'}}>
                    <th scope="col">No.</th>
                    <th scope="col">Pair</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Price</th>
                    <th scope="col" style={{textAlign: 'center'}}>Gain/Loss ($)</th>
                    <th scope="col" style={{textAlign: 'center'}}>Action</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor: 'white'}}>
                    <tr>
                    <th scope="row">1</th>
                    <td>BTC/USDT</td>
                    <td>0.005</td>
                    <td>8956</td>
                    <td style={{width: '180px'}}>-1.05</td>
                    <td>
                        <div style={{ display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <span style={{cursor: 'pointer', color: 'blue', fontSize: '17px'}}>Close</span>
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )

};

export default TableOrder;