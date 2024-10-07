import { Medal } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import {Poppins} from "next/font/google"

const headingFont = localFont({
    src:"../fonts/font.woff2"
})

const textFont = Poppins({

  subsets:["latin"],
  weight:[
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})

const marketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className={cn('flex items-center justify-center flex-col',headingFont.className)}>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
            <Medal className='h-6 mr-2 w-6'/>
            best task management
        </div>
        <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>
            TaskFlow helps team move
        </h1>
        <div className='text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit'>
            work forward.
        </div>
      </div>
      <div className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto '>
        Collaborarte, manage projects and reach new productivity peaks . From high risis to the home office , the way your team works is unique - accomplish it all with TaskFlow.
      </div>
      <Button className='mt-6' size="lg" asChild> 
        <Link href="/sign-up"> Get TaskFlow for free</Link>
      </Button>

    </div>
  )
}

export default marketingPage;
