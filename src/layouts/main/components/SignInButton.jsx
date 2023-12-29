import React from "react";

export default function SignInButton({ toggleAuthModal }) {
  return (
    <button
      onClick={toggleAuthModal}
      className="border border-black px-3 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary transition-all"
    >
      SignIn
    </button>
  );
}
