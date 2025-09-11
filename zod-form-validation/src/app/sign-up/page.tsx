import React from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const page = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <Card className='w-full max-w-md p-6 shadow-lg'>
        <CardHeader>
            <CardTitle className='text-center text-xl font-semibold'>Sign up</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}

export default page
