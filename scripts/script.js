// Functional Programming Tasks:

// Task 1: Implement a function that calculates total earnings
function calculateEarnings(earnings){
    let total = 0;
    for (const earning of earnings){
        total += earning.amount;
    }
}
    // Calculate the total earnings by summing up ticket prices
    return total;

// Examples to test in console:
const ticketPrices = [20, 25, 30];
const totalEarnings = calculateEarnings(ticketPrices);
console.log("Total Earnings:", totalEarnings);

// Task 2: Implement a function to filter out free events from a list of events
function filterFreeEvents(events){
    let paidEvents = [];
    for (const event of events){
        if (event.paid > 0, paidEvents.push(events)){
    }
    return paidEvents;
    }
}
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
class JazzMusician{
    constructor(name = "Louis Armstrong", instrument = "Trumpet"){
        this.name = name;
        this.instrument = instrument;
    }
}

// Examples to test in console:
const musician = new JazzMusician("Louis Armstrong", "Trumpet");
//Note that "Louis Armstrong" represents the musician NAME, and "Trumpet" represents musician INSTRUMENT
console.log("Jazz Musician:", musician);

// Task 4: Extend the JazzMusician class for Vocalists
class vocalist extends JazzMusician{
    constructor(name, style){
        super(name, style);
    }
}

// Examples to test in console:
const vocalist = new Vocalist("Ella Fitzgerald", "Scat");
//Note that "Ella Fitzgerald" represents the musician NAME, and "Scat" represents musician STYLE
console.log("Jazz Vocalist:", vocalist);



// Classes and Constructors Tasks:

// Task 5: Create a custom constructor function for Jazz Bands
function JazzBand(name, genre){
    let band = {};
    band.name = name;
    band.genre = genre;
    return band;
}
    // Create a new object with the specified properties

    // Return the newly created band object


// Examples to test in console:
const band = JazzBand("The Jazz Messengers", "Hard Bop");
//Note that "The Jazz Messengers" represents the musician NAME, and "Hard Bop" represents musician GENRE
console.log("Jazz Band:", band);

// Task 6 : Implement a class with default parameters for Jazz Instruments.
// The default TYPE should be Saxophone, and the default PLAYER should be John Coltrane.
class JazzInstrument{
    constructor(name = "John Coltrane", instrument = "saxophone"){
        this.player = name;
        this.type = instrument;
    }
}

// Examples to test in console:
const saxophonist = new JazzInstrument();
console.log("Default Saxophonist:", saxophonist);
