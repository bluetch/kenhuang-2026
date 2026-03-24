import { Typography } from "components";
import Link from "next/link";
import { Tag } from "./Tag";

export const PortfolioSummary = ({ tags, date, info, title }) => {
  const displayInfo = info?.slice(0, 4) || [];
  const tagArray = Array.isArray(tags) ? tags : tags ? [tags] : [];

  return (
    <div className="portfolio-summary-card mb-16 relative lg:p-10 p-6 pt-8">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          {tagArray.map((tag) => (
            <span key={tag} className="portfolio-summary-tag">{tag}</span>
          ))}
        </div>
        <p className="portfolio-summary-date">{date}</p>
      </div>

      <Typography variant="h1" className="my-4">
        {title}
      </Typography>

      {displayInfo.length > 0 && (
        <div
          className="grid gap-x-12 gap-y-4 mt-6 pt-6"
          style={{
            gridTemplateColumns: `repeat(${displayInfo.length}, minmax(0, 1fr))`,
            borderTop: "1px solid #243570",
          }}
        >
          {displayInfo.map((item, index) => (
            <div key={index}>
              <p className="portfolio-summary-key">{item.key}</p>
              <p className="portfolio-summary-value">{item.value}</p>
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
            <div key={item.title} className="border border-[#243570] bg-[#142040] lg:p-8 p-4">
              <Typography variant="h4" style={{ marginTop: 0 }}>{item.title}</Typography>
              <p style={{ fontFamily: "DM Sans, sans-serif", color: "#9ABCE8" }}>
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
          <div key={item.title} className="bg-[#142040] border border-[#243570] p-4" style={{ borderLeft: "3px solid #4D9EFF" }}>
            <h6 className="font-semibold mb-3" style={{ fontFamily: "Space Mono, monospace", fontSize: "0.7rem", color: "#4D9EFF" }}>
              {`0${index + 1}. ${item.title}`}
            </h6>
            <p className="text-sm" style={{ fontFamily: "DM Sans, sans-serif", color: "#9ABCE8" }}>
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
      <figure className="group flex lg:flex-col lg:space-y-4 border border-[#243570] hover:border-[#4D9EFF] bg-[#142040] transition-all duration-150 overflow-hidden">
        <div className="overflow-hidden">
          <img
            src={item.img}
            alt={item.name}
            className="object-cover aspect-[4/3] lg:w-full w-1/4 h-auto transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <figcaption className="lg:px-0 px-4 p-4 space-y-1">
          <p
            className="text-xs"
            style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}
          >
            {item.company}, {item.date}
          </p>
          <h4
            className="transition-colors group-hover:text-[#4D9EFF]"
            style={{ fontFamily: "Syne, sans-serif", fontSize: "1rem", fontWeight: 600, color: "#D0E4FF" }}
          >
            {item.name}
          </h4>
          <p
            className="text-sm"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#9ABCE8" }}
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
      <figure className="group bg-[#142040] border border-[#243570] flex hover:border-[#4D9EFF] transition-all duration-150">
        <img
          src={item.img}
          alt=""
          className="object-cover aspect-[1/1] w-1/4 m-3 flex-shrink-0"
        />
        <figcaption className="p-4 pl-0 space-y-1.5 relative">
          <p
            className="text-xs"
            style={{ fontFamily: "Space Mono, monospace", color: "#8898BB" }}
          >
            {dateConvert(item.date)}
            {item.category[0] && (
              <span className="ml-2" style={{ color: "#4D9EFF" }}>{item.category[0]}</span>
            )}
          </p>
          <h6
            className="line-clamp-2 text-sm transition-colors group-hover:text-[#4D9EFF]"
            style={{ fontFamily: "Syne, sans-serif", fontWeight: 600, color: "#D0E4FF" }}
          >
            {item.name}
          </h6>
          <p
            className="line-clamp-2 text-xs"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#9ABCE8" }}
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
