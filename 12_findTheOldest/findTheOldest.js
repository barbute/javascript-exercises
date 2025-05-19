const findTheOldest = function(people) {
    let oldest;
    let oldestAge = 0;
    let year = new Date().getFullYear();
    for (let i = 0; i < people.length - 1; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = year;
        }
        if (people[i+1].yearOfDeath === undefined) {
            people[i+1].yearOfDeath = year;
        }
        let personOneAge = 
            people[i].yearOfDeath - people[i].yearOfBirth;
        let personTwoAge = 
            people[i+1].yearOfDeath - people[i+1].yearOfBirth;

        if (personOneAge > personTwoAge) {
            if (personOneAge > oldestAge) {
                oldest = people[i];
                oldestAge = personOneAge;
            }
        } else if (personTwoAge > oldestAge) {
            oldest = people[i+1];
            oldestAge = personTwoAge;
        }
    };
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
