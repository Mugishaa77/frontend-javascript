// Define MajorCredits interface
export interface MajorCredits {
  credits: number;
  _majorBrand: 'Major'; // Brand property for unique identification
}

// Define MinorCredits interface
export interface MinorCredits {
  credits: number;
  _minorBrand: 'Minor'; // Brand property for unique identification
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'Major'
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'Minor'
  };
}

// Example usage (optional for testing)
const major1: MajorCredits = { credits: 3, _majorBrand: 'Major' };
const major2: MajorCredits = { credits: 4, _majorBrand: 'Major' };

const minor1: MinorCredits = { credits: 2, _minorBrand: 'Minor' };
const minor2: MinorCredits = { credits: 1, _minorBrand: 'Minor' };

console.log('Sum Major Credits:', sumMajorCredits(major1, major2));
console.log('Sum Minor Credits:', sumMinorCredits(minor1, minor2));
