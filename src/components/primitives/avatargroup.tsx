'use client'

import classNames from 'classnames';
import React from 'react'
import { Avatar } from './avatar'

interface IAvatarProps {
    data: { name: string; img?: string }[];
    margin?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

interface IAvatarGroupContainerProps {
    name: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    img?: string;
    id: number;
    margin: number;
    remainder: number;
}

export const AvatarGroup = ({ data, margin = 5, size = "sm" }: IAvatarProps) => {

    const remainder = data?.length > 4 ? data.length - 4 : 0;

    const getDisplayText = () => {
        if (!data || data.length === 0) return '';

        const firstTwoNames = data.slice(0, 2).map(item => item.name).join(', ');

        if (data.length > 4) {
            const othersText = remainder === 1 ? 'other' : 'others';
            return `${firstTwoNames} + ${remainder} ${othersText}`;
        }

        return firstTwoNames;
    };

    return (
        <div className='flex items-center'>
            {
                data.map((item, index) => (
                    <AvatarGroupContainer
                        key={index}
                        id={index}
                        name={item.name}
                        size={size}
                        img={item.img}
                        margin={margin}
                        remainder={remainder}
                    />
                ))
            }
            <span className='px-2 text-sm text-[#15272D60]'>{getDisplayText()}</span>
        </div>
    )
}

const AvatarGroupContainer = ({ name, size, img, id, margin, remainder }: IAvatarGroupContainerProps) => {

    return (
        <div className=''>
            <div className={`${id === 0 ? '' : '-ml-5'} ${id >= 4 && 'hidden'} border border-white rounded-full`}>
                <Avatar
                    name={name}
                    size={size}
                    src={img}
                />
            </div>
        </div>
    )
}