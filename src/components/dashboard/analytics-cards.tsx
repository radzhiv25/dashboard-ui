import { TrendUpIcon } from "@phosphor-icons/react";

export default function AnalyticsCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="p-6 bg-[#E3F5FF] rounded-2xl flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Customers</h3>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">3,781</p>
                    <span className="flex items-center gap-1"><p className="text-xs">+11.01%</p> <TrendUpIcon size={16} /></span>
                </div>
            </div>
            <div className="p-6 bg-[#F7F9FB] rounded-2xl flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Orders</h3>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">1,219</p>
                    <span className="flex items-center gap-1"><p className="text-xs">-0.03%</p> <TrendUpIcon size={16} className="rotate-180" /></span>
                </div>
            </div>
            <div className="p-6 bg-[#F7F9FB] rounded-2xl flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Revenue</h3>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">$695</p>
                    <span className="flex items-center gap-1"><p className="text-xs">+15.03%</p> <TrendUpIcon size={16} /></span>
                </div>
            </div>
            <div className="p-6 bg-[#E5ECF6] rounded-2xl flex flex-col gap-2">
                <h3 className="text-sm font-semibold">Growth</h3>
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">30.1%</p>
                    <span className="flex items-center gap-1"><p className="text-xs">+6.08%</p> <TrendUpIcon size={16} /></span>
                </div>
            </div>
        </div>
    )
}