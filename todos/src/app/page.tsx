import React from 'react'

const page = () => {
  return (
    <div>
      <form>
        <input type='text' name='input' placeholder='Add a new Todo...'/>
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default page

//prisma install = npm i -D prisma
//prisma initialization and telling prisma what database are we using = npx prisma init --datasource-provider
//npx prisma init --datasource-provider sqlite
//migrating our schema changes = npx prisma migrate dev --name init
//checking prisma studio = npx prisma studio