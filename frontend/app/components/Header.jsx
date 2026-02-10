import { Button } from "@/components/ui/button"
import { SignInButton } from "@clerk/nextjs"
import { Refrigerator } from "lucide-react"
import { Cookie } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import UserDropDown from "./UserDropDown"
import { checkUser } from "@/lib/checkUser"

const Header = async() => {
  const user = await checkUser()

  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-2">
          <Image
            src="/orange-logo.png"
            alt="Served Logo"
            width={60}
            height={60}
            className="w-16"
          />
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/recipes"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Cookie className="w-4 h-4" />
            My Recipes
          </Link>
          <Link
            href="/pantry"
            className="hover:text-orange-600 transition-colors flex gap-1.5 items-center"
          >
            <Refrigerator className="w-4 h-4" />
            My Pantry
          </Link>
        </div>

        {/* Right actions */}
         <div className="flex items-center justify-center gap-5 ">

         {!user? <SignInButton mode='modal'>
         <Button > Get Started </Button>
      </SignInButton>:
      <div className='flex gap-4 items-center '>
      <Link href={"/create-new-trip"}>
      <Button className="bg-destructive "> Get Started</Button>
      </Link>
       <UserDropDown/>
      </div>
}
       </div>
      </nav>
    </header>
  )
}

export default Header