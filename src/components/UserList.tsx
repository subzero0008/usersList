// Import the UserListProps type from the types file
import type { UserListProps } from '../types';

// Import the UserCard component, which displays individual user information
import UserCard from './UserCard';

// Functional component that receives an array of users as props
const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    // Container for the list of users
    <div className="user-list">
      {/* Iterate over the users array and render a UserCard for each user */}
      {users.map((user) => (
        // Use user ID as a unique key for each element
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
