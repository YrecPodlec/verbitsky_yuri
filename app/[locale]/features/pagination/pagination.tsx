"use client"
import React, { useState } from 'react';
import styles from './pagination.module.scss';

interface PaginationProps<T> {
    data: T[];                    // массив любых объектов (проекты, посты и т.д.)
    itemsPerPage: number;         // сколько элементов на одной странице (2, 3, 5, 10…)
    renderItems: (items: T[]) => React.ReactNode;  // как отрисовывать текущую страницу
}

function Pagination<T>({ data, itemsPerPage, renderItems }: PaginationProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    // Переход на конкретную страницу
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <section className={styles.section}>
            {/* === ОТРИСОВКА ТЕКУЩЕЙ СТРАНИЦЫ === */}
            <div className={styles.pageContent}>
                {renderItems(currentItems)}
            </div>

            {/* === ПАГИНАЦИЯ === */}
            {totalPages > 1 && (
                <div className={styles.paginationControls}>
                    {/* Стрелка влево */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={styles.arrow}
                    >
                        ◄
                    </button>

                    <div className={styles.btnList}>
                        {/* Нумерованные кнопки */}
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

                    {/* Стрелка вправо */}
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