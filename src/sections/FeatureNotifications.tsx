"use client";

import { cn } from "../utils/cn";
import { AnimatedList } from "../components/AnimatedList";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
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

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-lg border-2 border-black p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%] bg-white",

      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-lg"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-gray-950">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-950">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function FeatureNotifications({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full max-w-[400px] flex-col p-6 overflow-hidden rounded-lg border-2 border-black bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
