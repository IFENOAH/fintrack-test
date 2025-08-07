'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

interface IRouteTabProps {
    tabs: { title: string, text: string }[]
    children?: React.ReactNode
}

interface ITabButtonProps {
    text: string
    onClick: () => void
    type?: 'text' | 'active' | null,
    activeTab?: boolean
}

export const RouteTabs = ({ tabs, children }: IRouteTabProps) => {

    const navigate = useRouter()
    const pathname = usePathname()

    const activePath = pathname.split('/').splice(-1)[0]

    const handleTabClick = (id: any) => {
        navigate.replace(`${id}`)
    }

    return (
        <>
            <div className={`z-[12] sticky top-0 flex items-center justify-start gap-5 sm:gap-8 overflow-x-auto w-full border-b border-[#DCDCDC] no-scrollbar bg-white mb-2`}>
                {tabs?.map(item => (
                    <TabButton
                        key={item.title}
                        text={item.title}
                        type={item.text === activePath ? null : "text"}
                        onClick={() => handleTabClick(item.text)}
                        activeTab={activePath === item.text}
                    />
                ))
                }
            </div>
            <div className='w-full'>
                {children}
            </div>
        </>
    )
}

export const TabButton = ({ text, onClick, type, activeTab }: ITabButtonProps) => {
    return (
        <div onClick={onClick}
            className={`
                text-sm font-medium cursor-pointer relative
                flex items-center justify-center `
            }
        >
            <div className='flex items-center justify-center gap-1 py-2 pt-4'>
                <span className={`w-full text-sm font-medium z-10 whitespace-nowrap ${activeTab ? 'text-[var(--color-fprimary-400)]' : 'text-[#15272D60]'} px-4 `}>{text}</span>
            </div>
            {
                type !== 'text' ?
                    <motion.div
                        layoutId='active-pill'
                        className='border-b border-[var(--color-fprimary-400)] absolute inset-0 p-3 w-full'
                    />
                    :
                    null
            }
        </div>
    )
}