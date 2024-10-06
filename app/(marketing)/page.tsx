import { Medal } from 'lucide-react';
import React from 'react'

const marketingPage = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col'>
        <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
            <Medal className='h-6 mr-2 w-6'/>
            best task management
        </div>
      </div>
    </div>
  )
}

export default marketingPage;
