import Slide from '../Slide/Slide';

import './Pricing.css';

const Pricing = () => {
    return (
        <div name='price' className='price-box'>
            <div className="title">
                <h4>Pricing</h4>
            </div>
            <div className="text">
                <h1>Start writing 10x faster with AI</h1>
            </div>
            <p>Our plans are simple and transparent, they are based on the number of generated words on a rolling monthly basis</p>
            <Slide />
        </div>
    )
};

export default Pricing;