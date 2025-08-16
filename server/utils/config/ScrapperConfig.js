const HomeScrapper = ($) => {
  const data = {};
  const slider = [];

  $(".swiper-wrapper .swiper-slide").each((_, item) => {
    const image = $(item).find("img").attr("src");
    const link = $(item).find("a").first().attr("href");
    const title = $(item).find("a").first().text();

    if (!title || !link || !title) return;

    slider.push({ title, image, link });
  });

  $;

  data.slider = slider;

  return slider;
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

const MovieDetailsScrapper = ($) => {
  const details = {};

  details.streamLink = $("#vidcon iframe").attr("src") || "src not found";
  details.poster = $("#poster").find("img").attr("src");
  details.title = $(".marl").find("h1").text();
  details.description = $(".fimm p").first().text();
  const metaData = $(".date").text();

  return [metaData, details];
};
const ScrapperConfig = {
  home: HomeScrapper,
  movieHomepage: MovieHomepageScrapper,
  nextMoviePage: nextMoviePageScrapper,
  MovieDetails: MovieDetailsScrapper,
};

export default ScrapperConfig;
