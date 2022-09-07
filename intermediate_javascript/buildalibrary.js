class School {
    constructor(name, level, numOfStudents) {
      this._name = name;
      this._level = level;
      this._numOfStudents = numOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numOfStudents() {
      return this._numOfStudents;
    }
  
    set numOfStudents(value) {
      if (value.isNaN()) {
        console.log("Invalid input: numOfStudents must be set to a Number.");
      } else {
        this._numOfStudents = value;
      }
    }
  
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`
      );
    }
  
    static pickSubstituteTeacher(subTeacher) {
      let randIt = Math.floor(subTeacher.length * Math.random());
      return subTeacher[randIt];
    }
  }
  
  class Primary extends School {
    constructor(name, numOfStudents, pickupPolicy) {
      super(name, "primary", numOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class Middle extends School {
    constructor(name, numOfStudents) {
      super(name, "middle", numOfStudents);
    }
  }
  
  class High extends School {
    constructor(name, numOfStudents, sportsTeams) {
      super(name, "high", numOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
const lorraineHansbury = new Primary(
    "Lorraine Hansbury",
    514,
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
  );
lorraineHansbury.quickFacts();
const sub = School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ]);
  
const alSmith = new High("Al E. Smith", 415, [
    "Baseball",
    "Basketball",
    "Volleyball",
    "Track and Field",
  ]);
  
console.log(alSmith.sportsTeams);
  