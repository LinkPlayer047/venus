"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Auth state
  const [user, setUser] = useState(null);

  // Form states
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const BASE_URL = "http://localhost:5000/api/auth";

  useEffect(() => {
    // Check token on load
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    if (token && name) setUser({ name, token });
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleLinkClick = () => setMobileMenuOpen(false);

  const openSignIn = () => { setShowSignIn(true); setShowSignUp(false); };
  const openSignUp = () => { setShowSignUp(true); setShowSignIn(false); };
  const closeModals = () => { setShowSignIn(false); setShowSignUp(false); };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signInEmail, password: signInPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.name);
        setUser({ name: data.name, token: data.token });
        closeModals();
      } else alert(data.message);
    } catch (err) { console.error(err); alert("Something went wrong!"); }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signUpName,
          email: signUpEmail,
          password: signUpPassword,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Account created! Sign in now.");
        closeModals();
      } else alert(data.message);
    } catch (err) { console.error(err); alert("Something went wrong!"); }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setUser(null);
  };

  return (
    <>
      <div className="bg-[#000f30] w-full py-5 fixed z-50 shadow-md">
        <div className="mycontainer2 flex items-center justify-between">
          <div><img src="/logo-white.svg" alt="Logo" className="h-10" /></div>

          {/* Links */}
          <div className="hidden lg:flex gap-10">
            <Link href="/" className="text-white hover:text-[#2673f2] text-lg">Home</Link>
            <Link href="/about" className="text-white hover:text-[#2673f2] text-lg">About</Link>
            <Link href="/services" className="text-white hover:text-[#2673f2] text-lg">Services</Link>
            <Link href="/portfolio" className="text-white hover:text-[#2673f2] text-lg">Portfolio</Link>
            <Link href="/blogs" className="text-white hover:text-[#2673f2] text-lg">Blogs</Link>
            <Link href="/contact" className="text-white hover:text-[#2673f2] text-lg">Contact</Link>
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex gap-3">
            {!user ? (
              <>
                <button onClick={openSignIn} className="text-[#2673f2] hover:bg-[#155DFC] hover:text-white border border-[#2673f2] px-5 py-2 rounded-lg text-lg">Sign In</button>
                <button onClick={openSignUp} className="text-white bg-[#2673f2] hover:bg-[#1447e6] px-5 py-2 rounded-lg text-lg">Sign Up</button>
              </>
            ) : (
              <>
                <span className="text-white font-medium">Hi, {user.name}</span>
                <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">Logout</button>
              </>
            )}
          </div>

          <div className="lg:hidden">
            <MdOutlineSegment className="text-white h-6 w-6 cursor-pointer" onClick={toggleMobileMenu}/>
          </div>
        </div>
      </div>

      {/* Mobile menu (same logic as desktop) */}
      <div className={`fixed top-0 left-0 w-full h-full bg-[#000f30] z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end p-5">
          <FaTimes className="text-white h-6 w-6 cursor-pointer" onClick={toggleMobileMenu}/>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 mt-10">
          <Link href="/" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Home</Link>
          <Link href="/about" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">About</Link>
          <Link href="/services" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Services</Link>
          <Link href="/portfolio" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Portfolio</Link>
          <Link href="/blogs" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Blogs</Link>
          <Link href="/contact" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Contact</Link>
        </div>

        {!user ? (
          <div className="flex flex-col items-center mt-10 gap-4">
            <button onClick={() => {handleLinkClick(); openSignIn();}} className="text-[#2673f2] hover:bg-[#155DFC] hover:text-white border border-[#2673f2] px-8 py-2 rounded-lg w-3/4 text-center">Sign In</button>
            <button onClick={() => {handleLinkClick(); openSignUp();}} className="text-white bg-[#2673f2] hover:bg-[#1447e6] px-8 py-2 rounded-lg w-3/4 text-center">Sign Up</button>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-10 gap-4">
            <span className="text-white text-lg">Hi, {user.name}</span>
            <button onClick={() => {handleLinkClick(); handleLogout();}} className="text-white bg-red-500 hover:bg-red-600 px-8 py-2 rounded-lg w-3/4 text-center">Logout</button>
          </div>
        )}
      </div>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0a1a3a] p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button onClick={closeModals} className="absolute top-4 right-4 text-white hover:text-[#2673f2]">✕</button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
              <input type="email" placeholder="Email" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#2673f2]"/>
              <input type="password" placeholder="Password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#2673f2]"/>
              <button type="submit" className="bg-[#2673f2] hover:bg-[#1447e6] text-white rounded-md px-4 py-2 font-medium transition-colors">Sign In</button>
            </form>
            <p className="text-gray-400 text-sm text-center mt-4">
              Don’t have an account? <button onClick={openSignUp} className="text-[#2673f2] hover:underline">Sign Up</button>
            </p>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0a1a3a] p-8 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button onClick={closeModals} className="absolute top-4 right-4 text-white hover:text-[#2673f2]">✕</button>
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign Up</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
              <input type="text" placeholder="Full Name" value={signUpName} onChange={(e) => setSignUpName(e.target.value)} className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#2673f2]"/>
              <input type="email" placeholder="Email" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#2673f2]"/>
              <input type="password" placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#2673f2]"/>
              <button type="submit" className="bg-[#2673f2] hover:bg-[#1447e6] text-white rounded-md px-4 py-2 font-medium transition-colors">Create Account</button>
            </form>
            <p className="text-gray-400 text-sm text-center mt-4">
              Already have an account? <button onClick={openSignIn} className="text-[#2673f2] hover:underline">Sign In</button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
