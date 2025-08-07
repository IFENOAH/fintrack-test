interface IEmptyStateProps {
    iconNode?: React.ReactNode;
    icon?: string;
    text: string;
    subtext: string;
    node?: React.ReactNode;
    color?: string;
    height?: string;
    width?: string;
}

export const EmptyState = ({ iconNode, icon, text, subtext, node, color, height, width }: IEmptyStateProps) => {
    return (
        <div className='w-full flex items-center justify-center m-auto flex-col gap-2 h-full'>
            {
                iconNode ?
                    iconNode : null
            }
            {icon ?
                <img
                    className={`${height} ${width} `}
                    src={icon}
                    style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover",
                        backgroundColor: "transparent"
                    }}
                    onError={(e) => { }}
                    alt="empty"
                /> : null
            }
            <p className={`${color ? color : "text-black"} text-center text-base font-bold`}>{text}</p>
            <span className={`${color ? color : "text-gray-500"} w-full md:w-2/3 xl:w-2/4 text-sm text-center font-normal`}>{subtext}</span>
            {!!node && node}
        </div>
    )
}