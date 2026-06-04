"use client"
import React, { useState } from 'react';
import styles from './pagination.module.scss';

interface PaginationProps<T> {
    data: T[];
    itemsPerPage: number;
    renderItems: (items: T[]) => React.ReactNode;
}

function Pagination<T>({ data, itemsPerPage, renderItems }: PaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.pageContent}>
                {renderItems(currentItems)}
            </div>

            {totalPages > 1 && (
                <div className={styles.paginationControls}>
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={styles.arrow}
                    >
                        ◄
                    </button>

                    <div className={styles.btnList}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`${currentPage === page ? `${styles.active}` : styles.pageBtn}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={styles.arrow}
                    >
                        ►
                    </button>
                </div>
            )}
        </section>
    );
}

export default Pagination;