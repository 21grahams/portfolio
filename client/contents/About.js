import React from 'react';

function doSomethingTest() {
  console.log('working on front end?')
}
const About = () => {
  return (
   <button className='aboutText' onClick={doSomethingTest}>About Me</button>
  )
}

export default About;