import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(24,89,126,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ backgroundColor: "#821111", margin: 1, borderRadius: 10 }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ backgroundColor: "#821111", margin: 1, borderRadius: 10 }}
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ backgroundColor: "#821111", margin: 1, borderRadius: 10 }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
