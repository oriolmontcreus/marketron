import type { PriceColumnProps } from "../types/PriceColumnProps";

export const pricingPlans: PriceColumnProps[] = [
    {
        title: "Starter",
        price: {
            monthly: "49",
            annual: "39"
        },
        statement: "For small businesses looking to make data-driven decisions.",
        items: [
            {
                children: "Real-time market trend analysis",
                checked: true,
            },
            {
                children: "Basic predictive analytics",
                checked: true,
            },
            {
                children: "5 customizable dashboards",
                checked: true,
            },
            {
                children: "Integration with 3 data sources",
                checked: true,
            },
            {
                children: "Advanced AI insights",
                checked: false,
            },
            {
                children: "Priority support",
                checked: false,
            },
        ]
    },
    {
        title: "Professional",
        price: {
            monthly: "99",
            annual: "79"
        },
        statement: "For growing businesses needing deeper market insights.",
        highlight: true,
        items: [
            {
                children: "Advanced real-time analysis",
                checked: true,
            },
            {
                children: "Comprehensive predictive analytics",
                checked: true,
            },
            {
                children: "Unlimited customizable dashboards",
                checked: true,
            },
            {
                children: "Integration with 10 data sources",
                checked: true,
            },
            {
                children: "Advanced AI insights",
                checked: true,
            },
            {
                children: "Priority support",
                checked: false,
            },
        ]
    },
    {
        title: "Enterprise",
        price: {
            monthly: "Custom",
            annual: "Custom"
        },
        statement: "For large organizations requiring full-scale market intelligence.",
        items: [
            {
                children: "Full-suite real-time analysis",
                checked: true,
            },
            {
                children: "Enterprise-grade predictive analytics",
                checked: true,
            },
            {
                children: "Unlimited customizable dashboards",
                checked: true,
            },
            {
                children: "Integration with unlimited data sources",
                checked: true,
            },
            {
                children: "Advanced AI insights with custom models",
                checked: true,
            },
            {
                children: "24/7 priority support",
                checked: true,
            },
        ]
    }
];