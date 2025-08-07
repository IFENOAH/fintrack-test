import { Button } from "@/components/forms/button";
import { AvatarGroup } from "@/components/primitives/avatargroup";
import { RouteTabs } from "@/components/primitives/routeTabs";
import { StatusPill } from "@/components/ui/statuspill";
import { Fake_Users } from "@/fakedata";
import { MoreVertical } from "react-feather";

interface IDashboardProps {
    children?: React.ReactNode;
}

const tabs = [
    { title: 'Overview', text: 'overview' },
    { title: 'Transactions', text: 'transactions' },
];

export default function DashboardLayout({ children }: IDashboardProps) {
    return (
        <div className="flex flex-col px-12 py-4 gap-8">
            <header className="w-full flex flex-col gap-4">
                <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-between gap-2">
                            <p className="font-bold text-xl sm:text-3xl whitespace-nowrap">Wallet Ledger</p>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764765 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z" fill="#1B2528" />
                            </svg>

                        </div>
                        <StatusPill status="active" />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button>
                            Share
                        </Button>

                        <div className="border border-[#49656E20] rounded-2xl p-2">
                            <MoreVertical />
                        </div>
                    </div>
                </div>
                <AvatarGroup data={Fake_Users} />
            </header>

            <RouteTabs tabs={tabs}>
                {children}
            </RouteTabs>
        </div>
    )
}