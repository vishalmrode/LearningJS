/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Society {
  constructor(
    // Defines parameters:
    name,
    address,
    color,
    societyNum,
    societyLength,
    societyWidth,
    security,
    dateAcquired
  ) {
    // Define properties:
    this.name = name;
    this.address = address;
    this.color = color;
    this.societyNum = societyNum;
    this.societyArea = {
      length: societyLength,
      width: societyWidth,
    };
    this.security = security;
    this.dateAcquired = dateAcquired;
  }
  // Add methods like normal functions:
  toggleSecurity(securityStatus) {
    this.securityOpen = securityStatus;
  }
  newSocietyArea(societyLength, societyWidth) {
    this.societyArea.length = societyLength;
    this.societyArea.width = societyWidth;
  }
  societyAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24 * 30));
    return daysSinceAcquired;
  }
}

class PrimeSociety extends Society {
  constructor(
    name,
    address,
    color,
    societyNum,
    societyLength,
    societyWidth,
    security,
    communityHall,
    dateAcquired
  ) {
    // Initialize the parent class properties
    super(
      name,
      address,
      color,
      societyNum,
      societyLength,
      societyWidth,
      security,
      dateAcquired
    );
    this.communityHall = communityHall;
  }
  togglecommunityHall(hallStatus) {
    this.hallOpen = hallStatus;
  }
  societyAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24 * 30));
    return daysSinceAcquired;
  }
}

export { Society, PrimeSociety };
