import React from 'react'

const forexample = (
    {
        children,

    }
:{
    children:React.ReactNode;
}) => {
  return (
    <div className='bg-red-400'>
      {children};
    </div>
  )
}

export default forexample;
