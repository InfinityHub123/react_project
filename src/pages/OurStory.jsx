import React from 'react';
import Header from '../components/Header';
import Sticky from '../components/Sticky';
import Footer from '../components/Footer';

const OurStory = () => {
    return (
        <>
            <Header />
            <div
                className="w-screen h-[450px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(./images/pic1.jpg)' }}
            ></div>
            <Sticky />

            <section className="py-6 md:py-10 bg-white">
                <h1 className="text-center font-medium text-3xl md:text-4xl mb-6 md:mb-10">Our Values</h1>
                <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-6 md:gap-8 w-full mx-auto px-4">
                    <div className="flex flex-col items-center w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                        <img className="h-14 w-14 md:h-16 md:w-16 mb-4" src="./images/community.png" alt="Community" />
                        <div className="font-bold text-lg md:text-xl">Community</div>
                        <p className="text-center mt-2 text-gray-600 text-sm md:text-base">Building a strong community around us.</p>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                        <img className="h-14 w-14 md:h-16 md:w-16 mb-4" src="./images/appreciation.png" alt="Appreciation" />
                        <div className="font-bold text-lg md:text-xl">Appreciation</div>
                        <p className="text-center mt-2 text-gray-600 text-sm md:text-base">We appreciate our customers and their loyalty.</p>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                        <img className="h-14 w-14 md:h-16 md:w-16 mb-4" src="./images/quality.png" alt="Quality" />
                        <div className="font-bold text-lg md:text-xl">Quality</div>
                        <p className="text-center mt-2 text-gray-600 text-sm md:text-base">Quality is our top priority in everything we do.</p>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                        <img className="h-14 w-14 md:h-16 md:w-16 mb-4" src="./images/reliability.png" alt="Reliability" />
                        <div className="font-bold text-lg md:text-xl">Reliability</div>
                        <p className="text-center mt-2 text-gray-600 text-sm md:text-base">You can count on us for reliability.</p>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/4 p-4 bg-white shadow-lg rounded-lg">
                        <img className="h-14 w-14 md:h-16 md:w-16 mb-4" src="./images/access.png" alt="Accessibility" />
                        <div className="font-bold text-lg md:text-xl">Accessibility</div>
                        <p className="text-center mt-2 text-gray-600 text-sm md:text-base">We have stores all over the country.</p>
                    </div>
                </div>
            </section>


            <div
                className="w-screen h-[450px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(./images/images.jpg)' }}
            >
                <section className="py-6 md:py-10 text-center">
                    <h2 className="text-center font-bold text-2xl md:text-3xl mb-6 md:mb-10">Our Story</h2>
                    <div className="max-w-3xl md:max-w-4xl mx-auto px-4">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                            At MyBurger, we started with a simple mission: to create the best burger experience possible. Over the years, we've grown and evolved, but our commitment to quality and community has remained steadfast.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                            Our ingredients are sourced from local farms and trusted suppliers, ensuring every bite is fresh and delicious. We believe in supporting our community and giving back through various initiatives and events.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            Join us at MyBurger and be a part of our story. We look forward to serving you the best burgers you've ever tasted!
                        </p>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}

export default OurStory;
