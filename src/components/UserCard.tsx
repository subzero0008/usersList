// Import the User type definition from the types file
import type { User } from '../types';

// Define the props for the UserCard component, which expects a single User object
interface UserCardProps {
  user: User;
}

// Functional component that displays detailed information about a single user
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      {/* User name and username */}
      <div className="user-card-header">
        <h3>{user.name}</h3>
        <span className="username">@{user.username}</span>
      </div>
      
      {/* Contact information section */}
      <div className="user-info">
        <div className="info-row">
          <span className="info-label">Email:</span>
          <span className="info-value">{user.email}</span>
        </div>
        
        <div className="info-row">
          <span className="info-label">Phone:</span>
          <span className="info-value">{user.phone}</span>
        </div>
        
        <div className="info-row">
          <span className="info-label">Website:</span>
          {/* Open user's website in a new tab */}
          <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </div>
      </div>
      
      {/* Address section */}
      <div className="address-section">
        <h4>Address</h4>
        <p>{user.address.street}, {user.address.suite}</p>
        <p>{user.address.city}, {user.address.zipcode}</p>
        <p>Coordinates: {user.address.geo.lat}, {user.address.geo.lng}</p>
      </div>
      
      {/* Company details section */}
      <div className="company-section">
        <h4>Company</h4>
        <p><strong>{user.company.name}</strong></p>
        <p>{user.company.catchPhrase}</p>
        <p className="bs">{user.company.bs}</p>
      </div>
    </div>
  );
}
