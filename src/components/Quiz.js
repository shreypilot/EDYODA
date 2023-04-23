import React, { useState } from 'react';

function Quiz() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }
  
  return (
    <div>
     QUIZ
      </div>
  
  );
}

export default Quiz;
