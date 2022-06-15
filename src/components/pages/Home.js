import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../Navbar/Navbar";
import { Typography } from "@material-ui/core";
import { Divider } from "../styles/HomeStyles";

export default function Home() {
  return (
    <>
      <Container maxWidth="sm" style={styles.container}>
        <Typography variant="h4" align="center">
          Trabalho 1 Linguagens Formais e Automomatos
        </Typography>
        <Divider/>
        <Typography>João Pedro Silva Baptista</Typography>
        <Typography>Vitor Hugo Alvim da Fonseca</Typography>
      </Container>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};
