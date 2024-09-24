
const photoUrls = [
    'GF.jpeg',
    'batman.png',
    'iron-man.png',
    'krish.png',
    'pablo.jpeg',
    'spiderman.jpg',
    
    // Add more photo URLs here
  ];
  
  // Function to generate a random number between 0 and the length of the photoUrls array
  function getRandomNumberImg() {
    return Math.floor(Math.random() * photoUrls.length);
  }
  function getRandomNumberBox() {
    return Math.floor(Math.random() * 3);
  }
  
  // Get the box elements
  const boxes = document.querySelectorAll('.box');
  
  // Add an event listener to the button
  document.querySelector('.btn').addEventListener('click', () => {
    // Generate a random number
    const randomNumber1 = getRandomNumberImg();
    const randomNumber2 = getRandomNumberImg();
    const randomNumber3 = getRandomNumberImg();
  
    // Select the corresponding box and add the photo
    const selectedBox1 = boxes[getRandomNumberBox()]; // Choose the first box for now
    selectedBox1.style.backgroundImage = `url('${photoUrls[randomNumber1]}')`;
    selectedBox1.style.backgroundSize = 'cover';
    selectedBox1.style.backgroundPosition = 'center';
    const selectedBox2 = boxes[getRandomNumberBox()]; // Choose the first box for now
    selectedBox2.style.backgroundImage = `url('${photoUrls[randomNumber2]}')`;
    selectedBox2.style.backgroundSize = 'cover';
    selectedBox2.style.backgroundPosition = 'center';
    const selectedBox3 = boxes[getRandomNumberBox()]; // Choose the first box for now
    selectedBox3.style.backgroundImage = `url('${photoUrls[randomNumber3]}')`;
    selectedBox3.style.backgroundSize = 'cover';
    selectedBox3.style.backgroundPosition = 'center';
  });



 











// // Add an event listener to the button
// button.addEventListener('click', () => {
//   // Ask the user if they want to play the game
//   const playGame = confirm('Do you want to play the game?');

//   // If the user clicks "OK", playGame will be true
//   if (playGame) {
//     // Ask the user for the amount of money they want to put into the game
//     const amount = prompt('How much money do you want to put into the game?');

//     // Check if the user entered a valid amount
//     if (amount !== null && !isNaN(amount) && amount > 0) {
//       // You can add your game logic here
//       alert(`You're playing with ${amount} Rupees ! Let's play!`);
//     } else {
//       alert('Please enter a valid amount.');
//     }
//   } else {
//     // If the user clicks "Cancel", playGame will be false
//     alert('Maybe next time!');
//   }
// });