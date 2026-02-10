

import { Button } from '@/components/ui/button'
import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
   
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 mt-20">
       <section className="pt-32 pb-20 px-4">
        <Button>
          subscribe
        </Button>

        <PricingTable/>
       </section>
       </div>
  )
}

export default HomePage