'use client'
import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const extraLinks = [
    { name: 'My Order', href: '#' },
    { name: 'My Wishlist', href: '#' },
    { name: 'My Account', href: '#' },
    { name: 'My Favorite', href: '#' },
    { name: 'Terms of Use', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: '#' },
    { name: 'Twitter', icon: FiTwitter, href: '#' },
    { name: 'Instagram', icon: FiInstagram, href: '#' },
    { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
    { name: 'Pinterest', icon: RiPinterestLine, href: '#' }
  ];

  return (
    <footer className="bg-[#fff] pt-12 pb-6">
        <hr className="border-t border-gray-200 mb-5" /> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0e91ab] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-[#0e91ab] transition-colors duration-200"
                  >
                    <IoIosArrowForward className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0e91ab] mb-4">Extra Links</h3>
            <ul className="space-y-2">
              {extraLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-[#0e91ab] transition-colors duration-200"
                  >
                    <IoIosArrowForward className="h-4 w-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0e91ab] mb-4">Extra Links</h3>
            <ul className="space-y-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      className="flex items-center text-gray-600 hover:text-[#0e91ab] transition-colors duration-200"
                    >
                      <IconComponent className="h-4 w-4 mr-3" />
                      {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#0e91ab] mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4 text-sm">Subscribe For Latest Updates</p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                required
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="w-full bg-[#0e91ab] text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-200 font-medium"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="bg-[#0e91ab] text-white text-center py-3 px-4 rounded-md">
            <p className="text-sm">
              Created By Mr. Web Designer | All Rights Reserved!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}