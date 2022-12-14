import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import axios from 'axios';
import { useEffect } from 'react';
import Summary from '../component/Mainpage/Summary';
import Main from '../component/Mainpage/Main';
function Mainpage(props) {
  const [clients, setClients] = useState([]);
  const get_clients = async () => {
    try {
      await axios
        .get('http://localhost:8080/api/dashboard/clients')
        .then((res) => {
          setClients(res.data);
          // console.log(clients);
        });
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    setInterval(() => {
      get_clients();
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />
      <style>
        {`#mainpage {
                    filter: invert(11%) sepia(51%) saturate(890%) hue-rotate(333deg) brightness(100%) contrast(98%);`}
      </style>
      <div className="container">
        <h2>노인 가구 명단</h2>
        <Summary key="summary" clients={clients} />
        <Main key={clients} clients={clients} />
      </div>
    </div>
  );
}

export default Mainpage;
