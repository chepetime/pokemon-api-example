import React from "react";

export default function PageControl({ page, setPage }) {
  return (
    <>
      <div>
        <p>Current page: {page}</p>
      </div>
      <div>
        <button
          onClick={() => setPage((currentPage) => --currentPage)}
          disabled={page === 0}
        >
          <span>Prev</span>
        </button>
        <button onClick={() => setPage((currentPage) => ++currentPage)}>
          <span>Next</span>
        </button>
      </div>
    </>
  );
}
