import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Lessons", href: "#teaching" },
  { name: "Events & Weddings", href: "#events" },
  { name: "Media", href: "#performances" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#hero")}
          className={cn(
            "text-2xl font-serif font-medium tracking-wide transition-colors",
            isScrolled ? "text-gray-900" : "text-white"
          )}
        >
          Lauren Guerin
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-medium tracking-widest uppercase hover:opacity-75 transition-colors",
                isScrolled ? "text-gray-800" : "text-white/90"
              )}
            >
              {item.name}
            </a>
          ))}

          {/* Reserve / Pay Deposits */}
          <Link href="/reserve">
            <a
              className={cn(
                buttonVariants({ size: "sm" }),
                "ml-2 rounded-none font-serif tracking-widest uppercase",
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              )}
              aria-label="Reserve your date and pay deposit"
            >
              Reserve
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-current"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-gray-800 font-serif text-lg hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}

            <Link href="/reserve">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-2 w-full rounded-none font-serif tracking-widest uppercase",
                  location === "/reserve" && "opacity-90"
                )}
                aria-label="Reserve your date and pay deposit"
                onClick={() => setIsOpen(false)}
              >
                Reserve
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
