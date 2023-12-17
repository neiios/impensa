import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../theme/Index";
import moment from "moment";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
`;

const ReportBox = styled.div`
  padding: 1rem;
  width: 100%;
  background: ${theme.bg.lightestBlue};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const ReportTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;

const ReportDescription = styled.p`
  font-size: 1rem;
`;

const ReportedAt = styled.span`
  font-size: 0.8rem;
  color: #7e7e7e;
`;

const Reports = () => {
  const [reports, setReports] = useState([]);

  async function getReports() {
    try {
      const res = await fetch("/api/v1/reports", {
        method: "GET",
      });

      const parseData = await res.json();
      setReports(parseData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getReports();
  }, []);

  return (
    <Container>
      <Heading>User Reports</Heading>
      {reports.map((report) => (
        <ReportBox key={report.id}>
          <ReportTitle>{report.title}</ReportTitle>
          <ReportDescription>{report.description}</ReportDescription>
          <ReportedAt>
            Reported at {moment.utc(report.createdAt).format("MMM Do, YYYY")}
          </ReportedAt>
        </ReportBox>
      ))}
    </Container>
  );
};

export default Reports;
