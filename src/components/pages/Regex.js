import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { MainInput } from "../styles/RegexStyle";

export default function Regex() {
  const [userInput, setUserInput] = useState("");
  const [inputs, setInputs] = useState([1]);

  const validate = (e) => {
    const regex = new RegExp(userInput);
    const string = e.target.value;

    if (regex.exec(string)) {
      e.target.style.borderColor = "ForestGreen";
    } else {
      e.target.style.borderColor = "FireBrick";
    }
  };

  return (
    <Container maxWidth="sm" style={styles.container}>
      <MainInput>
        <p style={styles.text}>Expressão regular</p>
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          style={styles.input}
        />
      </MainInput>

      <Divider
        color="inherit"
        orientation="vertical"
        style={{ padding: "0.5px", width: "3px", alignSelf: "center" }}
      />

      <MainInput>
        <p style={styles.text}>Testes</p>
        {inputs.map(() => (
          <input
            type="text"
            placeholder="String"
            onChange={(e) => validate(e)}
            onClick={(e) => {
              validate(e);
              e.target.placeholder = "";
            }}
            style={styles.input}
          />
        ))}
      </MainInput>

      <div style={styles.footer}>
        <Tooltip title="Adicionar">
          <Button
            style={styles.button}
            onClick={() => {
              if (inputs.length < 10) setInputs([...inputs, 1]);
            }}
          >
            <AddOutlinedIcon color="action" />
          </Button>
        </Tooltip>
        <Tooltip title="Remover">
          <Button
            style={styles.button}
            onClick={() => {
              if (inputs.length > 1)
                setInputs(inputs.slice(0, inputs.length - 1));
            }}
          >
            <RemoveOutlinedIcon color="action" />
          </Button>
        </Tooltip>
      </div>
    </Container>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    marginTop: "20px",
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    borderWidth: "3px",
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: "5px",
    height: "50px",
    width: "250px",
    margin: "10px",
    outline: "0",
    fontSize: "20px",
  },
  button: {
    borderRadius: "5px",
    height: "30px",
    width: "20px",
    transitionDuration: "0.5s",
    marginRight: "10px",
  },
  text: {
    fontSize: "30px",
    textAlign: "center",
    margin: "0",
  },
  header: {
    paddingBottom: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  main: {
    paddingBottom: "20px",
    margin: "0 auto",
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    padding: "5px",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  helper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "10px",
  },
};
