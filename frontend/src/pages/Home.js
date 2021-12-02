import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import People from '../components/People';

const Home = () => {
  const [people, setPeople] = useState();
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);
  return (
    <div className=" items-center-col gap-4 border rounded-md shadow-md p-8">
      <h1 className="font-bold tracking-widest uppercase text-gray-600 text-2xl">
        Check this out
      </h1>
      <div className="flex flex-col sm:flex-row items-center">
        <Form setPeople={setPeople} />
        {people ? <People people={people} /> : <h1>No People</h1>}
      </div>
    </div>
  );
};

export default Home;
