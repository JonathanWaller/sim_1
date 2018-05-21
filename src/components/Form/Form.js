import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(){
        super();
        this.state={
            url: '',
            productName:'',
            price: 0
        }
    }

    render(){
        return(
            <div>
                <div className = 'form-container'>
                    <div className="img-box">
                        <img />
                    </div>
                    <p>Image URL</p>
                    <input />
                    <p>Product Name</p>
                    <input />
                    <p>Price</p>
                    <input />
                    <div className='form-button'>
                        <button>Cancel</button>
                        <button>Add to Inventory</button>
                    </div>
                </div>
                
            </div>
        )
    }

}



export default Form;