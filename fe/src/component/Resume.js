import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import PDF from "../Resume.pdf";
import "./resume.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    // <div>
    //   <Document
    //     file="https://drive.google.com/file/d/1Cu8zEEX7WoEuaG_gbZWQCNxspg1L9dPY/view?usp=sharing"
    //     onLoadSuccess={onDocumentLoadSuccess}
    //   >
    //     <Page pageNumber={pageNumber} />
    //   </Document>
    //   <p>
    //     Page {pageNumber} of {numPages}
    //   </p>
    // </div>
    <div className="resss">
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
      <a href={PDF}>Herre</a>
    </div>
  );
}

export default Resume;
