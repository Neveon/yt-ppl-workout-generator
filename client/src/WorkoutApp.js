import React, { useState } from 'react';
import { Button, Container, ButtonGroup } from 'react-bootstrap';
import TableRenderer from './TableRenderer';

const WorkoutApp = () => {
  const [workouts, setWorkoutType] = useState(null);

  const randWorkout = (obj) => {
    // Create an empty result array
    let result = [];

    // Loop through each key in the input object
    for (let key in obj) {
      // Get the array of elements associated with the current key
      let elements = obj[key];

      // Choose a random element from the array
      let index = Math.floor(Math.random() * elements.length);
      let element = elements[index];

      // Add the current key and its corresponding random element to the result array
      result.push({ [key]: element });
    }

    // Return the result object
    return result;
  };

  const handleWorkoutType = (type) => {
    fetch(`http://localhost:3001/${type}/`)
      .then((res) => res.json())
      .then((data) => {
        setWorkoutType(randWorkout(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <br />
      <br />
      <h1 className='text-center fw-bolder'>💪 Choose Your Workout 💪</h1>
      <br />
      <br />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ButtonGroup
          className='mx-auto text-center'
          style={{ width: '50%', margin: 'auto' }}
        >
          <Button
            className='workout'
            variant='dark'
            size='lg'
            onClick={() => handleWorkoutType('push')}
          >
            Push
          </Button>
          <Button
            className='workout'
            variant='dark'
            size='lg'
            onClick={() => handleWorkoutType('pull')}
          >
            Pull
          </Button>
          <Button
            className='workout'
            variant='dark'
            size='lg'
            onClick={() => handleWorkoutType('legs')}
          >
            Legs
          </Button>
        </ButtonGroup>
      </div>
      <br />
      <br />
      {workouts && <TableRenderer data={workouts} />}
    </Container>
  );
};

export default WorkoutApp;
