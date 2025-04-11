import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Badge } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import logo from "../../resources/images/logo.svg";
import favorite from "../../resources/icons/favorite.svg";
import factsSoft from "../../resources/icons/facts-soft.svg";
import cartImg from "../../resources/icons/cart.svg";

const Header = ({ cart }) => {
  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{bgcolor: '#fff', borderBottom: '1px solid #eeeeee'}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src={logo} alt="Logo" />
        <Box>
          <IconButton color="inherit" aria-label="favorites">
            <img src={favorite} alt="favorite" width={25} />
          </IconButton>
          <IconButton color="inherit" aria-label="favorites">
            <img src={factsSoft} alt="factsSoft" width={25} />
          </IconButton>
          <IconButton color="inherit" aria-label="favorites">
            <Badge badgeContent={cart.items} color="error">
              <img src={cartImg} alt="favorite" width={25} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;