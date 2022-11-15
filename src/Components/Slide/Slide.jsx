import { useState } from 'react';
import Monthly from '../Monthly/Monthly';
import Yearly from '../Yearly/Yearly';
import Box from '@mui/material/Box';

import './Slide.css';

const Slide = () => {

    const [select, setSelect] = useState(false);

    const handleSelect = () => setSelect(!select);

    return (
        <Box className='slider-box'>
            <Box className='swticher-btn'>
                <button onClick={handleSelect}>Monthly</button>
                <button onClick={handleSelect}>Yearly</button>

                <span className='free'>4 month's free</span>
            </Box>
            {!select ? (<Monthly style={{ display: "inline" }}/>) : (<Yearly style={{ display: "none" }} />) ? (<Yearly style={{ display: "inline" }} />) : (<Monthly style={{ display: "none" }} />)}
        </Box>
    )
};

export default Slide;