import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/service">Services</Link>
      <Link href="/about">About Us</Link>
      <Link href="/blogs">Blog</Link>
      <Link href="/contact">Contact Us</Link>
    </div>
  );
};

export default navbar;
