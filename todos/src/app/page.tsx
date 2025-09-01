import { db } from "@/utils/db";
import React from "react";
import * as actions from "@/actions"; //import all server actions from the folder
import SaveButton from "@/components/SaveButton";

const page = async () => {
  //get todo (rendering)
  const data = await db.todo.findMany({
    select: {
      input: true,
      id: true,
    },
    orderBy: {
      id: "desc", //display in descending order
    },
  });

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-between p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-pink-600">My Todo App</h1>
        <p className="text-gray-600 mt-2">
          Organize your tasks, edit them, or remove them anytime.
        </p>
      </header>

      {/* Main Content */}
      <main className="bg-white w-full max-w-2xl rounded-2xl shadow-xl p-8">
        {/* Add Todo */}
        <form
          className="flex flex-col sm:flex-row gap-4"
          action={actions.createTodo}
        >
          <input
            type="text"
            name="input"
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border-2 border-pink-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-300"
          >
            Add Todo
          </button>
        </form>

        {/* Todo List */}
        <div className="mt-8 space-y-4">
          {data.length === 0 ? (
            <div className="text-center text-gray-500 py-8 border border-dashed border-gray-300 rounded-lg">
              ✨ No todos yet. Start by adding one above!
            </div>
          ) : (
            data.map((todo) => (
              <section
                key={todo.id}
                className="flex items-center justify-between bg-gray-50 rounded-lg shadow-sm p-4"
              >
                <form
                  action={actions.editTodo}
                  className="flex items-center gap-3 flex-1"
                >
                  <input type="hidden" name="inputId" value={todo.id} />
                  <input
                    type="text"
                    name="input"
                    defaultValue={todo.input}
                    className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                    title="input"
                  />
                  <SaveButton />
                </form>

                <form action={actions.deleteTodo}>
                  <input type="hidden" name="inputId" value={todo.id} />
                  <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 ml-2">
                    Delete
                  </button>
                </form>
              </section>
            ))
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8">
        🚀 Built with Next.js, Prisma, and TailwindCSS
      </footer>
    </div>
  );
};

export default page;

//prisma install = npm i -D prisma
//prisma initialization and telling prisma what database are we using = npx prisma init --datasource-provider
//npx prisma init --datasource-provider sqlite
//migrating our schema changes = npx prisma migrate dev --name init
//checking prisma studio = npx prisma studio
//sqlLite = database