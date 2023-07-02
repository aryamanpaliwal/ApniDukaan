import { ApexOptions } from "apexcharts";

export const TotalRevenueSeries = [
    {
        name: "Last Year",
        data: [70, 45, 30, 69, 133, 143, 96, 49, 90, 143, 50, 78],
    },
    {
        name: "Running Year",
        data: [95, 67, 72, 44, 49, 89, 0, 0, 0, 0, 0, 0],
    },
];

export const TotalRevenueOptions: ApexOptions = {
    chart: {
        type: "bar",
        toolbar: {
            show: false,
        },
    },
    colors: ["#3282B8", "#0F4C75"],
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: false,
            columnWidth: "55%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    stroke: {
        colors: ["transparent"],
        width: 4,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    },
    yaxis: {
        title: {
            text: "₹ (thousands)",
        },
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: "top",
        horizontalAlign: "right",
    },
    tooltip: {
        y: {
            formatter(val: number) {
                return `₹ ${val} thousands`;
            },
        },
    },
};