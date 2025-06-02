// Import necessary hooks from React and external libraries
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { User } from './types'; // Import the User type definition
import UserList from './components/UserList'; // Component to display list of users
import Pagination from './components/Pagination'; // Component to handle pagination controls
import './styles.css'; // Import styles

function App() {
  // State for the list of users
  const [users, setUsers] = useState<User[]>([]);
  
  // State to track loading status
  const [loading, setLoading] = useState<boolean>(true);
  
  // State to store any error messages
  const [error, setError] = useState<string | null>(null);
  
  // State to keep track of the current page for pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  
  // Constant defining how many users to show per page
  const usersPerPage = 3;

  // useEffect to fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch user data from the API
        const response = await axios.get<User[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        // Save the fetched users to state
        setUsers(response.data);
      } catch (err) {
        // If there's an error, show an error message
        setError('Error loading users. Please try again later.');
      } finally {
        // Set loading to false after the fetch is done
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs only once on mount

  // Calculate the indices to slice the users array for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Function to update the current page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="app-content">
          {/* Header section with title and subtitle */}
          <header className="app-header">
            <h1>User Directory</h1>
          
          </header>

          {/* Conditional rendering based on loading and error states */}
          {loading ? (
            // Show loading spinner if data is still loading
            <div className="loading-container">
              <div className="spinner"></div>
              <p>Loading users...</p>
            </div>
          ) : error ? (
            // Show error message if there was an error fetching data
            <div className="error-message">
              <p>⚠️ {error}</p>
            </div>
          ) : (
            // Otherwise, show the user list and pagination controls
            <>
              <UserList users={currentUsers} />
              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            </>
          )}
        </div>

        {/* Footer section */}
        <footer className="app-footer">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Created by Yulian Yuriev</p>
            <p>All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
