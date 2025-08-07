import { Table, TableColumn } from "@/components/primitives/table";
import { StatusPill } from "@/components/ui/statuspill";

interface Transaction {
    date: string;
    remark: string;
    amount: string;
    currency: string;
    type: 'credit' | 'debit';
}

export const OverviewTable: React.FC = () => {
    const transactionData: Transaction[] = [
        { date: '2023-10-01', remark: 'Salary', amount: '$3,000', currency: 'USD', type: 'credit' },
        { date: '2023-10-02', remark: 'Groceries', amount: '-$150', currency: 'USD', type: 'debit' },
        { date: '2023-10-03', remark: 'Gym Membership', amount: '-$50', currency: 'USD', type: 'debit' },
        { date: '2023-10-04', remark: 'Dinner', amount: '-$40', currency: 'USD', type: 'debit' },
        { date: '2023-10-05', remark: 'Movie Tickets', amount: '-$30', currency: 'USD', type: 'debit' },
        { date: '2023-10-06', remark: 'Rent', amount: '-$1,200', currency: 'USD', type: 'debit' },
        { date: '2023-10-07', remark: 'Utilities', amount: '-$100', currency: 'USD', type: 'debit' },
        { date: '2023-10-08', remark: 'Car Payment', amount: '-$400', currency: 'USD', type: 'debit' },
        { date: '2023-10-09', remark: 'Insurance', amount: '-$200', currency: 'USD', type: 'debit' },
    ];

    const transactionColumns: TableColumn[] = [
        { key: 'date', label: 'Date', align: 'left' },
        { key: 'remark', label: 'Remark', align: 'left' },
        { key: 'amount', label: 'Amount', align: 'right' },
        { key: 'currency', label: 'Currency', align: 'center' },
        {
            key: 'type',
            label: 'Type',
            align: 'center',
            render: (value) => (
                <StatusPill status={value} />
            )
        }
    ];

    return (
        <Table
            columns={transactionColumns}
            data={transactionData}
            defaultSort={{ key: 'date', direction: 'asc' }}
        />
    );
};