import React from 'react'

const page = () => {

  const movies = [{
    id: "1",
    title: "Interstellar",
    comments: 98,
    rating: 4.8,
    description: "A space exploration film by Christopher Nolan.",
  },
  {
    id: "2",
    title: "Interstellar2",
    comments: 98,
    rating: 4.8,
    description: "A space exploration film by Christopher Nolan.",
  },
  {
    id: "3",
    title: "Interstellar3",
    comments: 98,
    rating: 4.8,
    description: "A space exploration film by Christopher Nolan.",
  },
  {
    id: "4",
    title: "Interstellar4",
    comments: 98,
    rating: 4.8,
    description: "A space exploration film by Christopher Nolan.",
  }];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => movie.comments, 0)
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1) // get single character for rating not 3.21321

  return (
    <div className='p-8 space-y-8 bg-gray-900 min-h-screen'>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-white mb-4">Dashboard Overview</h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-white'>
          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center'>
            <p className='text-lg font-medium'>Total Movies</p>
            <p className='text-4xl font-bold'>{totalMovies}</p>
          </div>

          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center'>
            <p className='text-lg font-medium'>Total Movies</p>
            <p className='text-4xl font-bold'>{totalComments}</p>
          </div>

          <div className='bg-gray-800 p-4 rounded-lg flex flex-col items-center'>
            <p className='text-lg font-medium'>Total Movies</p>
            <p className='text-4xl font-bold'>{averageRating}</p>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default page
