import React from 'react'

const page = () => {
  return (
    <div>
      Home
    </div>
  )
}

export default page

//interecpting routes = load a new route within the current layout while masking the browser URL, useful for advanced routing patterns such as modals. ex = pop up model

//(.)1 = intercepting route naming convention ex = (.) = means the intercepting route belongs to the route that predates it, 1 is because we have to search for that id, example if we have apples the convetion will be = (.)apples
// (.) = our route is located somewhere in this directory
//ugly code