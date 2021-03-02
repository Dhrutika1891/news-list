import React, { useState } from "react";

import "./styles.scss";

const NewsStory = ({ story }) => {
  const baseClass = "news-story";
  const [isError, setIsError] = useState(false);
  return (
    <div className={baseClass} data-testid="news-story">
      <img
        className={`${baseClass}__image`}
        data-testid="news-story-image"
        src={isError ? "https://picsum.photos/200" : story?.imageURL}
        alt={"News"}
        onError={() => {
          setIsError(true);
        }}
      />
      <div
        className={`${baseClass}__container`}
        data-testid="news-story-container"
      >
        <h3 data-testid="news-story-title">{story?.title}</h3>
        <h6 data-testid="news-story-subtitle">{story?.subtitle}</h6>
        <div data-testid="news-story-detail">{story?.newsDetail}</div>
        <a
          data-testid="news-story-link"
          target="_blank"
          rel="noreferrer"
          href={story?.newsURL}
        >
          Read more...
        </a>
      </div>
    </div>
  );
};

export default NewsStory;
