import React from 'react'

const pageId = ({
    params,
}:{
    params:{id:string}; 
}) => {
  return (
    <div>
      id:{params.id};
    </div>
  )
}

export default pageId
