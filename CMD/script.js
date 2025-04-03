function togglePost() {
    let govtJob = document.getElementById("govtJob").value;
    document.getElementById("post-section").style.display = (govtJob === "Yes") ? "block" : "none";
}
function formatIndianNumber(num) {
    return num.toLocaleString('en-IN');
}
function calculateDahej() {
    let gender = document.getElementById("gender").value;

    // Get user inputs
    let salary = parseInt(document.getElementById("salary").value) || 0;
    let khet = parseInt(document.getElementById("khet").value) || 0;
    let cows = parseInt(document.getElementById("cows").value) || 0;
    let govtJob = document.getElementById("govtJob").value;
    
    let dahejAmount = salary * 100; // Base calculation from salary
    
    // Add ₹100,000 per bigha of land
    dahejAmount += khet * 100000;

    // Add ₹50,000 per cow
    dahejAmount += cows * 50000;
    
    // If there's a government job, add between ₹2,000,000 to ₹4,000,000
    if (govtJob === "Yes") {
        dahejAmount += Math.floor(Math.random() * (4000000 - 2000000 + 1)) + 2000000;
    }

    let popup = document.getElementById("popup");
    let loading = document.getElementById("loading");
    let popupText = document.getElementById("popup-text");
    
    // Show the popup with loading animation
    popup.style.display = "block";
    loading.style.display = "block";
    popupText.innerText = "Calculating...";

    // Hide the loading animation and show the result after 2 seconds
    setTimeout(() => {
        loading.style.display = "none"; // Hide loading animation

        // Display the final result in the popup
        if (gender === "F") {
            popupText.innerHTML = "<h2>Sorry, you can't get Dahej</h2>";
        } else if (gender === "M") {
            popupText.innerHTML = "<h2>Your estimated Dahej amount is:</h2><h1>₹" + formatIndianNumber(dahejAmount) + "</h1>";
            popupText.innerHTML.style.color='black'
            // popupText.innerHTML = "<h2>Your estimated Dahej amount is:</h2><h1>₹" + formatIndianNumber(start)dahejAmount + "</h1>";
        } else {
            popupText.innerHTML = "<h2>Please select your gender to calculate Dahej</h2>";
        }
    }, 2000); // 2 seconds delay before showing the final result
}
// function formatIndianNumber(num) {
//     return num.toLocaleString('en-IN');
// }
// function rollingNumberAnimation(element, finalValue, duration) {
//     let start = 0;
//     let increment = Math.ceil(finalValue / (duration * 60 / 1000)); // Increment per frame
//     let interval = setInterval(() => {
//         start += increment;
//         if (start >= finalValue) {
//             start = finalValue;
//             clearInterval(interval);
//         }
//         element.innerText = "₹" + formatIndianNumber(start);
//     }, 20);
// }

// // function flowerAnimation() {
// //     for (let i = 0; i < 20; i++) {
// //         let flower = document.createElement("div");
// //         flower.classList.add("flower");
// //         flower.style.left = Math.random() * window.innerWidth + "px";
// //         flower.style.top = window.innerHeight + "px";
// //         document.body.appendChild(flower);

// //         setTimeout(() => {
// //             flower.remove();
// //         }, 3000);
// //     }
// // }

// function calculateDahej() {
//     let gender = document.getElementById("gender").value;
//     let salary = parseInt(document.getElementById("salary").value) || 0;
//     let khet = parseInt(document.getElementById("khet").value) || 0;
//     let cows = parseInt(document.getElementById("cows").value) || 0;
//     let govtJob = document.getElementById("govtJob").value;

//     let dahejAmount = salary * 100;
//     dahejAmount += khet * 100000;
//     dahejAmount += cows * 50000;

//     if (govtJob === "Yes") {
//         dahejAmount += Math.floor(Math.random() * (4000000 - 2000000 + 1)) + 2000000;
//     }

//     let popup = document.getElementById("popup");
//     let popupText = document.getElementById("popup-text");
//     let popupAmount = document.getElementById("popup-amount");

//     popup.style.display = "block";

//     if (gender === "F") {
//         popupText.innerHTML = "<h2>Sorry, you can't get Dahej</h2>";
//         popupAmount.innerHTML = "";
//     } else if (gender === "M") {
//         popupText.innerHTML = "<h2>Your estimated Dahej amount is:</h2>";
//         popupAmount.innerText = "₹0";
//         rollingNumberAnimation(popupAmount, dahejAmount, 2000);

//         // if (dahejAmount > 3000000) {
//         //     flowerAnimation();
//         // }
//     } else {
//         popupText.innerHTML = "<h2>Please select your gender to calculate Dahej</h2>";
//         popupAmount.innerHTML = "";
//     }
// }