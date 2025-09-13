"use client";

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

const page = () => {

  const form = useForm({
    defaultValues:{
      name: '',
      email: "",
      password: ""
    }
  })

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <Card className='w-full max-w-md p-6 shadow-lg'>
        <CardHeader>
            <CardTitle className='text-center text-xl font-semibold'>Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='space-y-4'>
              <div>
                <FormField name='name' render={(filed) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your name'/>
                    </FormControl>
                  </FormItem>
                )}/>
              </div>
              
              <div>
                <FormField name='name' render={(filed) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your name'/>
                    </FormControl>
                  </FormItem>
                )}/>
              </div>

              <div>
                <FormField name='name' render={(filed) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your name'/>
                    </FormControl>
                  </FormItem>
                )}/>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default page
