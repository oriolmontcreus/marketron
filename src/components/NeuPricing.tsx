import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle, FiXSquare } from "react-icons/fi";
import type { CheckListItemType } from "../types/CheckListItemType";
import type { PriceColumnProps } from "../types/PriceColumnProps";
import type { ToggleOptionsType } from "../types/ToggleOptionsType";
import { pricingPlans } from "../content/pricingPlans";

export default function NeuPricing() {
  const [selected, setSelected] = useState<ToggleOptionsType>("annual");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-zinc-50">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h2 className="mx-auto mb-4 max-w-2xl text-center text-2xl font-bold leading-[1.15] md:text-3xl md:leading-[1.15]">
          Pricing Plans
        </h2>
        <Toggle selected={selected} setSelected={setSelected} />
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PriceColumn
              key={plan.title}
              {...plan}
              price={typeof plan.price === 'string' ? plan.price : plan.price[selected]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

const PriceColumn = ({
  highlight,
  title,
  price,
  statement,
  items,
}: PriceColumnProps) => {
  const displayPrice = typeof price === 'string' ? price : Object.values(price)[0];

  return (
    <div
      style={{
        boxShadow: highlight ? "0px 4px 0px rgb(24, 24, 27)" : (undefined as any),
      }}
      className={`relative w-full rounded-lg p-3 md:p-4 ${highlight ? "border-2 border-zinc-900 bg-white" : ""
        }`}
    >
      {highlight && (
        <span className="absolute right-3 top-0 -translate-y-1/2 rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
          Most Popular
        </span>
      )}

      <p className="mb-2 text-base font-medium">{title}</p>
      <div className="mb-3 flex items-center gap-1">
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
            key={displayPrice}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="block text-3xl font-bold"
          >
            ${displayPrice}
          </motion.span>
        </AnimatePresence>
        <motion.div layout className="text-xs font-medium text-zinc-600">
          <span className="block">/user</span>
          <span className="block">/month</span>
        </motion.div>
      </div>

      <p className="mb-4 text-sm">{statement}</p>

      <div className="mb-4 space-y-1">
        {items.map((item) => (
          <CheckListItem key={item.children} checked={item.checked}>
            {item.children}
          </CheckListItem>
        ))}
      </div>

      <button
        className={`w-full rounded-lg p-2 text-xs uppercase text-white transition-colors ${highlight
            ? "bg-blue-600 hover:bg-blue-700"
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
    <div className="relative mx-auto mt-3 flex w-fit items-center rounded-full bg-zinc-200 p-1">
      {["monthly", "annual"].map((option) => (
        <button
          key={option}
          className={`relative z-10 px-10 py-1.5 text-sm font-medium transition-colors duration-200 ${
            selected === option ? "text-zinc-900" : "text-zinc-500"
          }`}
          onClick={() => setSelected(option as ToggleOptionsType)}
        >
          <span className="relative z-10">
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </span>
        </button>
      ))}
     <motion.div
        className="absolute inset-1 z-0 w-1/2 rounded-full bg-white border border-zinc-900"
        initial={false}
        animate={{
          x: selected === "annual" ? "95%" : "0%",
        }}
        transition={{
          type: "tween",
          duration: 0.15,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

const CheckListItem = ({ children, checked }: CheckListItemType) => {
  return (
    <div className="flex items-start gap-2 text-sm">
      <div className="flex-shrink-0 mt-1">
        {checked ? (
          <FiCheckCircle className="w-4 h-4 text-blue-600" />
        ) : (
          <FiXSquare className="w-4 h-4 text-zinc-400" />
        )}
      </div>
      <span className="flex-grow">{children}</span>
    </div>
  );
};