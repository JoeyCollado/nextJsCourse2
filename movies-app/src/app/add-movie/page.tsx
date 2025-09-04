import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <div className="w-10/12 mx-auto p-10">
      <h1 className="text-4xl font-bold mb-4">Add a new movie</h1>
      <form className="flex flex-col gap-4">
        <Label htmlFor='title'>Title</Label>
        <Input type='text' name='title' required/>

        <Label htmlFor='description'>Description</Label>
        <textarea
          name="description"
          className="w-full p-2 border rounded"
          required
          title='textarea'
        />

        <Label htmlFor='imageUrl'>Image Url</Label>
        <Input type='text' name='imageUrl' required/>

        <Button type='submit'>Add Movie</Button>
      </form>
    </div>
  )
}

export default page
