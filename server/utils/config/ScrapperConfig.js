const HomeScrapper = ($) => {
  const results = [];

  $(".bs").each((_, article) => {
    const image = $(article).find("img").attr("src");
    const link = $(article).find("a").attr("href");
    const title = $(article).find("h2").text();
    const status = $(article).find(".epx").text().trim();

    results.push({ title, image, link, status });
  });

  return results;
};

export const MovieHomepageScrapper = ($) => {
  const slider = [];
  const results = [];
  return $.html();
};

const ConfigMap = {
  home: HomeScrapper,
};

export default ConfigMap;
