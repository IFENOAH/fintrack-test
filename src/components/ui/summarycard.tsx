import { MoreHorizontal } from "react-feather";

interface ISummaryCardProps {
    title: string;
    value: string | number;
    stat: string;
    currency: boolean
}

export const SummaryCard = ({
    title,
    value,
    stat,
    currency = true
}: ISummaryCardProps) => {
    return (
        <div className="flex flex-col p-6 bg-[#34616F09] rounded-3xl gap-6">
            <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <MoreHorizontal className="cursor-pointer" />
            </div>

            <div className="flex flex-col items-start gap-1">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900">{currency ? "$" : null}{value}</p>
                <p className="text-xs text-[#3E7383]">{stat}</p>
            </div>
        </div>
    );
}