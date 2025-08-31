'use server';
//here we define our server actions
import { revalidatePath } from "next/cache";
import { db } from "@/utils/db";

//create todo
export async function createTodo(formData: FormData) {
  //regular function, turn server action, formData will get us the entire form data inside return function

  const input = formData.get("input") as string; //grabbing the data of form input

  await db.todo.create({
    data: { input: input },
  });

   // 🔥 refresh data on the page
   revalidatePath("/");
}

//update todo
export async function editTodo(formData: FormData) {
  //get input and input id
  const input = formData.get("input") as string;
  const inputId = formData.get("inputId") as string;

  //update data
  await db.todo.update({
    where: { id: inputId }, //get id
    data: { input: input }, //change input
  });

   // 🔥 refresh data on the page
   revalidatePath("/");
}

//delete data
export async function deleteTodo(formData: FormData) {
  //get input id
  const inputId = formData.get("inputId") as string;
  //what to do
  await db.todo.delete({
    where: { id: inputId },
  });

   // 🔥 refresh data on the page
   revalidatePath("/");
}
