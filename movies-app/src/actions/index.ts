"use server";

import { db } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function createMovie(formData: FormData) { //get form details
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("imageUrl") as string;

  await db.movie.create({ //create movie
    data: { title, description, image },
  });

  redirect("/all-movies"); //redirect to route
}

export async function deleteMovie(formData: FormData) { //delete movie
  const movieId = formData.get("movieID") as string;
  await db.movie.delete({ where: { id: movieId } });
}

export async function editMovie(formData: FormData) { //edit movie
  const movieId = formData.get("movieID") as string;
  const newTitle = formData.get("title") as string;
  const newDescription = formData.get("description") as string;
  const newImageUrl = formData.get("imageUrl") as string;

  await db.movie.update({ //fetch updated data
    where: { id: movieId },
    data: {
      title: newTitle,
      description: newDescription,
      image: newImageUrl,
    },
  });
}