// Interface representing geographical coordinates
export interface Geo {
  lat: string; // Latitude
  lng: string; // Longitude
}

// Interface representing a user's address, including nested geo data
export interface Address {
  street: string;    // Street name
  suite: string;     // Suite or apartment number
  city: string;      // City
  zipcode: string;   // Postal code
  geo: Geo;          // Geographical coordinates
}

// Interface representing a user's company details
export interface Company {
  name: string;         // Company name
  catchPhrase: string;  // Company slogan or tagline
  bs: string;           // Business strategy or buzzwords
}

// Interface representing a full user object
export interface User {
  id: number;           // Unique user ID
  name: string;         // Full name
  username: string;     // Username
  email: string;        // Email address
  address: Address;     // Address information
  phone: string;        // Phone number
  website: string;      // Personal or company website
  company: Company;     // Company information
}

// Type representing the props expected by the UserList component
export type UserListProps = {
  users: User[]; // Array of users to be displayed
};
