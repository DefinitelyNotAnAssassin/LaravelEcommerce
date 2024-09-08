"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = () => (
    <>
      <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
        Home
      </Link>
      <Link href="/shop" className="text-sm font-medium hover:underline underline-offset-4">
        Shop
      </Link>
      <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
        About
      </Link>
      <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
        Contact
      </Link>
      <Link href="/cart" className="text-sm font-medium hover:underline underline-offset-4">
        Cart
      </Link>
    </>
  )

  return (
    <header className="h-14 flex items-center justify-between px-4 md:px-6">
      <Link href="/" className="flex items-center justify-center">
        <span className="text-lg font-bold">DNA Ecommerce</span>
        <span className="sr-only">DNA Ecommerce</span>
      </Link>

      <nav className="hidden md:flex gap-6">
        <NavLinks />
      </nav>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 mt-4">
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function Link({ href, children, className }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}