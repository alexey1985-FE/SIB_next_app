import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import NextLink from "next/link";
import ListItemText from "@mui/material/ListItemText";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import Cookies from "js-cookie";
import useStyles from "../utils/styles";
import dynamic from "next/dynamic";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { colorTheme } from "../utils/colorTheme";
import { ThemeProvider } from "@emotion/react";
import { AccountCircle } from "@mui/icons-material";
import { Link, Menu } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import { Store } from "../utils/Store";

const drawerWidth = 350;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: theme.mixins.toolbar,
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
  flexDirection: "column",
  justifyContent: "center",
  padding: "5px 40px 0 0",
}));

const Li = styled("li")({
  display: "flex",
  flexDirection: "column",
  padding: "10px 40px 10px 20px",
  cursor: "pointer",
});

const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo, open } = state;

  const classes = useStyles();

  const tabletScreen = useMediaQuery("(max-width:1200px)");
  const mobileScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }
  }, []);

  const handleDrawerToggler = () => {
    setIsOpen(false);
    dispatch({ type: "SET_OPEN", payload: !open });
  };

  const handleMenuToggler = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutClickHandler = () => {
    dispatch({ type: "USER_LOGOUT" });
    router.push("/");
    Cookies.remove("userInfo");
  };

  return (
    <Box sx={{ display: "flex", paddingTop: "4rem" }}>
      <CssBaseline />
      <ThemeProvider theme={colorTheme}>
        <AppBar
          open={tabletScreen ? !open : open}
          position="fixed"
          elevation={5}
          sx={tabletScreen ? { width: "100%" } : undefined}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={handleDrawerToggler}
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            <div
              style={
                mobileScreen
                  ? {
                      display: "flex",
                      alignItems: "center",
                      padding: "0 50px",
                      position: "fixed",
                      right: 10,
                    }
                  : undefined
              }
            >
              {userInfo && userInfo.name}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="basic-menu"
                aria-haspopup="true"
                color="secondary"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={
                  mobileScreen
                    ? { position: "fixed", right: 10 }
                    : { position: "relative" }
                }
              >
                <AccountCircle />
              </IconButton>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Box className={classes.menuItems} onClick={handleClose}>
                <Li className={classes.menuItem}>User Profile</Li>
                <Li className={classes.menuItem}>Notification Settings</Li>
                <Li className={classes.menuItem} onClick={logoutClickHandler}>
                  Log Out
                </Li>
              </Box>
            </Menu>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant={tabletScreen ? "temporary" : "persistent"}
          anchor="left"
          open={open}
          onClose={handleDrawerToggler}
        >
          <DrawerHeader>
            <NextLink href="/" passHref>
              <Link>
                <Image
                  width={200}
                  height={100}
                  src="https://cdn.sibylity.com/static/branding/sibylsoft/img/logo.svg"
                  alt="logo"
                />
              </Link>
            </NextLink>
          </DrawerHeader>

          <List>
            <ListItem
              className={classes.appBarListItems}
              sx={{
                backgroundColor: "#FBEEE7",
                padding: "15px 15px 15px 50px",
              }}
            >
              <div className={classes.appBarListItemIcon}>
                <ListItemIcon>
                  <PermMediaOutlinedIcon color="secondary" />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "#C65D26" }}
                  onClick={handleDrawerToggler}
                >
                  Dashboard
                </ListItemText>
              </div>
            </ListItem>

            <ListItem
              className={classes.appBarListItems}
              sx={{ padding: "15px 15px 15px 50px" }}
              onClick={handleMenuToggler}
            >
              <div className={classes.appBarListItemIcon}>
                <ListItemIcon>
                  <WorkOutlinedIcon />
                </ListItemIcon>
                <ListItemText>Administrator</ListItemText>
                {isOpen ? (
                  <KeyboardArrowDownIcon color="secondary" />
                ) : (
                  <ChevronLeftIcon color="secondary" />
                )}
              </div>
            </ListItem>
            {isOpen && (
              <div onClick={handleDrawerToggler}>
                <ListItem
                  className={classes.subItems}
                  sx={{ paddingLeft: "106px" }}
                >
                  <ListItemText>Users</ListItemText>
                </ListItem>
                <ListItem
                  className={classes.subItems}
                  sx={{ paddingLeft: "106px" }}
                >
                  <ListItemText>Groups</ListItemText>
                </ListItem>
                <ListItem
                  className={classes.subItems}
                  sx={{ paddingLeft: "106px" }}
                >
                  <ListItemText>Settings</ListItemText>
                </ListItem>
              </div>
            )}
          </List>
        </Drawer>
      </ThemeProvider>
      {children}
    </Box>
  );
};

export default dynamic(() => Promise.resolve(DashboardLayout), { ssr: false });
