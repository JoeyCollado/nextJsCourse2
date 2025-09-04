import * as actions from "@/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AddMovie = () => {
  return (
    <div className="w-10/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Add a New Movie</h1>
      <form action={actions.createMovie} className="flex flex-col gap-4">
        <Label htmlFor="title">Title</Label>
        <Input type="text" name="title" required />

        <Label htmlFor="description">Description</Label>
        <textarea
          name="description"
          className="w-full p-2 border rounded"
          required
          title="textarea"
        />

        <Label htmlFor="imageUrl">Image URL</Label>
        <Input type="text" name="imageUrl" required />

        <Button type="submit">Add Movie</Button>
      </form>
    </div>
  );
};

export default AddMovie;