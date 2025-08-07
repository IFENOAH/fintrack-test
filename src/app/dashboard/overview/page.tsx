'use client';

import { SummaryCard } from "@/components/ui/summarycard";
import { Fake_Transactions } from "@/fakedata";
import { OverviewTable } from "./overviewtable";

export default function Overview() {
    return (
        <div className="flex flex-col gap-12">

            <section className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Summary</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        Fake_Transactions?.map((transaction) => (
                            <SummaryCard
                                key={transaction.id}
                                title={transaction.title}
                                value={transaction.value}
                                stat={transaction.stat}
                                currency={transaction.currency}
                            />
                        ))
                    }
                </div>
            </section>

            <section>
                <OverviewTable />
            </section>
        </div>
    );
}