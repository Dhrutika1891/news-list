import { getNews, setNews } from "./news";
import { setStatus } from ".";
import { getNewsData } from "../services/news";

jest.mock("../services/news", () => {
  return {
    getNewsData: jest.fn(),
  };
});

describe("news page state", () => {
  const newsPageData = {
    news: [
      {
        newsId: "2e734195356d770c848b14d244ce9985",
        newsURL:
          "http://cdn.newsapi.com.au/link/2e734195356d770c848b14d244ce9985?domain=theaustralian.com.au",
        newsDetail:
          "US President-elect Donald Trump and some of Silicon Valley's most powerful executives have met at his Manhattan tower.",
        subtitle: "Trump tells tech leaders he's here to help",
        imageURL:
          "http://cdn.newsapi.com.au/image/v1/0a0268a6893bd2bdfd42fdd6ec0b9c41",
        title: "Trump tells tech leaders he's here to help",
      },
      {
        newsId: "456e10bf9e989f09701e9ceb452e7501",
        newsURL:
          "http://cdn.newsapi.com.au/link/456e10bf9e989f09701e9ceb452e7501?domain=foxsports.com.au",
        newsDetail:
          "NATHAN Lyon has taken the final spot in the Australian XI to face Pakistan ahead of Chadd Sayers as Australia bats first. LIVE COVERAGE.",
        subtitle: "Live: Australia v Pakistan at the Gabba",
        imageURL:
          "http://cdn.newsapi.com.au/image/v1/thumbnail/81dbf92a815d417d4d8b1bf110e7e631",
        title: "Live: Aussies win toss and elect to bat",
      },
    ],
  };
  const newsResponse = [
    {
      id: {
        value: "2e734195356d770c848b14d244ce9985",
      },
      link:
        "http://cdn.newsapi.com.au/link/2e734195356d770c848b14d244ce9985?domain=theaustralian.com.au",
      standFirst:
        "US President-elect Donald Trump and some of Silicon Valley's most powerful executives have met at his Manhattan tower.",
      subtitle: "Trump tells tech leaders he's here to help",
      thumbnailImage: {
        link:
          "http://cdn.newsapi.com.au/image/v1/0a0268a6893bd2bdfd42fdd6ec0b9c41",
      },
      title: "Trump tells tech leaders he's here to help",
    },
    {
      id: {
        value: "456e10bf9e989f09701e9ceb452e7501",
      },
      link:
        "http://cdn.newsapi.com.au/link/456e10bf9e989f09701e9ceb452e7501?domain=foxsports.com.au",
      standFirst:
        "NATHAN Lyon has taken the final spot in the Australian XI to face Pakistan ahead of Chadd Sayers as Australia bats first. LIVE COVERAGE.",
      subtitle: "Live: Australia v Pakistan at the Gabba",
      thumbnailImage: {
        link:
          "http://cdn.newsapi.com.au/image/v1/thumbnail/81dbf92a815d417d4d8b1bf110e7e631",
      },
      title: "Live: Aussies win toss and elect to bat",
    },
  ];

  it("should get data and build news page", async () => {
    expect.hasAssertions();

    getNewsData.mockResolvedValue(newsResponse);

    const dispatch = jest.fn();

    await getNews()(dispatch, () => initialState);

    expect(dispatch).toHaveBeenNthCalledWith(1, setStatus("LOADING"));
    expect(dispatch).toHaveBeenNthCalledWith(2, setNews(newsPageData));
    expect(dispatch).toHaveBeenNthCalledWith(3, setStatus("SUCCESS"));
  });

  it("should show error if anything goes wrong with get data", async () => {
    expect.hasAssertions();

    getNewsData.mockRejectedValue({});

    const dispatch = jest.fn();

    await getNews()(dispatch, () => initialState);

    expect(dispatch).toHaveBeenCalledWith(setStatus("ERROR"));
  });
});
