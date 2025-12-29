"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-aos]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]); // 👈 Run this effect every time the route changes

  return null;
}
