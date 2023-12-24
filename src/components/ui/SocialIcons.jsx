import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./style/social-icon.style.css";

export default function SocialIcons({ customLinks, className }) {
  let socialLinks = {
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
    linkedin: "https://www.linkedin.com",
  };

  if (customLinks) socialLinks = customLinks;

  return (
    <div className={`flex gap-8 text-grayColor text-xl ${className}`}>
      <div>
        <a
          href={`${socialLinks.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon_class" />
        </a>
      </div>
      <div>
        <a
          href={`${socialLinks.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon_class" />
        </a>
      </div>
      <div>
        <a
          href={`${socialLinks.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon_class" />
        </a>
      </div>
      <div>
        <a
          href={`${socialLinks.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon_class" />
        </a>
      </div>
    </div>
  );
}
