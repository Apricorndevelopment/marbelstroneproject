"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

export function Header2() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isPermanent, setIsPermanent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  const [navLinks] = useState<NavLink[]>([
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Buying Requests", href: "/request" },
    { name: "Slab In Stock", href: "/slabs" },
  ]);

  const categories = [
    { name: "Popular Stones", href: "/slabs/#popular-slab" },
    { name: "White Stones", href: "/slabs/#white-slab" },
    { name: "Blue Stones", href: "/slabs/#blue-slab" },
    { name: "Brown Stones", href: "/slabs/#brown-slab" },
  ];

  return (
    <header className="flex items-center justify-between p-3 border-b bg-[#baffaad2] text-[#333333] relative">
    
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => !isPermanent && setDropdownOpen(true)}
        onMouseLeave={() => !isPermanent && setDropdownOpen(false)}
        onClick={() => {
          if (isPermanent) {
            setDropdownOpen(false);
            setIsPermanent(false);
          } else {
            setDropdownOpen(true);
            setIsPermanent(true);
          }
        }}
      >
        <div className="flex items-center gap-2">
          <i className="bi bi-list"></i> Categories
          <i className={`bi ${dropdownOpen ? "bi-chevron-up" : "bi-chevron-down"} text-sm transition-transform duration-200`}></i>
        </div>

        {dropdownOpen && (
          <div className="absolute left-0 z-1 top-full mt-2 w-56 bg-white shadow-lg border rounded">
            {categories.map((category, index) => (
              <Link key={index} href={category.href} className="block px-4 py-2 hover:bg-gray-200">
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"} text-2xl`}></i>
        </button>
      </div>

      <nav className="hidden md:flex gap-7">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className={pathname === link.href ? "font-bold underline" : "text-[#333333] hover:text-blue-600"}>
            {link.name}
          </Link>
        ))}
      </nav>

      {menuOpen && (
        <nav className="absolute top-14 left-0 w-full z-2 bg-[#ffee93] shadow-md flex flex-col items-center md:hidden">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block w-full text-center py-2 border-b hover:bg-gray-200"
              onClick={() => setMenuOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}


      <a href="#" className="bg-[#3a444a] hover:bg-[#233237] text-white px-3 py-1 rounded">
        Enquire Now
      </a>
    </header>
  );
}
