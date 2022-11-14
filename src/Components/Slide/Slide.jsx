import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import './Slide.css';

const Slide = () => {

    const [price, SetPrice] = useState(29);

    const changeprice = (event, price) => {
        SetPrice(price);
    };

    return (
        <Box className='slider-box'>
            <Box className='swticher-btn'>
                <button>Monthly</button>
                <button>Yearly</button>

                <span className='free'>4 month's free</span>
            </Box>
            <Box className='slide-text'>
                <p>
                    How many words would you like per month?
                </p>
            </Box>
            <Box className='slide'>
                <p className='left'>15,000</p>
                <p className='right'>32,000,000</p>
            </Box>
            <Box className="slider-area">
                <Slider display="flex" flexDirection="column" alignItems="center"
                    style={{ width: 700, color: "#2615C7" }}
                    min={10}
                    max={100}
                    step={20}
                    price={price}
                    marks
                    onChange={changeprice} />
            </Box>
            <Box className="pricing-area">
                <Box className="pricing-top"></Box>
                <Box className="pricing-bottom"></Box>
            </Box>
        </Box>
    )
};

export default Slide;