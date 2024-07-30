import React, { type Dispatch, type SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiXSquare } from "react-icons/fi";

export const NeuPricing = () => {
    const [selected, setSelected] = useState<ToggleOptionsType>("annual");
    return (
      <div className="bg-zinc-50">
        <section className="mx-auto max-w-7xl px-2 py-16 md:px-4">
          <h2 className="mx-auto mb-4 max-w-2xl text-center text-3xl font-bold leading-[1.15] md:text-5xl md:leading-[1.15]">
            Pricing Plans
          </h2>
          <Toggle selected={selected} setSelected={setSelected} />
          <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-3 lg:gap-6">
            <PriceColumn
              title="Starter"
              price={selected === "monthly" ? "49" : "39"}
              statement="For small businesses looking to make data-driven decisions."
              items={[
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
              ]}
            />
            <PriceColumn
              title="Professional"
              price={selected === "monthly" ? "99" : "79"}
              statement="For growing businesses needing deeper market insights."
              highlight
              items={[
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
              ]}
            />
            <PriceColumn
              title="Enterprise"
              price="Custom"
              statement="For large organizations requiring full-scale market intelligence."
              items={[
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
              ]}
            />
          </div>
        </section>
      </div>
    );
  };

  const PriceColumn = ({
    highlight,
    title,
    price,
    statement,
    items,
  }: PriceColumnProps) => {
    return (
      <div
        style={{
          boxShadow: highlight ? "0px 4px 0px rgb(24, 24, 27)" : "",
        }}
        className={`relative w-full rounded-lg p-4 md:p-6 ${
          highlight ? "border-2 border-zinc-900 bg-white" : ""
        }`}
      >
        {highlight && (
          <span className="absolute right-4 top-0 -translate-y-1/2 rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white">
            Most Popular
          </span>
        )}
  
        <p className="mb-4 text-lg font-medium">{title}</p>
        <div className="mb-4 flex items-center gap-2">
          <AnimatePresence mode="popLayout">
            <motion.span
              initial={{
                y: 24,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -24,
                opacity: 0,
              }}
              key={price}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
              className="block text-4xl font-bold"
            >
              ${price}
            </motion.span>
          </AnimatePresence>
          <motion.div layout className="text-sm font-medium text-zinc-600">
            <span className="block">/user</span>
            <span className="block">/month</span>
          </motion.div>
        </div>
  
        <p className="mb-6 text-base">{statement}</p>
  
        <div className="mb-6 space-y-2">
          {items.map((i) => (
            <CheckListItem key={i.children} checked={i.checked}>
              {i.children}
            </CheckListItem>
          ))}
        </div>
  
        <button
          className={`w-full rounded-lg p-2 text-sm uppercase text-white transition-colors ${
            highlight
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "bg-zinc-900 hover:bg-zinc-700"
          }`}
        >
          Try it now
        </button>
      </div>
    );
  };

const Toggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative mx-auto mt-3 flex w-fit items-center rounded-full bg-zinc-200">
      <button
        className="relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium"
        onClick={() => {
          setSelected("monthly");
        }}
      >
        <span className="relative z-10">Monthly</span>
      </button>
      <button
        className="relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium"
        onClick={() => {
          setSelected("annual");
        }}
      >
        <span className="relative z-10">Annually</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "annual" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ ease: "easeInOut" }}
          className="h-full w-1/2 rounded-full border border-zinc-900 bg-white"
        />
      </div>
    </div>
  );
};

const CheckListItem = ({ children, checked }: CheckListItemType) => {
    return (
      <div className="flex items-start gap-2 text-sm">
        <div className="flex-shrink-0 mt-1">
          {checked ? (
            <FiCheckCircle className="w-4 h-4 text-indigo-600" />
          ) : (
            <FiXSquare className="w-4 h-4 text-zinc-400" />
          )}
        </div>
        <span className="flex-grow">{children}</span>
      </div>
    );
  };

type PriceColumnProps = {
  highlight?: boolean;
  title: string;
  price: string;
  statement: string;
  items: CheckListItemType[];
};

type ToggleOptionsType = "monthly" | "annual";

type CheckListItemType = {
  children: string;
  checked: boolean;
};