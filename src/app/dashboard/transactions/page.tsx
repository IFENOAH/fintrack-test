'use client';

import { SummaryCard } from "@/components/ui/summarycard";
import { Fake_Transactions2 } from "@/fakedata";
import { EmptyState } from "@/components/ui/emptystate";

export default function Transactions() {
    return (
        <div className="flex flex-col gap-12">

            <section className="flex flex-col gap-4">
                <h1 className="text-xl font-bold">Summary</h1>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        Fake_Transactions2?.map((transaction) => (
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

            <section className="flex items-center justify-center gap-4">
                {/* <OverviewTable /> */}
                <EmptyState
                    iconNode={
                        <svg width="565" height="281" viewBox="0 0 565 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M304.851 22.486C346.021 23.1724 392.51 -3.37783 423.672 23.5363C455.271 50.8268 448.122 100.847 443.643 142.358C439.743 178.514 426.816 212.907 400.532 238.038C374.836 262.607 340.389 239.003 304.851 238.038C270.24 237.1 241.413 297.624 215.149 275.063C186.005 250.03 156.093 180.346 150.359 142.358C143.798 98.8904 180.417 35.9548 215.149 9.0065C248.792 -17.0978 262.274 21.7761 304.851 22.486Z" fill="#F6F6F6" />
                            <g filter="url(#filter0_d_132_357)">
                                <rect x="30.5" y="44.5071" width="504" height="158" rx="16" fill="white" shape-rendering="crispEdges" />
                                <rect x="54.5" y="68.5071" width="176" height="110" rx="12" fill="#F3F3F3" />
                                <rect opacity="0.7" x="246.5" y="84.5071" width="220" height="16" rx="8" fill="#D9D9D9" />
                                <g opacity="0.4">
                                    <rect x="246.5" y="124.507" width="264" height="15" rx="7.5" fill="#D9D9D9" />
                                    <rect x="246.5" y="147.507" width="160" height="15" rx="7.5" fill="#D9D9D9" />
                                </g>
                            </g>
                            <defs>
                                <filter id="filter0_d_132_357" x="0.5" y="29.5071" width="564" height="218" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="15" />
                                    <feGaussianBlur stdDeviation="15" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.207843 0 0 0 0 0.239216 0 0 0 0.1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_132_357" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_132_357" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    }
                    text="No Transaction table details added."
                    subtext="when details are added they would be appear here."
                />
            </section>
        </div>
    );
}