import AnalyticsCards from "./analytics-cards";
import { ProjectionsVsActualsGraph } from "./projection-vs-actual-graph";
import { RevenueGraph } from "./revenue-graph";
import RevenueByLocation from "./revenue-by-location";
import TopSellingProducts from "./top-selling-products";
import TotalSalesPie from "./total-sales-pie";
import OrderList from "./order-list";
import { useDashboard } from "../../context/dashboard-context";

export default function Dashboard() {
    const { selectedDashboard } = useDashboard()

    if (selectedDashboard === 'Order List') {
        return (
            <div className="md:p-5 p-3">
                <div className="w-full">
                    <OrderList />
                </div>
            </div>
        )
    }

    return (
        <div className="md:p-5 p-3">
            {/* <h1>Dashboard</h1> */}
            <h2 className="text-sm pb-5 font-semibold text-black dark:text-white">eCommerce</h2>
            <div className="space-y-6">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
                    <AnalyticsCards />
                    <ProjectionsVsActualsGraph />
                </div>
                <div className="w-full flex md:flex-row flex-col items-start gap-7">
                    <div className="md:w-3/4 w-full">
                        <RevenueGraph />
                    </div>
                    <div className="md:w-1/4 w-full">
                        <RevenueByLocation />
                    </div>
                </div>
                <div className="w-full flex md:flex-row flex-col items-start gap-7">
                    <div className="md:w-3/4 w-full">
                        <TopSellingProducts />
                    </div>
                    <div className="md:w-1/4 w-full">
                        <TotalSalesPie />
                    </div>
                </div>
            </div>
        </div>
    )
}