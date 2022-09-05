import Head from "next/head";
import Image from "next/image";
import { React, useState } from "react";

import styles1 from "../../styles/Form.module.css";
import { useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios
        .get("https://63074e613a2114bac75ec5e8.mockapi.io/loginform")
        .then((res) => setData(res.data));
    }
    getData();
  }, []);

  console.log(data);

  return (
    <div className={styles1.container_box}>
      <Head>
        <title>Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles1.main}>
        <h1 className={styles1.title}>Registration form Data</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.number}</td>
                <td>{element.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  );
}