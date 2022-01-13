import './quanityPicker.css';
import React, {useState} from 'react';

const QuanityPicker = (props) => {

    const [quantity, setQuanity] = useState(1);

    const increment = ()=> {
        
        let val = quantity + 1;
        setQuanity(val);
        props.onChange(val);
    }

    const decrement = () => {
        if (quantity > 1) {
            
            let val = quantity - 1;
            setQuanity(val);
            props.onChange(val);
        }
            
    };

    return (
        <div className="quanityPicker">
            <button onClick={increment}> + </button>
            <label> {quantity} </label>
            <button onClick={decrement}> - </button>
        </div>
    );
}

export default QuanityPicker