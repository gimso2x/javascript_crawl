import axios from "axios";
import * as cheerio from "cheerio";
import { useEffect, useState } from "react";
import format from "date-fns/format";

interface NewsType {
  text: string;
  href: string;
  content: string;
}

const NEWS = () => {
  const [newsHTML, setNewsHTML] = useState<NewsType[] | null>(null);
  const date = format(new Date(), "yyyyMMdd");

  const loadData = async () => {
    const data = await axios
      .get(`/naverNews/headline.naver?bss_ymd=${date}`)
      .then((response) => {
        const $ = cheerio.load(response.data);

        // setNewsHTML($(".headline_list li dt:not(.photo) a"));
        let array = $(".headline_list li dt:not(.photo) a")
          .map(function (i, el) {
            return {
              text: $(el).text(),
              href: $(el).attr("href") as string,
              content: $(".headline_list li dd")
                .eq(i)
                .find("span")
                .remove()
                .end()
                .text()
                .trim(),
            };
          })
          .toArray();
        setNewsHTML(array);
      });

    return data;
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    newsHTML && (
      <div className="relative rounded-xl overflow-auto">
        <h3 className="text-2xl">{date}</h3>
        <div className="shadow-sm overflow-hidden my-8">
          <table className="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  제목
                </th>
                <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                  내용
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800">
              {newsHTML.map((e, i) => (
                <tr
                  className="cursor-pointer"
                  key={i}
                  onClick={() =>
                    (location.href = `https://land.naver.com/${e.href}`)
                  }
                >
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                    {e.text}
                  </td>
                  <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                    {e.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default NEWS;
