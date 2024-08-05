import type { Notification } from "../types/Notification";
export const notifications: Notification[] = [
    {
        name: "Market trend detected",
        description: "AI Analysis",
        time: "2m ago",
        icon: "📈",
        color: "#00C9A7",
    },
    {
        name: "New prediction ready",
        description: "Future Market",
        time: "10m ago",
        icon: "🔮",
        color: "#1E86FF",
    },
    {
        name: "Dashboard updated",
        description: "Real-time Data",
        time: "15m ago",
        icon: "📊",
        color: "#FFB800",
    },
    {
        name: "API integration complete",
        description: "Data Source",
        time: "30m ago",
        icon: "🔗",
        color: "#FF3D71",
    },
    {
        name: "User feedback analyzed",
        description: "Customer Insights",
        time: "5m ago",
        icon: "🗣️",
        color: "#FFA500",
    },
    {
        name: "New dataset available",
        description: "Data Import",
        time: "1h ago",
        icon: "📂",
        color: "#007BFF",
    },
];