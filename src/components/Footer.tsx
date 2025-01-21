import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Button } from "../components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-6 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-lg font-semibold">Test Project</span>
          <p className="text-sm">© {new Date().getFullYear()} Test Project. All rights reserved.</p>
        </div>

        {/* Center Section */}
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="/about" className="hover:text-gray-700 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-700 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-700 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-700 transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
