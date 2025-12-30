import React from "react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="py-3">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <a href="/" className="flex gap-1 items-center">
              <img src="/images/logo-notion.svg" className="h-10 dark:hidden" />
              <img
                src="/images/logo-dark.svg"
                className="h-10 hidden dark:block"
              />
              <span className="font-semibold">Jotion</span>
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <Button variant="outline" className="border-none cursor-pointer">
              Login
            </Button>
            <Button>Get Jotion Free</Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
