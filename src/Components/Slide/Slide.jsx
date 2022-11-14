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
                <Box className="pricing-box pro">
                    <Box className="pb">
                        <Box className="pricing-top">
                            <h5>Pro</h5>
                            <Box className="price">
                                <span className="upper">$</span>
                                <span className="price-number">19</span>
                                <span className="mo-discount">/mo</span>
                                <button className='price-btn'>Start Free Trial</button>
                            </Box>
                        </Box>
                        <Box className="pricing-body">
                            <ul>
                                <li>Access to all tools</li>
                                <li>Unlimited user seats</li>
                                <li>Unlimited projects</li>
                                <li>25+ languages</li>
                                <li>API access</li>
                                <li>Wordpress plugin</li>
                                <li>SEO keyword research</li>
                                <li>Plagiarism checker <span>(5,000 free words)</span></li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
                <Box className="pricing-box pro">
                    <Box className="pb">
                        <Box className="pricing-top">
                            <h5>Pro</h5>
                            <Box className="price">
                                <span className="upper">$</span>
                                <span className="price-number">19</span>
                                <span className="mo-discount">/mo</span>
                                <button className='price-btn'>Start Free Trial</button>
                            </Box>
                        </Box>
                        <Box className="pricing-body">
                            <ul>
                                <li>Access to all tools</li>
                                <li>Unlimited user seats</li>
                                <li>Unlimited projects</li>
                                <li>25+ languages</li>
                                <li>API access</li>
                                <li>Wordpress plugin</li>
                                <li>SEO keyword research</li>
                                <li>Plagiarism checker <span>(5,000 free words)</span></li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
                {/* <Box className="pricing-box enterprise">
                    <h5>Enterprise</h5>
                </Box> */}
            </Box>
        </Box>
    )
};

export default Slide;