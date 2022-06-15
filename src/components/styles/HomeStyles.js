import { AppBar } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    margin: 10px;
    background-color: #272727;
`;

export const Menu = styled(AppBar)`
    justify-content: center;
    align-items: center;
`;

