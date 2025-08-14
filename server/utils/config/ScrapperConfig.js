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

const MovieHomepageScrapper = ($) => {
  const slider = [];
  const results = [];

  //slider data
  $("#ftr .dflex > div").each((_, poster) => {
    const link = $(poster).find("a").attr("href");
    const image = $(poster).find("img").attr("src");
    const title = $(poster).find("span").text();

    slider.push({ title, link, image });
  });

  //results data
  $(".mxwd")
    .not($("#ftr .mxwd"))
    .find(".dflex > div")
    .each((_, poster) => {
      const link = $(poster)
        .find("a")
        .attr("href")
        .replace(process.env.MOVIES_BASE_URL, "");
      const image = $(poster).find("img").attr("src");
      const title = $(poster).find(".mtl").text();
      const year = $(poster).find(".hd.hdy").text();

      results.push({ title, link, year, image });
    });

  return { slider, results };
};

const nextMoviePageScrapper = ($) => {
  const results = [];

  $(".mxwd")
    .not($("#ftr .mxwd"))
    .find(".dflex > div")
    .each((_, poster) => {
      const link = $(poster)
        .find("a")
        .attr("href")
        .replace("https://ww1.goojara.to/", "");
      const image = $(poster).find("img").attr("src");
      const title = $(poster).find(".mtl").text();
      const year = $(poster).find(".hd.hdy").text();

      results.push({ title, link, year, image });
    });

  return results;
};

const ScrapperConfig = {
  home: HomeScrapper,
  movieHomepage: MovieHomepageScrapper,
  nextMoviePage: nextMoviePageScrapper,
};

export default ScrapperConfig;
