import {
  
  Box,
  Button,
  Container,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Menu } from "../styles/HomeStyles";

const Navbar = ({ pages, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Menu position="static" {...rest}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.route}
                onClick={() => navigate(page.route)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Menu>
  );
};
export default Navbar;

