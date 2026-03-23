import { Typography } from "components";
import Link from "next/link";
import { Tag } from "./Tag";
import { dateConvert } from "utils";

export const PortfolioSummary = ({ tags, date, info, title }) => {
  const displayInfo = info?.slice(0, 4) || [];

  return (
    <div className="mb-16 relative border border-ink-border bg-ink-surface lg:p-10 p-6 pt-8">
      <div className="lg:flex justify-between mb-4">
        <div className="flex gap-2 flex-wrap">
          {Array.isArray(tags)
            ? tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-widest uppercase text-lime bg-lime-faint px-3 py-1"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {tag}
                </span>
              ))
            : (
                <span
                  className="text-[10px] tracking-widest uppercase text-lime bg-lime-faint px-3 py-1"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {tags}
                </span>
              )}
        </div>
        <p
          className="text-xs text-cream-faint"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          {date}
        </p>
      </div>

      <Typography variant="h1" className="my-4">
        {title}
      </Typography>

      {displayInfo.length > 0 && (
        <div
          className={`grid grid-cols-2 lg:gap-16 gap-4`}
          style={{ gridTemplateColumns: `repeat(${displayInfo.length}, minmax(0, 1fr))` }}
        >
          {displayInfo.map((item, index) => (
            <div key={index}>
              <p
                className="text-xs text-cream-faint uppercase mb-1"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                {item.key}
              </p>
              <p className="text-sm text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const PortfolioOverview = ({ overview }) => {
  return (
    <div className="py-8">
      <Typography className="text-center" variant="h3">
        Project Overview
      </Typography>
      <div className="grid lg:grid-cols-2 gap-4">
        {overview.map((item) => {
          return (
            <div key={item.title} className="border border-ink-border bg-ink-surface lg:p-8 p-4">
              <Typography variant="h4">{item.title}</Typography>
              <p className="text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const PortfolioProcess = ({ data }) => {
  return (
    <div
      className="grid gap-8"
      style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }}
    >
      {data.map((item, index) => {
        return (
          <div key={item.title} className="bg-ink-surface border border-ink-border p-4">
            <h6 className="font-semibold mb-4 text-lime" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem" }}>
              {`0${index + 1}. ${item.title}`}
            </h6>
            <p className="text-sm text-cream-muted" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

// 單一共用卡片元件：拆成 Portfolio / Article 兩種卡片
const PortfolioCard = ({ item }) => {
  if (!item.state) return null;

  return (
    <Link key={item.url} href={item.url}>
      <figure className="group flex lg:flex-col lg:space-y-4 border border-ink-border hover:border-ink-muted bg-ink-surface transition-all duration-300 overflow-hidden">
        <div className="overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="object-cover aspect-[4/3] lg:w-full w-1/4 h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <figcaption className="lg:px-0 px-4 p-4 space-y-1">
          <p
            className="text-xs text-cream-faint"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            {item.company}, {item.date}
          </p>
          <h4
            className="text-cream group-hover:text-lime transition-colors"
            style={{ fontFamily: "Fraunces, serif", fontSize: "1rem", fontWeight: 500 }}
          >
            {item.name}
          </h4>
          <p
            className="text-sm text-cream-muted font-light"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {item.desc}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

const ArticleCard = ({ item }) => {
  const isExternal = item.url.startsWith("http");

  return (
    <Link
      key={item.url}
      href={item.url}
      target={isExternal ? "_blank" : "_self"}
    >
      <figure className="group bg-ink-surface border border-ink-border flex hover:border-ink-muted transition-all duration-200">
        <img
          src={item.img}
          alt=""
          className="object-cover aspect-[1/1] w-1/4 m-3 flex-shrink-0"
        />
        <figcaption className="p-4 pl-0 space-y-1.5 relative">
          <p
            className="text-xs text-cream-faint"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            {dateConvert(item.date)}
            {item.category[0] && (
              <span className="ml-2 text-lime">{item.category[0]}</span>
            )}
          </p>
          <h6
            className="line-clamp-2 text-sm text-cream group-hover:text-lime transition-colors"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 500 }}
          >
            {item.name}
          </h6>
          <p
            className="text-cream-muted font-light line-clamp-2 text-xs"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            {item.desc}
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};

// 單一共用 List 元件，透過 mode 切換使用不同卡片
const BaseList = ({ data, mode }) => {
  const isPortfolio = mode === "portfolio";
  const Card = isPortfolio ? PortfolioCard : ArticleCard;

  return (
    <div className={isPortfolio ? "grid lg:grid-cols-3 gap-x-8 lg:gap-y-20 gap-y-8 mt-8" : "grid lg:grid-cols-2 gap-6 mt-8"}>
      {data.map((item) => (
        <Card key={item.url} item={item} />
      ))}
    </div>
  );
};

export const ContentList = ({ data, mode }) => <BaseList data={data} mode={mode} />;
