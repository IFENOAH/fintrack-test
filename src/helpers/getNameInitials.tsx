interface IGetNameInitialsProps {
    name?: string;
    maxInitials?: number;
}

export const getNameInitials = ({ name, maxInitials = 2 }: IGetNameInitialsProps) => {
    if (!name) return '';
    return name?.split(/\s/)
        .map((part) => part.substring(0, 1).toUpperCase())
        .filter((value) => !!value)
        .slice(0, maxInitials)
        .join('')
        .toUpperCase();
};
