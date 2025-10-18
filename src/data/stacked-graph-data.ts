export interface StackedGraphDataItem {
    month: string;
    actual: number;
    projection: number;
}

export const StackedGraphData: StackedGraphDataItem[] = [
    {
        month: "Jan",
        actual: 16,
        projection: 4
    },
    {
        month: "Feb",
        actual: 20,
        projection: 5
    },
    {
        month: "Mar",
        actual: 17,
        projection: 4
    },
    {
        month: "Apr",
        actual: 21,
        projection: 6
    },
    {
        month: "May",
        actual: 14,
        projection: 4
    },
    {
        month: "Jun",
        actual: 20,
        projection: 5
    }
];
