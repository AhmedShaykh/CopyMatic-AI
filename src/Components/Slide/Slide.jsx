import { useState } from 'react';
import Monthly from '../Monthly/Monthly';
import Yearly from '../Yearly/Yearly';
import Box from '@mui/material/Box';

import './Slide.css';

const Slide = () => {

    const [select, setSelect] = useState(false);

    const handleSelect = () => setNav(!select);

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
            <Monthly />
            <Yearly />
        </Box>
    )
};

export default Slide;