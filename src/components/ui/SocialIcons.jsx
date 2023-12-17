import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIcons({ className }) {
  return (
    <div className={`flex gap-8 text-grayColor text-xl ${className}`}>
      <div>
        <FaFacebook className="hover:text-primary transition-colors" />
      </div>
      <div>
        <FaTwitter className="hover:text-primary transition-colors" />
      </div>
      <div>
        <FaInstagram className="hover:text-primary transition-colors" />
      </div>
      <div>
        <FaLinkedin className="hover:text-primary transition-colors" />
      </div>
    </div>
  );
}
