import { setStatus } from ".";
import { getNewsData } from "../services/news";

export const setNews = (newsPageData) => ({
  type: "set-news",
  newsPageData,
});

const transformNews = (news) => {
  return news.map((story) => ({
    newsId: story.id?.value,
    newsURL: story.link,
    newsDetail: story.standFirst,
    subtitle: story.subtitle,
    imageURL: story.thumbnailImage?.link
      ? story.thumbnailImage?.link
      : "https://picsum.photos/200",
    title: story.title,
  }));
};

export const getNews = () => {
  return async (dispatch) => {
    dispatch(setStatus("LOADING"));

    try {
      const news = transformNews(await getNewsData());

      const newsPageData = {
        news,
      };

      if (newsPageData) {
        dispatch(setNews(newsPageData));
        dispatch(setStatus("SUCCESS"));
      } else {
        dispatch(setStatus("EMPTY"));
      }
    } catch (error) {
      dispatch(setStatus("ERROR"));
    }
  };
};
