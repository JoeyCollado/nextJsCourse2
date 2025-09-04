"use client";

import { ChangeEvent, useState } from "react";
import * as actions from "@/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MovieProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ShowMovie = ({ data }: { data: MovieProps }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [updatedMovie, setUpdatedMovie] = useState({ ...data });

  const handleUpdateMovie = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof MovieProps
  ) => {
    setUpdatedMovie((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-40 object-cover rounded"
        />
        <p className="mt-2">{data.description}</p>

        {/* Delete Button */}
        <form action={actions.deleteMovie} className="mt-4">
          <Input type="hidden" name="movieID" value={data.id} />
          <Button className="bg-red-500 px-4 py-2 text-white">Delete</Button>
        </form>

        {/* Edit Dialog */}
        <Dialog
          open={openDialog}
          onOpenChange={() => setOpenDialog(!openDialog)}
        >
          <DialogTrigger asChild>
            <Button variant="outline" className="mt-2">
              Edit
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Movie</DialogTitle>

              <form className="space-y-4" action={actions.editMovie}>
                <div>
                  <Label>Title</Label>
                  <Input
                    type="text"
                    name="title"
                    value={updatedMovie.title}
                    onChange={(e) => handleUpdateMovie(e, "title")}
                  />
                </div>

                <div>
                  <Label>Description</Label>
                  <textarea
                    name="description"
                    value={updatedMovie.description}
                    onChange={(e) => handleUpdateMovie(e, "description")}
                    className="w-full p-2 border rounded"
                    title="textarea"
                  />
                </div>

                <div>
                  <Label>Image URL</Label>
                  <Input
                    type="text"
                    name="imageUrl"
                    value={updatedMovie.image}
                    onChange={(e) => handleUpdateMovie(e, "image")}
                  />
                </div>

                <Input type="hidden" name="movieID" value={data.id} />
                <Button type="submit" onClick={() => setOpenDialog(false)}>
                  Save
                </Button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default ShowMovie;