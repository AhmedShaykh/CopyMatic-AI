import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">

                <div className="col-container">
                    <div className="brand">
                        <img src="https://cdn.copymatic.ai/static/logo.svg" alt="copymatic" />
                        <h1>
                            Save time. Get inspired.
                        </h1>
                        <p>
                            Automatically generate blog articles, website copy, landing pages & digital ads for your business in seconds. Unleash the most advanced AI writer to boost your traffic and productivity.
                        </p>
                        <p>
                            © 2022 Copymatic. All rights reserved.
                        </p>
                    </div>

                    <div className="col">
                        <h4>USE CASES</h4>
                        <ul>
                            <li>AI Rewriter</li>
                            <li>AI Article Writer</li>
                            <li>AI Content Generator</li>
                            <li>About Us Page Generator</li>
                            <li>Subject Lines Generator</li>
                            <li>AI Text Completer</li>
                            <li>Text Rewriter & Spinner</li>
                            <li>Auto Article Generator</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>ABOUT</h4>
                        <ul>
                            <li>Pricing</li>
                            <li>Login</li>
                            <li>Signup</li>
                            <li>Blog</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h4>COPYMATIC</h4>
                        <ul>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>@CopymaticAI</li>
                            <li>Affiliate Program</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer;