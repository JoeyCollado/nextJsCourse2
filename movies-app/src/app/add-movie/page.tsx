import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Add a new movie</h1>
      <form>
        <Label htmlFor='title'>Title</Label>
        <Input type='text' name='title' required/>

        <Label htmlFor='description'>Description</Label>
        <Input name='description' required/>
      </form>
    </div>
  )
}

export default page
