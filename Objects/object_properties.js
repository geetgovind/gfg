const title = `Objects in JS and it's properties`;
console.log(title);
console.log("-------------------------------");

let schoolName = {
    name: "Kendriya Vidyalaya",
    location: "New Delhi",
    established: 1965,
    displayInfo: function () {
        console.log(`${this.name} was established in ${this.established} and located in ${this.location}`)
    }
};

schoolName.displayInfo();
