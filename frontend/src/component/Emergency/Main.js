import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Row from './Row';

function Main({ emergency, today_unsolved, today_emergency, unsolved }) {
  const selectList = [
    '금일 미해결 응급콜',
    '금일 전체 응급콜',
    '전체 미해결 응급콜',
    '전체 응급콜',
  ];
  const [Selected, setSelected] = useState('금일 미해결 응급콜');
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  useEffect(() => {
    // console.log(Selected);
  }, [Selected]);

  return (
    <div>
      <br />
      <Select onChange={handleSelect} value={Selected}>
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </Select>
      <Table style={{ width: '100%' }}>
        <Thead>
          <tr>
            <th style={{ width: '5%' }}>번호</th>
            <th style={{ width: '5%' }}>이름</th>
            <th style={{ width: '10%' }}>생년월일</th>
            <th style={{ width: '30%' }}>주소</th>
            <th style={{ width: '13%' }}>
              발생 시간
              <br />
              (YYYY:MM:DD HH:MM)
            </th>
            <th style={{ width: '13%' }}>
              발생 시간
              <br />
              (현재 시간과의 차이)
            </th>
            <th style={{ width: '20%' }}>응급콜 내용</th>
            <th>해결여부</th>
          </tr>
        </Thead>
        <Tbody>
          {Selected === '금일 미해결 응급콜'
            ? today_unsolved &&
              today_unsolved.map((emerg, index) => {
                const client = emerg.client;

                return (
                  <Row
                    key={emerg.id}
                    id={emerg.id}
                    index={index}
                    clientId={client.id}
                    name={client.name}
                    address={client.address}
                    birth={client.birth}
                    emergency={emerg.emergencyNow}
                    emergency_content={emerg.content}
                    phonenumber={client.phonenumber}
                    entireEmergency={emerg}
                  />
                );
              })
            : Selected === '금일 전체 응급콜'
            ? today_emergency &&
              today_emergency.map((emerg, index) => {
                const client = emerg.client;

                return (
                  <Row
                    key={emerg.id}
                    id={emerg.id}
                    index={index}
                    clientId={client.id}
                    name={client.name}
                    address={client.address}
                    birth={client.birth}
                    emergency={emerg.emergencyNow}
                    phonenumber={client.phonenumber}
                    emergency_content={emerg.content}
                    entireEmergency={emerg}
                  />
                );
              })
            : Selected === '전체 미해결 응급콜'
            ? unsolved &&
              unsolved.map((emerg, index) => {
                const client = emerg.client;

                return (
                  <Row
                    key={emerg.id}
                    id={emerg.id}
                    index={index}
                    clientId={client.id}
                    name={client.name}
                    address={client.address}
                    birth={client.birth}
                    emergency={emerg.emergencyNow}
                    phonenumber={client.phonenumber}
                    emergency_content={emerg.content}
                    entireEmergency={emerg}
                  />
                );
              })
            : emergency.map((emerg, index) => {
                const client = emerg.client;

                return (
                  <Row
                    key={emerg.id}
                    id={emerg.id}
                    index={index}
                    clientId={client.id}
                    name={client.name}
                    address={client.address}
                    birth={client.birth}
                    emergency={emerg.emergencyNow}
                    phonenumber={client.phonenumber}
                    emergency_content={emerg.content}
                    entireEmergency={emerg}
                  />
                );
              })}
        </Tbody>
      </Table>
    </div>
  );
}

export default Main;
const Select = styled.select`
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 200px;
  height: 44px;
  font-family: 'nanum_b';
  font-size: 1.6vmin;
  padding-left: 1vmin;
`;

const Table = styled.table`
  margin-top: 3vmin;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  table-layout: fixed;
  overflow-y: scroll;
  max-height: 585px;
`;

const Thead = styled.thead`
  display: table;
  color: #828282;
  width: 100%;
  padding: 1vmin;
  font-size: 1.5vmin;
  box-sizing: border-box;
`;

const Tbody = styled.tbody`
  display: table;
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5vmin;
  text-align: center;
`;
