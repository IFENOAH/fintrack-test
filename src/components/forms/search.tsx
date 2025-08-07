'use client';

import React, { useState, useRef, useEffect } from 'react';

interface AnimatedSearchProps {
    onSearch?: (query: string) => void;
    placeholder?: string;
    className?: string;
}

export const AnimatedSearch: React.FC<AnimatedSearchProps> = ({
    onSearch,
    placeholder = "Search...",
    className = ""
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when expanded
    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isExpanded]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.parentElement?.contains(event.target as Node)) {
                if (searchQuery === '') {
                    setIsExpanded(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchQuery]);

    const handleIconClick = () => {
        setIsExpanded(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        onSearch?.(value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setIsExpanded(false);
            setSearchQuery('');
            onSearch?.('');
        }
    };

    const handleClear = () => {
        setSearchQuery('');
        setIsExpanded(false);
        onSearch?.('');
    };

    return (
        <div className={`relative flex items-center ${className}`}>

            <div className={`
                flex items-center rounded-2xl
                transition-all duration-300 ease-in-out overflow-hidden
                ${isExpanded
                    ? 'w-64 px-3 py-2 shadow-xs border border-gray-200'
                    : 'w-10 h-10 p-2 cursor-pointer'
                }
            `}>

                <div
                    className={`flex-shrink-0 transition-all duration-300 ${isExpanded ? 'mr-2' : 'cursor-pointer'
                        }`}
                    onClick={!isExpanded ? handleIconClick : undefined}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.0004 19.25L14.6504 14.9M17 9.25C17 13.6683 13.4183 17.25 9 17.25C4.58172 17.25 1 13.6683 1 9.25C1 4.83172 4.58172 1.25 9 1.25C13.4183 1.25 17 4.83172 17 9.25Z"
                            stroke="#1B2528"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className={`
                        flex-1 bg-transparent border-none outline-none text-sm text-gray-900
                        transition-all duration-300 placeholder-gray-400
                        ${isExpanded
                            ? 'w-auto opacity-100 translate-x-0'
                            : 'w-0 opacity-0 -translate-x-4 pointer-events-none'
                        }
                    `}
                />

                {isExpanded && searchQuery && (
                    <button
                        onClick={handleClear}
                        className="flex-shrink-0 ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M12 4L4 12M4 4L12 12"
                                stroke="#6B7280"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};