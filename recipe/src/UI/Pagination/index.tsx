

const Pagination = ({ currentPage, totalPages, onPageChange }:any) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex gap-x-2 text-sm">
                {/* Previous button */}
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage > 1) {
                                onPageChange(currentPage - 1);
                            }
                        }}
                        className={`flex items-center justify-center px-3 h-8 ${
                            currentPage === 1
                                ? "bg-[#FF0000]/[58%] text-white cursor-not-allowed"
                                : "bg-[#FF0000]/[58%] text-white"
                        }`}
                    >
                        Previous
                    </a>
                </li>

                {/* Page numbers */}
                {pages.map((page) => (
                    <li key={page}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onPageChange(page);
                            }}
                            className={`flex items-center justify-center px-3 h-8 border text-black ${
                                currentPage === page ? "bg-[#FF0000]/[58%] text-white" : ""
                            }`}
                        >
                            {page}
                        </a>
                    </li>
                ))}

                {/* Next button */}
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            if (currentPage < totalPages) {
                                onPageChange(currentPage + 1);
                            }
                        }}
                        className={`flex items-center justify-center px-3 h-8 ${
                            currentPage === totalPages
                                ? "bg-[#FF0000]/[58%] text-white cursor-not-allowed"
                                : "bg-[#FF0000]/[58%] text-white"
                        }`}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;  