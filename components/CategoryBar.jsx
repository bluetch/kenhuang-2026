import { useState, useEffect } from "react";
import { articlesSpec, portfolioSpec } from "constants";

export const CategoryBar = ({ name = "", type, method, value = null }) => {
  const _data = type === "articlesSpec" ? articlesSpec : portfolioSpec;
  const [category, setCategory] = useState(value ?? null);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  useEffect(() => {
    setCategory(value ?? null);
  }, [value]);

  return (
    <div className="space-x-2 py-4 mb-4 rounded-lg">
      {/* {name ? `${name}:` : ""} */}
      {!isSSR && _data.map((item) => {
        let classType =
          "bg-[#142040] px-2 py-1 border rounded-lg text-sm hover:cursor-pointer hover:border-[#4D9EFF] transition-colors ";
        if (category === item.code) {
          classType += "text-[#4D9EFF] border-[#4D9EFF]";
        } else {
          classType += "text-[#8898BB] border-[#243570]";
        }
        return (
          <span
            className={classType}
            key={item.name}
            onClick={() => {
              setCategory(item.code);
              method(item.code);
            }}
          >
            {item.name}
          </span>
        );
      })}
    </div>
  );
};
