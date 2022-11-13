import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="content">
                    <div className='col-1'>
                        <h4>WRITE BETTER, FASTER</h4>
                        <h1>Generate Content & Copy In Seconds with AI</h1>
                        <p>
                            Use AI to boost your traffic and save hours of work. Automatically write unique, engaging and high-quality copy or content: from long-form blog posts or landing pages to digital ads in seconds.
                        </p>
                        <div className='cta'>
                            <button className='btn'>
                                Start Writing For Free
                            </button>
                            <p className='card'>
                                No credit card required
                            </p>
                        </div>
                    </div>
                    <div className='col-2'>
                        <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/I1Grv_SqNPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero;