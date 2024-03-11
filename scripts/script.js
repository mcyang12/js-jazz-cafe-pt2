// Functional Programming Tasks:

// Task 1: Implement a function that calculates total earnings

    // Calculate the total earnings by summing up ticket prices

// Examples to test in console:
const ticketPrices = [20, 25, 30];
const totalEarnings = calculateEarnings(ticketPrices);
console.log("Total Earnings:", totalEarnings);

// Task 2: Implement a function to filter out free events from a list of events

    // Create an array to store paid events

    // Iterate through each event

        // Check if the event has a price greater than 0

            // If the event is not free, add it to the paidEvents array


    // Return the array of paid events


// Examples to test in console:
const events = [
    { name: "Jazz Night", price: 15 },
    { name: "Open Mic", price: 0 },
    { name: "Live Concert", price: 25 }
];
const paidEvents = filterFreeEvents(events);
console.log("Paid Events:", paidEvents);



// Object-Oriented Programming Tasks:

// Task 3: Define a class for Jazz Musicians


// Examples to test in console:
const musician = new JazzMusician("Louis Armstrong", "Trumpet");
console.log("Jazz Musician:", musician);

// Task 4: Extend the JazzMusician class for Vocalists


// Examples to test in console:
const vocalist = new Vocalist("Ella Fitzgerald", "Scat");
console.log("Jazz Vocalist:", vocalist);



// Classes and Constructors Tasks:

// Task 5: Create a custom constructor function for Jazz Bands

    // Create a new object with the specified properties

    // Return the newly created band object


// Examples to test in console:
const band = JazzBand("The Jazz Messengers", "Hard Bop");
console.log("Jazz Band:", band);

// Task 6 : Implement a class with default parameters for Jazz Instruments


// Examples to test in console:
const saxophonist = new JazzInstrument();
console.log("Default Saxophonist:", saxophonist);
