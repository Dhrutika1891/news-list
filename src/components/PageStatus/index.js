import React from "react";
import { Spinner } from "react-bootstrap";

import "./styles.scss";

function PageStatus({ status }) {
  return (
    <div className="page-status" data-testid="page-status">
      {status === "loading" && (
        <div data-testid="status-loading">
          <Spinner animation="border" variant="primary" />
          <div>Loading...</div>
        </div>
      )}
      {status === "empty" && (
        <p data-testid="status-empty">
          There was no result for the page. Please refresh the page or contact
          support Team.
        </p>
      )}
      {status === "error" && (
        <p data-testid="status-error">
          There was an error loading the page. Please refresh the page or
          contact support Team.
        </p>
      )}
    </div>
  );
}

export default PageStatus;
