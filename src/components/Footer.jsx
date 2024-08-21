import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10 mt-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('branding').showModal()}>Branding</a>
                    <dialog id="branding" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Branding</h3>
                            <p className="py-4 text-center">At MyBurger, branding is at the core of our identity. From our juicy, mouthwatering burgers to our friendly customer service, everything we do is designed to create a memorable experience. Our brand is more than just a name—it's a promise of quality, flavor, and satisfaction. We aim to make MyBurger your go-to choice whenever you're craving a delicious burger experience.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('Marketing').showModal()}>Marketing</a>
                    <dialog id="Marketing" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Marketing</h3>
                            <p className="py-4 text-center">At MyBurger, our marketing strategy is as bold and flavorful as our burgers. We believe in connecting with our customers on a personal level, sharing not just our products, but the passion and story behind them. Through creative campaigns, engaging social media content, and community involvement, we aim to build lasting relationships with our customers. Our marketing is more than just advertising—it's about creating a community of burger lovers who share our love for quality and taste.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('Advertisement').showModal()}>Advertisement</a>
                    <dialog id="Advertisement" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Advertisement</h3>
                            <p className="py-4 text-center">Our advertisement approach at MyBurger is designed to make your mouth water before you even step into our restaurant. We focus on showcasing the deliciousness of our burgers through vibrant visuals, enticing descriptions, and real customer testimonials. Whether it's a billboard, a social media ad, or a TV spot, our goal is to make you crave that first bite. We know that a picture is worth a thousand words, but one bite of a MyBurger is worth a thousand pictures.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    
                   
                </nav>
                <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover text-lg" onClick={() => document.getElementById('Contact').showModal()}>Contact</a>
                    <dialog id="Contact" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Contact</h3>
                            <p className="py-4 text-center">Reach out to us at MyBurger! Whether you have questions, feedback, or simply want to say hello, we're always here to listen. Your input helps us grow and improve, so don't hesitate to get in touch.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('Jobs').showModal()}>Jobs</a>
                    <dialog id="Jobs" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Jobs</h3>
                            <p className="py-4 text-center">Join the MyBurger family! We're always on the lookout for passionate, talented individuals who want to help us deliver the best burger experience to our customers. Check out our available positions and start your journey with us today.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('About').showModal()}>About</a>
                    <dialog id="About" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">About</h3>
                            <p className="py-4 text-center">At MyBurger, our story is built on a love for great food and exceptional service. We're more than just a restaurant; we're a community that shares a passion for quality, flavor, and unforgettable experiences. Learn more about our journey and what drives us to keep serving the best burgers around.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('Terms').showModal()}>Terms of use</a>
                    <dialog id="Terms" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Terms of use</h3>
                            <p className="py-4 text-center">Welcome to MyBurger! By using our services, you agree to be bound by these Terms of Use. Our terms outline the rules and guidelines for using our website and services, ensuring a positive experience for everyone. Please read them carefully.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('Privacy').showModal()}>Privacy policy</a>
                    <dialog id="Privacy" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Privacy policy</h3>
                            <p className="py-4 text-center">At MyBurger, we value your privacy. Our Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services. Your trust is important to us, and we are committed to safeguarding your data.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                    <a className="link link-hover text-lg" onClick={() => document.getElementById('Cookie').showModal()}>Cookie policy</a>
                    <dialog id="Cookie" className="modal">
                        <div className="modal-box bg-slate-300">
                            <h3 className="font-bold text-lg">Cookie policy</h3>
                            <p className="py-4 text-center">MyBurger uses cookies to enhance your browsing experience. Our Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences. We aim to be transparent about our practices to ensure you have control over your data.</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                   
                </nav>
            </footer>
            <footer className="footer bg-black text-white border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <img className='w-32 h-auto' src="./images/logo.png" alt="" />
                    <p>
                        My Burger
                        <br />
                        Bite into Happiness
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.twitter.com/' >
                        
                            <svg
                                
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current hover:text-cyan-400 transition duration-200">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>

                        <a href='https://www.youtube.com/'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current hover:text-red-500 transition duration-200">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a href='https://www.facebook.com/'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current hover:text-blue-800 transition duration-200">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    )
}

export default Footer