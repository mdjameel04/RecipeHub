"use client"
import React from 'react'
import { Cookie, Refrigerator } from "lucide-react"
import { UserButton } from '@clerk/nextjs'


const UserDropDown = () => {    
  return (
    <div className='mt-1'>
       <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Recipes"
          labelIcon={<Cookie size={16} />}
          href="/recipes"
        />
        <UserButton.Link
          label="My Pantry"
          labelIcon={<Refrigerator size={16} />}
          href="/pantry"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>  
    </div>
  )
}

export default UserDropDown