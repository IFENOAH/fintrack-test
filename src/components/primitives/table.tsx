'use client';

import React, { useState } from 'react';

export interface TableColumn {
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    render?: (value: any, row: any) => React.ReactNode;
}

interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}

interface ReusableTableProps {
    columns: TableColumn[];
    data: any[];
    defaultSort?: { key: string; direction: 'asc' | 'desc' };
}

export const Table: React.FC<ReusableTableProps> = ({
    columns,
    data,
    defaultSort
}) => {
    const [sortConfig, setSortConfig] = useState<SortConfig | null>(
        defaultSort || null
    );

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';

        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        setSortConfig({ key, direction });
    };

    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;

        return [...data].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortConfig.direction === 'asc'
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return sortConfig.direction === 'asc'
                    ? aValue - bValue
                    : bValue - aValue;
            }

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                const numA = parseFloat(aValue.replace(/[$,-]/g, ''));
                const numB = parseFloat(bValue.replace(/[$,-]/g, ''));

                if (!isNaN(numA) && !isNaN(numB)) {
                    return sortConfig.direction === 'asc'
                        ? numA - numB
                        : numB - numA;
                }
            }

            return 0;
        });
    }, [data, sortConfig]);

    const getSortIcon = (columnKey: string) => {
        const isActive = sortConfig && sortConfig.key === columnKey;
        const isAscending = isActive && sortConfig.direction === 'asc';

        return (
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${isAscending ? 'rotate-180' : 'rotate-0'
                    } ${isActive ? 'opacity-100' : 'opacity-40'}`}
            >
                <path
                    d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764766 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z"
                    fill="#15272D"
                    fillOpacity="0.62"
                />
            </svg>
        );
    };

    const getAlignmentClass = (align: string = 'left') => {
        switch (align) {
            case 'center': return 'text-center';
            case 'right': return 'text-right';
            default: return 'text-left';
        }
    };

    return (
        <div className="bg-white overflow-x-auto">
            <table className="w-full min-w-max">
                <thead>
                    <tr className="border-b border-gray-300">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className={`px-6 py-4 text-sm font-normal text-gray-500 ${getAlignmentClass(column.align)} ${column.sortable !== false ? 'cursor-pointer hover:text-gray-700' : ''
                                    }`}
                                onClick={() => column.sortable !== false && handleSort(column.key)}
                            >
                                <div className={`flex items-center gap-1 ${column.align === 'right' ? 'justify-end' :
                                    column.align === 'center' ? 'justify-center' : 'justify-start'
                                    }`}>
                                    <span>{column.label}</span>
                                    {column.sortable !== false && getSortIcon(column.key)}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((row, index) => (
                        <tr key={index} className="border-b border-gray-200">
                            {columns.map((column) => (
                                <td
                                    key={column.key}
                                    className={`px-6 py-5 text-sm text-gray-900 ${getAlignmentClass(column.align)}`}
                                >
                                    {column.render
                                        ? column.render(row[column.key], row)
                                        : row[column.key]
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};