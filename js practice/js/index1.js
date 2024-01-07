function errorButton(event) {
    event.preventDefault();
  
    const validPath = document.getElementById('Handelingfile').value;
  
    try {
      const validNuber = valueValid(validPath);
      console.log('Valid Number', validNuber);
    } catch (error) {
      console.error(error.message);
      console.log('Enter a valid path');
    }
  }
  
  function valueValid(validPath) {
    if (isNaN(validPath)) {
      throw new Error('Invalid input. Please enter a valid path.')
    } else {
      return Number(validPath);
    }
  }