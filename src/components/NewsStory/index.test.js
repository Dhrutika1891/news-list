import { render } from "@testing-library/react";
import React from "react";

import NewsStory from ".";

describe("component news story", () => {
  it("should render news story", () => {
    expect.hasAssertions();

    const { getByTestId, baseElement } = render(<NewsStory status="loading" />);

    const newsStory = getByTestId("news-story");
    const newsImage = getByTestId("news-story-image");
    const newsContainer = getByTestId("news-story-container");
    const newsTitle = getByTestId("news-story-title");
    const newsSubtitle = getByTestId("news-story-subtitle");
    const newsDetail = getByTestId("news-story-detail");
    const newsLink = getByTestId("news-story-link");

    expect(newsStory).toBeInTheDocument();
    expect(newsImage).toBeInTheDocument();
    expect(newsContainer).toBeInTheDocument();
    expect(newsTitle).toBeInTheDocument();
    expect(newsSubtitle).toBeInTheDocument();
    expect(newsDetail).toBeInTheDocument();
    expect(newsLink).toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });
});
