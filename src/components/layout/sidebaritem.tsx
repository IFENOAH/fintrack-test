'use client'

import { ReactNode, cloneElement, isValidElement } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface ISideBarItemProps {
    children: string | ReactNode
    url: string
    icon?: React.ReactElement<{ className?: string }>
    onClick?: () => void
}

export const SideBarItem = ({ children, url, icon, onClick }: ISideBarItemProps) => {
    const pathname = usePathname()
    const currentPath = pathname.split('/')[1]
    const itemPath = url.split('/')[1]
    const isActive = currentPath === itemPath

    return (
        <Link onClick={onClick} href={url} passHref>
            <div
                className={`
                w-full flex items-center rounded-full justify-between px-4 py-2
                ${isActive ? "bg-[rgba(var(--color-fsecondary-100-rgb),0.16)] text-[var(--color-fprimary-200)]" : "text-[var(--color-fblack-200)]"}`}
            >
                <div className="flex items-center justify-between">
                    <span aria-hidden="true">
                        {icon && isValidElement(icon) &&
                            cloneElement(icon, {
                                className: 'w-5 h-5 text-vencru-darkgray',
                            })}
                    </span>
                    <h2 className="px-4 text-sm font-medium">{children}</h2>
                </div>
            </div>
        </Link>
    )
}
