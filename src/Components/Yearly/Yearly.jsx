import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import './Yearly.css';

const Yearly = () => {

    const [price, SetPrice] = useState(32);

    const changeprice = (event, price) => {
        SetPrice(price);
    };

    return (
        <div>
            <Box className="slider-area">
                <Box className='slide-text'>
                    <p>
                        How many words would you like per month?
                    </p>
                </Box>
                <Box className='slide'>
                    <p className='left'>15,000</p>
                    <p className='right'>32,000,000</p>
                </Box>
                <Slider display="flex" flexDirection="column" alignItems="center"
                    style={{ width: 700, color: "#2615C7" }}
                    min={6}
                    max={432}
                    step={25}
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
                                <span className="price-number">{price}</span>
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
                <Box className="pricing-box enter">
                    <Box className="pb">
                        <Box className="pricing-top">
                            <h5>Enterprise</h5>
                            <Box className="price">
                                <span className="custom">Custom</span>
                                <button className='sale-btn'>Contact Sales</button>
                            </Box>
                        </Box>
                        <Box className="pricing-body">
                            <ul>
                                <li>
                                    <strong className='plus'>Everything in Pro, plus</strong>
                                </li>
                                <li>Dedicated account manager</li>
                                <li>Custom tools</li>
                                <li>Advanced integrations</li>
                                <li>Volume-based pricing</li>
                                <li>Premium technical support</li>
                                <li>SEO campaign manager</li>
                                <li>Human editing & proofreading</li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Yearly;