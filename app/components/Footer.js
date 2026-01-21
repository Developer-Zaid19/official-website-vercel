import React from "react";
 

import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

export default function Foooter() {
    return (
        <footer className="bg-(--bgt) shadow-sm z-70 border-t-5 border-(--border)">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row md:justify-around">
                    {/* Logo + About */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="font-semibold text-2xl text-center w-full text-(--hadding)">&lt;{process.env.NEXT_PUBLIC_NAME}/&gt;</span>
                        </div>
                        <p className="text-center text-(--text)">
                            Learn programming in simple and practical way.
                        </p>
                    </div>


                    {/* Social Media */}
                    <div>
                        <h3 className="text-(--text) font-semibold mt-3 md:mt-0">Follow Us</h3>
                        <div className="flex gap-4 text-(--text) text-lg">
                            <ul>
                                <li>
                                    <a href="https://youtube.com/@Developer-zaid" target="_blank" rel="noreferrer" className="hover:text-red-600 flex items-center gap-2"><FaYoutube /> YouTube</a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/developer_.zaid" target="_blank" rel="noreferrer" className="hover:text-pink-600 flex items-center gap-2"><FaInstagram /> Instagram</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/developer-zaid29" target="_blank" rel="noreferrer" className="hover:text-blue-500 flex items-center gap-2"><FaLinkedin /> Linkedin</a>
                                </li>
                                {/* <li>
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-2"><FaFacebook /> Facebook</a>
                                </li> */}
                            </ul>

                        </div>
                    </div>

                    {/* Contact Info */}
                    {/* <div>
                        <h3 className="text-white font-semibold mb-3">Contact Us</h3>
                        <ul className="space-y-2 text-white">
                            <li className="flex items-center gap-2"><FaEnvelope /> support@{process.env.NEXT_PUBLIC_NAME}.domain</li>
                            <li className="flex items-center gap-2"><FaPhone /> +91 000000000</li>
                        </ul>
                    </div> */}
                </div>

                {/* Newsletter Signup */}
                {/* <div className="mt-10">
                    <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
                    <form className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full text-white placeholder:text-grey-400 sm:w-64 px-3 py-2 border rounded-md text-sm  focus:ring-2  focus:outline-(--maincolor)"
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-800"
                        >
                            Subscribe
                        </button>
                    </form>
                </div> */}

                {/* Bottom Bar */}
                <div className="border-t mt-10 pt-6 flex flex-col justify-center items-center text-sm text-(--text) text-center">
                    <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_NAME}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
