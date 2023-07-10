import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({pageCount, handlePageClick, itemsPerPage}) => {

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={itemsPerPage}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className={'pagination'}
            />
        </>
    );
};

export default Pagination;