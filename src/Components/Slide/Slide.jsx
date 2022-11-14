import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import './Slide.css';

const Slide = () => {

    const [price, SetPrice] = useState(29);

    const changeprice = (event, price) => {
        SetPrice(price);
    };

    return (
        <Box className='slider-box'>
            <Box className='swticher-btn'>
                <Button>Monthly</Button>
                <Button>Yearly</Button>
            </Box>
            <Slider display="flex" flexDirection="column" alignItems="center"
                style={{ width: 600 }}
                min={10}
                max={100}
                step={20}
                price={price}
                marks
                onChange={changeprice} />
        </Box>
    )
};

export default Slide;