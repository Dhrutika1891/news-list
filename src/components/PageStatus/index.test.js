import { render } from "@testing-library/react";
import React from "react";

import PageStatus from ".";

describe("component page status", () => {
  it("should render page status", () => {
    expect.hasAssertions();

    const { getByTestId, baseElement } = render(
      <PageStatus status="loading" />
    );

    const pageStatus = getByTestId("page-status");
    expect(pageStatus).toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });

  it("should render page status loading", () => {
    expect.hasAssertions();

    const { getByTestId, queryByTestId, baseElement } = render(
      <PageStatus status="loading" />
    );

    const loadingStatus = getByTestId("status-loading");
    expect(loadingStatus).toBeInTheDocument();
    expect(loadingStatus).toHaveTextContent("Loading");

    const emptyStatus = queryByTestId("status-empty");
    expect(emptyStatus).not.toBeInTheDocument();

    const errorStatus = queryByTestId("status-error");
    expect(errorStatus).not.toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });

  it("should render page status empty", () => {
    expect.hasAssertions();

    const { getByTestId, queryByTestId, baseElement } = render(
      <PageStatus status="empty" />
    );

    const loadingStatus = queryByTestId("status-loading");
    expect(loadingStatus).not.toBeInTheDocument();

    const emptyStatus = getByTestId("status-empty");
    expect(emptyStatus).toBeInTheDocument();

    const errorStatus = queryByTestId("status-error");
    expect(errorStatus).not.toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });

  it("should render page status error", () => {
    expect.hasAssertions();

    const { getByTestId, queryByTestId, baseElement } = render(
      <PageStatus status="error" />
    );

    const loadingStatus = queryByTestId("status-loading");
    expect(loadingStatus).not.toBeInTheDocument();

    const emptyStatus = queryByTestId("status-empty");
    expect(emptyStatus).not.toBeInTheDocument();

    const errorStatus = getByTestId("status-error");
    expect(errorStatus).toBeInTheDocument();

    expect(baseElement).toMatchSnapshot();
  });
});
