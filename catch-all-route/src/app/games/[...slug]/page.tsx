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
