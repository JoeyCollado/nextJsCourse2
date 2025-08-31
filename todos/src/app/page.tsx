import { db } from "@/utils/db";
import React from 'react'
import * as actions from "@/actions"; //import all server actions from the folder

const page = async  () => {

    //get todo (rendering)
    const data = await db.todo.findMany({
      select:{
        input: true,
        id: true,
      },

      orderBy: {
        id: 'desc', //display in descending order 
      }
    })

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 ">
     <form  action={actions.createTodo} className="flex flex-col gap-4">
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

        {/*  */}
        <div className='mt-8 space-y-4'>
          {data.map((todo) => (
            <form className="flex items-center justify-between space-x-4" key={todo.id} action={actions.editTodo}>
              <input type='hidden' name='inputId' value={todo.id}></input>
              <input className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" type='text' name='input' defaultValue={todo.input} title="input"></input>
              <div className="flex space-x-2">
                <button className="bg-pink-500 text-white py-1.5 px-4 rounded-lg hover:bg-pink-600 transition duration-300 ml-[.4rem]" type='submit'>Save</button>
                <button formAction={actions.deleteTodo } className="bg-red-500 text-white py-1.5 px-4 rounded-lg hover:bg-red-600 transition duration-300 ml-[.4rem]">Delete</button>
              </div>
            </form>
          ))}
        </div>
    </div>
  )
}


export default page

//prisma install = npm i -D prisma
//prisma initialization and telling prisma what database are we using = npx prisma init --datasource-provider
//npx prisma init --datasource-provider sqlite
//migrating our schema changes = npx prisma migrate dev --name init
//checking prisma studio = npx prisma studio