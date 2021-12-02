import React from 'react';

const People = ({ people }) => {
  console.log(people);
  return (
    <section className="max-w-lg max-h-96 overflow-y-scroll w-3/4 flex flex-col items-center py-10 px-16 gap-4 border rounded-md shadow-lg">
      {people.map((person, index) => (
        <div
          className="p-4 shadow-lg border border-2 rounded-md border-gray-100 w-64 flex-1 bg-white"
          key={index}
        >
          <h1 className="text-2xl font-bold tracking-wide text-gray-600 truncate">
            {person.name}
          </h1>
          <span className="text-gray-400 uppercase tracking-wider text-xs font-bold">
            {person.title}
          </span>
        </div>
      ))}
    </section>
  );
};

export default People;
