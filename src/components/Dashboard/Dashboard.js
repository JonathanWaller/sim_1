import React, {Component} from 'react';
import Product from '../Product/Product';
import './Dashboard.css';

class Dashboard extends Component {

    render(){
        return (
            <div>
                <div className='dash-container'>
                    <p>Dashboard</p>
                    <Product />
                </div>
            </div>
        )
    }
}




export default Dashboard;