import Link from 'next/link';
import React from 'react'

const page = () => {

    const movies = [
        {id: "1", title: "Inception"},
        {id: "2", title: "Interstellar"},
        {id: "3", title: "The Dark Knight"},
    ];

  return (
    <div className='p-6'>
      <h2 className='text-3xl font-semibold mb-4'>Movies List</h2>
      <ul className="space-y-4">
        {movies.map(movie => (
            <li key={movie.id} className='bg-gray-800 p-4 rounded-lg'>
                <Link className='text-blue-400 hover:text-blue-600' href={`/movies/${movie.id}`}>
                {movie.title}
                </Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default page
