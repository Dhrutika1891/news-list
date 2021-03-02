import React, { useEffect, useState } from "react";
import useThunkReducer from "react-hook-thunk-reducer";
import Pagination from "@material-ui/lab/Pagination";

import { getNews } from "../../state/news";
import reducerForNews, { initialState } from "../../state";
import PageStatus from "../../components/PageStatus";
import NewsStory from "../../components/NewsStory";
import "./styles.scss";

const News = () => {
  const reducer = useThunkReducer(reducerForNews, initialState);
  const [state, dispatch] = reducer;
  const { status, newsPageData } = state;
  const newsData = newsPageData?.news || [];
  const [pageNo, setPageNo] = useState(1);
  const itemPerPage = 3;

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  if (status === "LOADING") return <PageStatus status="loading" />;
  if (status === "EMPTY") return <PageStatus status="empty" />;
  if (status === "ERROR") return <PageStatus status="error" />;

  return (
    <div className="news-page" data-testid="news-page">
      <h1>NEWS</h1>
      {newsData && newsData.length && (
        <Pagination
          data-testid="news-pagination"
          count={Math.ceil(newsData.length / itemPerPage)}
          color="primary"
          onChange={(e, value) => {
            setPageNo(value);
          }}
        />
      )}
      {newsData
        .slice((pageNo - 1) * itemPerPage, pageNo * itemPerPage)
        .map((story) => (
          <NewsStory key={story.newsId} story={story} />
        ))}
    </div>
  );
};

export default News;
