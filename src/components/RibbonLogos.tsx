import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
} from "react-icons/si";
import type { IconType } from "react-icons";

const RibbonLogos = () => {
  return (
    <section className="bg-amber-200 py-24 overflow-hidden">
      <h2 className="mx-4 mb-12 text-center text-2xl font-medium text-neutral-900 md:text-4xl">
        Partnered with companies like...
      </h2>
      <div className="flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <div className={`flex px-2 ${reverse ? 'animate-slide-reverse' : 'animate-slide'}`}>
      {children}
    </div>
  );
};

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <a
      href="/oops"
      rel="nofollow"
      target="_blank"
      className="flex items-center justify-center gap-4 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6"
    >
      <Icon className="text-3xl md:text-4xl" />
      <span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">
        {name}
      </span>
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiNike} name="Nike" />
    <LogoItem Icon={Si3M} name="3M" />
    <LogoItem Icon={SiAbstract} name="Abstract" />
    <LogoItem Icon={SiAdobe} name="Adobe" />
    <LogoItem Icon={SiAirtable} name="Airtable" />
    <LogoItem Icon={SiAmazon} name="Amazon" />
    <LogoItem Icon={SiBox} name="Box" />
    <LogoItem Icon={SiBytedance} name="Bytedance" />
    <LogoItem Icon={SiChase} name="Chase" />
    <LogoItem Icon={SiCloudbees} name="Cloudebees" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiBmw} name="BMW" />
    <LogoItem Icon={SiBurton} name="Burton" />
    <LogoItem Icon={SiBuildkite} name="Buildkite" />
    <LogoItem Icon={SiCouchbase} name="Couchbase" />
    <LogoItem Icon={SiDailymotion} name="Dailymotion" />
    <LogoItem Icon={SiDeliveroo} name="deliveroo" />
    <LogoItem Icon={SiEpicgames} name="Epic Games" />
  </>
);

export default RibbonLogos;