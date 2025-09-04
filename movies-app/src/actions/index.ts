"use server";

import { db } from "@/utils/prisma";
import { redirect } from "next/navigation";

export async function createMovie(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("imageUrl") as string;

  await db.movie.create({
    data: { title, description, image },
  });

  redirect("/all-movies");
}

export async function deleteMovie(formData: FormData) {
  const movieId = formData.get("movieID") as string;
  await db.movie.delete({ where: { id: movieId } });
}

export async function editMovie(formData: FormData) {
  const movieId = formData.get("movieID") as string;
  const newTitle = formData.get("title") as string;
  const newDescription = formData.get("description") as string;
  const newImageUrl = formData.get("imageUrl") as string;

  await db.movie.update({
    where: { id: movieId },
    data: {
      title: newTitle,
      description: newDescription,
      image: newImageUrl,
    },
  });
}