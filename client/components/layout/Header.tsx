import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex w-full items-center justify-between gap-6 bg-brandMint px-6 py-6 sm:px-10 lg:px-[120px] lg:py-10">
      <Link
        to="/"
        className="text-3xl font-semibold text-brandNavy sm:text-4xl"
      >
        Figeable
      </Link>

      <nav className="hidden items-center gap-[30px] md:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-base font-semibold uppercase tracking-wide text-brandNavy transition-opacity hover:opacity-70 ${
              pathname === link.to ? "opacity-100" : "opacity-90"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Open menu"
            className="text-brandNavy md:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-brandMint">
          <nav className="mt-10 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-lg font-semibold uppercase tracking-wide text-brandNavy"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
