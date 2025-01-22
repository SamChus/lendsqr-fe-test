import React, { useState } from "react";
import styles from "@/styles/components/Pagination.module.scss";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const maxVisibleButtons = 5;

    const getPaginationButtons = () => {
        const buttons = [];
        if (totalPages <= maxVisibleButtons) {
            for (let i = 1; i <= totalPages; i++) {
                buttons.push(i);
            }
        } else {
            if (currentPage <= 3) {
                buttons.push(1, 2, 3, 4, "...", totalPages);
            } else if (currentPage >= totalPages - 2) {
                buttons.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                buttons.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
            }
        }
        return buttons;
    };

    return (
        <div className={styles.pagination}>
            <button
                className={styles.arrowButton}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &lt;
            </button>
            {getPaginationButtons().map((button, index) =>
                button === "..." ? (
                    <span key={index} className={styles.ellipsis}>
                        ...
                    </span>
                ) : (
                    <button
                        key={index}
                        className={`${styles.pageButton} ${
                            button === currentPage ? styles.active : ""
                        }`}
                        onClick={() => onPageChange(Number(button))}
                    >
                        {button}
                    </button>
                )
            )}
            <button
                className={styles.arrowButton}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;
