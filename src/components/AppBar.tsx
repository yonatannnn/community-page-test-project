import { useState } from "react";
import { Bell, Search, Settings, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import "../styles/components/appBar.scss";

export function AppBar() {
  const [isSearchVisible, setSearchVisible] = useState(false); // State for mobile search bar
  const [isMenuVisible, setMenuVisible] = useState(false); // State for menu visibility

  return (
    <header className="appbar supports-[backdrop-filter]:appbar.supports-backdrop">
      <div className="appbar-container">
        {/* Left Section */}
        <div className="appbar-left">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden mr-2"
                onClick={() => setMenuVisible(!isMenuVisible)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            {isMenuVisible && (
              <SheetContent side="left" className="appbar-sheet">
                <ul>
                  <li className="p-2 border-b">Menu Item 1</li>
                  <li className="p-2 border-b">Menu Item 2</li>
                  <li className="p-2 border-b">Menu Item 3</li>
                </ul>
              </SheetContent>
            )}
          </Sheet>
          <span className="appbar-title">Test Project</span>
        </div>

        {/* Right Section */}
        <div className="appbar-right">
          {isSearchVisible ? (
            <div className="flex items-center w-full md:w-auto">
              <Input
                type="search"
                placeholder="Search..."
                className="appbar-input"
              />
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => setSearchVisible(false)}
              >
                ✕
              </Button>
            </div>
          ) : (
            <>
              <div className="appbar-input md:block hidden">
                <Input type="search" placeholder="Search..." />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="appbar-btn md-visible"
              >
                <Bell className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="appbar-btn md-visible"
              >
                <Settings className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="appbar-btn md-hidden"
                onClick={() => setSearchVisible(!isSearchVisible)}
              >
                <Search className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
