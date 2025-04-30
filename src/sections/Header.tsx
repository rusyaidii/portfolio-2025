'use client';
import { useEffect, useState } from "react";

const navItems = [
  {
    id: 'home',
    title: 'Home',
    href: '#',
  },
  {
    id: 'experience',
    title: 'Experience',
    href: '#experience',
  },
  {
    id: 'about',
    title: 'About',
    href: '#about',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '#contact',
  },
]

export const Header = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // section must be at least 50% in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActive(id);
          }
        }
      });
    }, observerOptions);

    const sectionElements = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);

    sectionElements.forEach((el) => observer.observe(el!));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el!));
    };
  }, []);

  return (
  <div className="flex justify-center items-center fixed top-10 w-full z-10">
    <nav className="flex gap-1 p-0 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      { navItems.map((item) => (
        <a 
          href={item.href}
          className={`nav-item ${active === item.id ? 'bg-white text-black' : ''}`}
          key={item.id}
          onClick={() => setActive(item.id)}
        >
          {item.title}
        </a>
      ))}
    </nav>
  </div>
  );
};
