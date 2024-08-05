import { AnimatePresence, motion } from "framer-motion";
import { type Dispatch, type SetStateAction, useState } from "react";
import { FiPlus } from "react-icons/fi";
import useMeasure from "react-use-measure";

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
                                    duration: 0.5,
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
                                duration: 0.5,
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

const Question = ({ question, answer }: QuestionType) => {
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
                className="overflow-hidden text-black"
            >
                <p ref={ref}>{answer}</p>
            </motion.div>
        </motion.div>
    );
};

type QuestionType = {
    question: string;
    answer: string;
};

const TABS = ["Market Analysis", "Features", "Technical"];

const QUESTIONS = {
    "Market Analysis": [
        {
            question: "What is our platform?",
            answer: "We offer an AI-powered market analysis platform that helps businesses make data-informed decisions through real-time trend analysis and predictive analytics.",
        },
        {
            question: "How can this tool benefit my business?",
            answer: "Our platform provides real-time trend analysis, predictive analytics for future market behavior, customizable dashboards and reports, and integration with major data sources and APIs to help you make informed business decisions.",
        },
        {
            question: "What kind of data sources do you integrate with?",
            answer: "We integrate with major data sources and APIs to provide comprehensive market analysis. The specific integrations can be discussed based on your business needs.",
        },
        {
            question: "Is this platform suitable for my industry?",
            answer: "Our solution is designed to be versatile and can be adapted to various industries. Its customizable dashboards and reports allow you to focus on the metrics most relevant to your sector.",
        },
    ],
    "Features": [
        {
            question: "What are the main features of your platform?",
            answer: "Key features include real-time market trend analysis, predictive analytics for future market behavior, customizable dashboards and reports, and integration with major data sources and APIs.",
        },
        {
            question: "Can I customize the reports and dashboards?",
            answer: "Yes, we offer customizable dashboards and reports, allowing you to focus on the metrics and data most relevant to your business needs.",
        },
        {
            question: "How accurate are the predictive analytics?",
            answer: "Our platform uses advanced AI algorithms for predictive analytics. While accuracy can vary depending on various factors, we continuously refine our models to provide the most reliable predictions possible.",
        },
        {
            question: "Can your tool analyze real-time data?",
            answer: "Yes, one of our key features is real-time market trend analysis, allowing you to stay up-to-date with the latest market movements and make timely decisions.",
        },
    ],
    "Technical": [
        {
            question: "What technology does your platform use?",
            answer: "Our solution is built using cutting-edge technologies including Astro for static site generation, React for UI components, TailwindCSS for styling, and Framer Motion for animations.",
        },
        {
            question: "Is this a web-based platform or downloadable software?",
            answer: "We offer a web-based platform, allowing you to access your market analysis tools and data from any device with an internet connection.",
        },
        {
            question: "How secure is my data with your service?",
            answer: "We take data security very seriously. Our platform employs industry-standard security measures to protect your data. For more detailed information about our security protocols, please contact our support team.",
        },
        {
            question: "Can your platform integrate with my existing business tools?",
            answer: "Our system is designed to integrate with major data sources and APIs. We can discuss specific integrations based on your current tool stack and requirements.",
        },
    ]
};