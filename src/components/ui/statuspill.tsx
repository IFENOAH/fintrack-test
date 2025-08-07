interface IStatusPillProps {
    status: "active" | "credit" | "debit";
}

export const StatusPill = ({ status }: IStatusPillProps) => {

    const statusMap = {
        active: "bg-[#087A2E]",
        credit: "bg-[#087A2E]",
        debit: "bg-[#C6381B]"
    };

    return (
        <p
            className={`bg-[rgba(var(--color-fsecondary-100-rgb),0.16)] inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[rgba(var(--color-fblack-100-rgb),0.16)]`}
        >
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${statusMap[status]}`}></span>
            {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
    );
}