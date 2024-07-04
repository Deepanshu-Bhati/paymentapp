import React from "react";

export function Card({title,children}:{
  title:string,
  children:React.ReactNode
}){
  return (
    <div>
      <h1>{title}</h1>
    <div>
      {children}
    </div>
    </div>
  )
}