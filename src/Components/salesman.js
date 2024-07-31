import React from 'react'
import Sales from './sales'
import '../Components/sales.css'

const salesman = () => {
    return (
        <div className='salesman_Main'>
            <h1 className='heading'>Overview</h1>
            <div className='sales_box'>
                <div className='salesman'>
                    <p>Total Leads</p>
                    <h1>50</h1>
                </div>
                <div className='salesman'>
                    <p>Total Leads</p>
                    <h1>50</h1>
                </div>
            </div>
            <div className='chart'>
                <div className='saleschart'>
                    <Sales />
                </div>
            </div>
        </div>
    )
}

export default salesman
