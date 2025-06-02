import type { FC } from 'react';

// Define the props interface for Pagination component
interface PaginationProps {
  usersPerPage: number;    // Number of users to show per page
  totalUsers: number;      // Total number of users to paginate through
  currentPage: number;     // Currently active page number
  paginate: (pageNumber: number) => void;  // Function to call when page changes
}

const Pagination: FC<PaginationProps> = ({ 
  usersPerPage, 
  totalUsers, 
  currentPage,
  paginate 
}) => {
  const pageNumbers = [];

  // Calculate total pages needed and fill pageNumbers array
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination-list">
        {/* Render a button for each page number */}
        {pageNumbers.map(number => (
          <li key={number} className="pagination-item">
            <button
              onClick={() => paginate(number)} // Call paginate function with selected page number
              className={`pagination-link ${currentPage === number ? 'active' : ''}`} // Highlight active page
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
