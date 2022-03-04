import React from 'react';


const Head = ({title, description})=>{
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute('content', description);
  return(
    <></>
  )
}

export default Head;