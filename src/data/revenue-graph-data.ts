export interface RevenueGraphDataItem {
    month: string;
    currentWeek: number;
    previousWeek: number;
}

export const RevenueGraphData: RevenueGraphDataItem[] = [
    {
        month: "Jan",
        currentWeek: 12.5,
        previousWeek: 7
    },
    {
        month: "Feb",
        currentWeek: 7,
        previousWeek: 17
    },
    {
        month: "Mar",
        currentWeek: 8,
        previousWeek: 15
    },
    {
        month: "Apr",
        currentWeek: 15,
        previousWeek: 10
    },
    {
        month: "May",
        currentWeek: 19.5,
        previousWeek: 16
    },
    {
        month: "Jun",
        currentWeek: 19.5,
        previousWeek: 23
    }
];
