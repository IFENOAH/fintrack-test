'use client'

import React, { useMemo, useState } from 'react'
import classNames from 'classnames'
import { getNameInitials } from '@/helpers/getNameInitials';


interface IAvatarProps {
    name?: string;
    src?: string;
    maxInitials?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export const Avatar = ({ name, src, maxInitials = 2, size = "sm" }: IAvatarProps) => {

    const [hasError, setHasError] = useState(false);

    const baseClass = classNames('flex items-center justify-center rounded-full')
    const xtrasmallClass = classNames('w-8 h-8 text-xs')
    const smallClass = classNames('w-12 h-12 text-sm')
    const mediumClass = classNames('w-16 h-16 text-xl')
    const largeClass = classNames('w-20 h-20 text-2xl')
    const exLargeClass = classNames('w-24 h-24 text-3xl')
    const xxLargeClass = classNames('w-32 h-32 text-5xl')

    const sizeMap = {
        xs: xtrasmallClass,
        sm: smallClass,
        md: mediumClass,
        lg: largeClass,
        xl: exLargeClass,
        xxl: xxLargeClass,
    }

    const getAvatar = useMemo(() => {
        const hasImageSrc = !!src && src?.length;

        if ((!hasImageSrc && name) || hasError)
            return (
                <div
                    className={classNames(baseClass, sizeMap[size] ?? mediumClass,
                        `font-light bg-gray-300 border-1 border-white`
                    )}
                >
                    {getNameInitials({ name, maxInitials })}
                </div>
            );

        if (hasImageSrc && !hasError)
            return (
                <div className={classNames(baseClass, sizeMap[size] ?? largeClass)}>
                    <img
                        loading='lazy'
                        className={classNames(baseClass, sizeMap[size] ?? largeClass)}
                        style={{
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            objectFit: "cover",
                        }}
                        src={src}
                        alt={name}
                        onError={(event) => setHasError(true)}
                    />
                </div>
            );

        if (hasError) return null;
        return null;

    }, [src, size, name, hasError, maxInitials])

    return getAvatar;
}