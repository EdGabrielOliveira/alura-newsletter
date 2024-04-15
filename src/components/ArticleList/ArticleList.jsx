/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import data from "../../../articles.json";
import Article from "../Article/Article";

export default function ArticleList() {
  return (
    <div className="mt-5 sm:mt-0 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 m-auto max-w-2xl lg:max-w-[1000px]">
      {data.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </div>
  );
}
