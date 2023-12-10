import React, { useEffect, useState } from "react";
import { ArchiveContainer, H3, HeaderContainer } from "../style";
import { Table, Colgroup, Thead, Tr, Th, Tbody, Td } from "./style";
import moment from "moment";

const Log = () => {
  const [userLogs, setUserLogs] = useState([]);

  document.title = "Dashboard - Activity";

  async function getUserLogs() {
    try {
      const res = await fetch("/api/v1/logs", {
        method: "GET",
      });

      const parseData = await res.json();
      console.log(parseData);
      setUserLogs(parseData);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getUserLogs();
  }, []);

  return (
    <ArchiveContainer>
      <HeaderContainer>
        <H3>User activity</H3>
      </HeaderContainer>
      <Table>
        <Colgroup></Colgroup>
        <Thead>
          <Tr>
            <Th>IP</Th>
            <Th>Date</Th>
            <Th>User Agent</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userLogs.map((log) => (
            <Tr key={1}>
              <Td data-label="IP">{log.ip}</Td>
              <Td data-label="Date">
                {" "}
                {moment(log.date).format("MMM Do, YYYY HH:mm")}
              </Td>
              <Td data-label="User Agent">{log.browser}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </ArchiveContainer>
  );
};
export default Log;
