import { AnimatePresence, motion } from "framer-motion";
import { type Dispatch, type SetStateAction, useState } from "react";
import { FiPlus } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { TABS, QUESTIONS } from "../content/FAQ";
import type { FaqItem } from "../types/FaqItem";

export const TabsFAQ = () => {
    const [selected, setSelected] = useState(TABS[0]);

    return (
        <section className="overflow-hidden px-4 py-12 text-slate-50">
            <Heading />
            <Tabs selected={selected} setSelected={setSelected} />
            <Questions selected={selected} />
        </section>
    );
};

const Heading = () => {
    return (
        <>
            <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="mb-8 text-black font-bold text-4xl">FAQs</span>
            </div>

            <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl" />
        </>
    );
};

const Tabs = ({
    selected,
    setSelected,
}: {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
}) => {
    return (
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            {TABS.map((tab) => (
                <button
                    onClick={() => setSelected(tab)}
                    className={`relative overflow-hidden whitespace-nowrap rounded-md border-[2px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 border-black bg-white 
                    ${selected === tab ? 'text-white' : 'text-black'}`
                    }
                    key={tab}
                >
                    <span className="relative z-10">{tab}</span>
                    <AnimatePresence>
                        {selected === tab && (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                exit={{ y: "100%" }}
                                transition={{
                                    duration: 0.3,
                                    ease: "backIn",
                                }}
                                className="absolute inset-0 z-0 bg-blue-500 text-white"
                            />
                        )}
                    </AnimatePresence>
                </button>
            ))}
        </div>
    );
};

const Questions = ({ selected }: { selected: string }) => {
    return (
        <div className="mx-auto mt-12 max-w-3xl">
            <AnimatePresence mode="wait">
                {Object.entries(QUESTIONS).map(([tab, questions]) => {
                    return selected === tab ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.3,
                                ease: "backIn",
                            }}
                            className="space-y-4"
                            key={tab}
                        >
                            {questions.map((q, idx) => (
                                <Question key={idx} {...q} />
                            ))}
                        </motion.div>
                    ) : undefined;
                })}
            </AnimatePresence>
        </div>
    );
};

const Question = ({ question, answer }: FaqItem) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className={`rounded-xl border-[2px] border-black px-4 bg-white`}
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full items-center justify-between gap-4 py-4"
            >
                <span
                    className={`text-left text-lg font-medium text-black`}
                >
                    {question}
                </span>
                <motion.span
                    variants={{
                        open: {
                            rotate: "45deg",
                        },
                        closed: {
                            rotate: "0deg",
                        },
                    }}
                >
                    <FiPlus
                        className={`text-2xl transition-colors text-black`}
                    />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: open ? height : "0px",
                    marginBottom: open ? "24px" : "0px",
                }}
                transition={{
                    duration: 0.1,
                    ease: "backIn",
                }}
                className="overflow-hidden text-black"
            >
                <p ref={ref}>{answer}</p>
            </motion.div>
        </motion.div>
    );
};