
import React from 'react';

const Layouts = (props) => {
  return (
    <>
      <main className={`${props.className} min-h-dvh h-full`}>
        {props.children}
      </main>
    </>
  )
}

export default Layouts
