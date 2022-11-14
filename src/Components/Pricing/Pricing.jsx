import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import './Pricing.css';

const Pricing = () => {

    const [price, SetPrice] = useState(29);

    const changeprice = (event, price) => {
        SetPrice(price);
    };

    return (
        <Box className='price-box'>
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

export default Pricing;