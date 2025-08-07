import classNames from "classnames";
import React, { ReactNode } from "react";

interface IButtonProps {
    id?: string;
    color?: string;
    radius?: string;
    tColor?: string;
    icon?: string;
    loadColor?: string;
    isLoading?: boolean;
    fullWidth?: boolean;
    className?: string;
    children?: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    rounded?: boolean;
    variant?: 'primary' | 'outline';
    onClick?: () => void;
    disabled?: boolean;
    form?: string;
    type?: 'button' | 'submit' | 'reset';
    ref?: React.Ref<HTMLButtonElement>;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaPressed?: boolean;
    [key: string]: any;
}

export const Button = ({
    id,
    color,
    radius,
    tColor,
    icon,
    loadColor,
    isLoading,
    fullWidth,
    className,
    children,
    leftIcon,
    rightIcon,
    rounded = true,
    variant = "primary",
    onClick,
    disabled,
    form,
    type = "button",
    ref,
    ariaLabel,
    ariaDescribedBy,
    ariaPressed,
    ...props
}: IButtonProps) => {

    const baseClass = (
        `font-medium text-sm cursor-pointer select-none [outline:none] disabled:cursor-not-allowed space-x-2
      disabled:bg-opacity-50 disabled:text-opacity-30 ${fullWidth ? "w-full text-center flex items-center justify-center" : "flex items-center justify-between"}
      transition-all ease-in-out duration-300 px-5 py-2.5`
    )
    const primaryClass = (`bg-[var(--color-fprimary-100)] text-[var(--color-fblack-200)]`)
    const outlineClass = (`text-[var(--color-fblack-200)] border bg-[var(--color-fprimary-100)]`)


    const buttonMap = {
        "primary": primaryClass,
        "outline": outlineClass,
    }

    return (
        <button
            ref={ref}
            type={type}
            onClick={onClick}
            form={form}
            id={id}
            disabled={disabled}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy}
            aria-pressed={ariaPressed}
            aria-busy={isLoading}
            aria-live={isLoading ? "polite" : undefined}
            className={classNames(baseClass,
                rounded ? "rounded-2xl" : "",
                buttonMap[variant],
                className
            )}
            {...props}
        >
            {!!leftIcon && !isLoading && <span aria-hidden="true">{leftIcon}</span>}
            {children && !isLoading ? <span className="whitespace-nowrap">{children}</span> : null}
            {icon && !isLoading ? <span aria-hidden={!!children}>{icon}</span> : null}
            {!!rightIcon && !isLoading && <span aria-hidden="true">{rightIcon}</span>}
        </button>
    );
}