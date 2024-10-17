import React, { useState } from 'react';
import Signup from "@/components/Signup";
import Link from "next/link";
import styles from '../styles/nav.module.css';

const Nav = () => {
   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleSignupModal = () => {
       setIsSignupModalOpen(!isSignupModalOpen);
   };

   const toggleMobileMenu = () => {
       setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
       <section className="container mx-auto">
           <nav className="bg-white border-gray-200 pt-8 relative">
               <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                   <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                       <img src="/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                       <img src="/images/OHNUNGSGURU.svg" className="h-8" alt="Flowbite Logo" />
                   </a>
                   <button
                       data-collapse-toggle="navbar-default"
                       type="button"
                       className={`${styles['nav-toggle-btn']} ${isMobileMenuOpen ? styles['active'] : ''} inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden`}
                       aria-controls="navbar-default"
                       aria-expanded={isMobileMenuOpen}
                       onClick={toggleMobileMenu}
                   >
                       <span className="sr-only">Open main menu</span>
                       <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                       </svg>
                   </button>
                   <div className={`absolute top-full left-0 w-full md:static md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                       <ul className={`${styles['header-nav-list']} font-medium flex m-2 flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse`}>
                           <li className="p-2 border-b-2 border-white">
                               <a href="#" className={`${styles['nav-item']} block`}>Pricing</a>
                           </li>
                           <li className="p-2 border-b-2 border-white">
                               <a href="#" className={`${styles['nav-item']} block`}>Support</a>
                           </li>
                           <li className="p-2 border-b-2 border-white">
                               <button className={`${styles['nav-item']} block`} onClick={toggleSignupModal}>Register</button>
                           </li>
                           <li className="p-2 border-b-2 border-white">
                               <Link href="/login" legacyBehavior>
                                   <a href="#" className={`${styles['nav-item']} block`}>Login</a>
                               </Link>
                           </li>
                           <li className="p-2">
                               <a href="#" className={`${styles['nav-item']} nav-link get-started block`}>Get Started</a>
                               <img src="/images/gert started button.svg" alt="" />
                           </li>
                       </ul>
                   </div>
                   <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                           <li>
                               <a href="#" className={`${styles['nav-item']} block`}>Pricing</a>
                           </li>
                           <li>
                               <a href="#" className={`${styles['nav-item']} block`}>Support</a>
                           </li>
                           <li>
                               <button className={`${styles['nav-item']} block`} onClick={toggleSignupModal}>Register</button>
                           </li>
                           <li>
                               <Link href="/login" legacyBehavior>
                                   <a href="#" className={`${styles['nav-item']} block`}>Login</a>
                               </Link>
                           </li>
                           <li>
                               <a href="#" className={`${styles['nav-item']} nav-link get-started block`}>Get Started</a>
                               <img src="/images/gert started button.svg" alt="" />
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
           {isSignupModalOpen && <Signup onClose={toggleSignupModal} />}
       </section>
   );
}

export default Nav;
