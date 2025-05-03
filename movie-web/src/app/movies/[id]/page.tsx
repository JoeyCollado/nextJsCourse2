import React from 'react'

interface MovieProps{
    params: {
        id: string
    };
}

const page = ({params}: MovieProps) => {

    const movies = [
        {
            id: "1",
            title: "Inception",
            comments: 124,
            rating: 4.7,
            description: "A mind-bending Thriller by Christopher Nolan.",
            commentList: ["Great Movie!", "Mind Blowing!", "Masterpiece!"],
        },
        {
            id: "2",
            title: "Interstellar",
            comments: 124,
            rating: 4.7,
            description: "A mind-bending Thriller by Christopher Nolan.",
            commentList: ["Great Movie!", "Mind Blowing!", "Masterpiece!"],
        },
        {
            id: "3",
            title: "The Dark Knight",
            comments: 124,
            rating: 4.7,
            description: "A mind-bending Thriller by Christopher Nolan.",
            commentList: ["Great Movie!", "Mind Blowing!", "Masterpiece!"],
        },
    ];

    const movie = movies.find(m => m.id === params.id)
  return (
    <div className='p-8 space-y-8 bg-gray-900 min-h-screen'>
      {/* movie title and description */}
      <div className='bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl shadow-lg'>
        <h2 className='text-4xl font-semibold text-white mb-4'>{movie?.title}</h2>
        <p className='text-lg text-gray-300'>{movie?.description}</p>
      </div>
    </div>
  )
}

export default page
