import { db } from '@/utils/db';
import React from 'react'

const page = () => {
  //create todo 
  async function createTodo(formData: FormData){ //regular function, turn server action, formData will get us the entire form data inside return function
    "use server";

     const input = formData.get('input') as string; //grabbing the data of form input

     await db.todo.create({
      data: {input: input},
     })
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 ">
     <form  action={createTodo} className="flex flex-col gap-4">
          <input
            type="text"
            name="input"
            placeholder="Add a new todo..."
            className="px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Add Todo
          </button>
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