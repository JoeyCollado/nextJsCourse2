import React from 'react';

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params;

  return (
    <ul>
      {slug.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  );
}

//http://localhost:3000/games/series/gta/gta-5/reviews/comment-225
//it will render all of it