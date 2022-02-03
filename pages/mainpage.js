import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@material-ui/core";
import { Grid, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "../utils/styles";
import StarIcon from "@mui/icons-material/Star";
import GaugeChart from "../charts/GaugeChart";
import LineChart from "../charts/LineChart";
import CollabUsers from "../components/usersInfo/CollabUsers";
import LeaderUsers from "../components/usersInfo/LeaderUsers";
import CollabSelect from "../selects/CollabSelect";
import TrendsSelect from "../selects/TrendsSelect";
import NextLink from "next/link";
import DashboardLayout from "../components/DashboardLayout";
import { useContext } from "react";
import { Store } from "../utils/Store";

const drawerWidth = 350;

const Main = styled("main", { $shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(4, 5),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5, 4),
  borderRadius: 10,
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
}));

const MainPage = () => {
  const { state } = useContext(Store);
  const { open } = state;
  const classes = useStyles();

  const largeScreen = useMediaQuery("(max-width:1750px)");
  const tabletScreen = useMediaQuery("(max-width:1200px)");

  return (
    <DashboardLayout>
      <Main
        open={tabletScreen ? !open : open}
        sx={tabletScreen ? { marginLeft: 0 } : !{ marginLeft: "-350px" }}
      >
        <Grid
          container
          spacing={tabletScreen ? 0.8 : 5}
          sx={tabletScreen ? { width: "100%" } : undefined}
        >
          {open ? (
            <>
              <Grid
                item
                lg={largeScreen ? 12 : 8}
                mb={tabletScreen ? 5 : undefined}
                sx={{ width: "100%" }}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Typography sx={{ fontSize: "1.43rem" }}>Overview</Typography>
                  <Grid container spacing={1} justifyContent="space-around">
                    <Grid item>
                      <Box sx={{ maxWidth: "260px" }}>
                        <GaugeChart count={50} />
                        <Typography
                          sx={{
                            textAlign: "center",
                            transform: "translateY(-55px)",
                          }}
                        >
                          Employees have Collaborated
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box sx={{ maxWidth: "260px" }}>
                        <GaugeChart count={24} />
                        <Typography
                          sx={{
                            textAlign: "center",
                            transform: "translateY(-55px)",
                          }}
                        >
                          Identified Vulnerabilities Mitigated
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box sx={{ maxWidth: "260px" }}>
                        <GaugeChart count={26} />
                        <Typography
                          sx={{
                            textAlign: "center",
                            transform: "translateY(-55px)",
                          }}
                        >
                          Activities Completed
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                lg={largeScreen ? 6 : 4}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontSize: "1.43rem" }}>
                      Accomplishments
                    </Typography>
                    <Box className={classes.accomplishments}>
                      <StarIcon
                        sx={{ fontSize: "330px", color: "#E8F8CF" }}
                      ></StarIcon>
                      <Typography sx={{ transform: "translateY(-43px)" }}>
                        Completed Activities
                      </Typography>
                      <Box
                        sx={{
                          fontSize: "50px",
                          color: "#fff",
                          position: "absolute",
                          top: "125px",
                          fontWeight: "400",
                        }}
                      >
                        53
                      </Box>
                    </Box>
                    <NextLink href="#" passHref>
                      <Link
                        color="info.main"
                        sx={{ textDecoration: "none", alignSelf: "flex-end" }}
                      >
                        View Workspace
                      </Link>
                    </NextLink>
                  </Box>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                lg={largeScreen ? 6 : 4}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ fontSize: "1.43rem", marginBottom: "25px" }}
                  >
                    Collaborator Lookup
                  </Typography>
                  <Typography sx={{ marginBottom: "2px" }}>
                    Want to get more help? These users can help.
                  </Typography>
                  <CollabSelect />
                  <CollabUsers />
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                lg={largeScreen ? 6 : 4}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ fontSize: "1.43rem", marginBottom: "55px" }}
                  >
                    Trends
                  </Typography>
                  <TrendsSelect />
                  <LineChart />
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                lg={largeScreen ? 6 : 4}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ fontSize: "1.43rem", marginBottom: "37px" }}
                  >
                    Leaderboard
                  </Typography>
                  <LeaderUsers />
                </Item>
              </Grid>
            </>
          ) : (
            <>
              <Grid
                item
                md={12}
                lg={12}
                xl={8}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Typography sx={{ fontSize: "1.43rem" }}>Overview</Typography>
                  <Grid container spacing={1} justifyContent="space-around">
                    <Grid item>
                      <Box sx={{ maxWidth: "260px" }}>
                        <GaugeChart count={50} />
                        <Typography
                          sx={{
                            textAlign: "center",
                            transform: "translateY(-55px)",
                          }}
                        >
                          Employees have Collaborated
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box sx={{ maxWidth: "260px" }}>
                        <GaugeChart count={24} />
                        <Typography
                          sx={{
                            textAlign: "center",
                            transform: "translateY(-55px)",
                          }}
                        >
                          Identified Vulnerabilities Mitigated
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box sx={{ maxWidth: "260px" }}>
                        <GaugeChart count={26} />
                        <Typography
                          sx={{
                            textAlign: "center",
                            transform: "translateY(-55px)",
                          }}
                        >
                          Activities Completed
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                lg={tabletScreen ? 12 : 6}
                xl={4}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography sx={{ fontSize: "1.43rem" }}>
                      Accomplishments
                    </Typography>
                    <Box className={classes.accomplishments}>
                      <StarIcon
                        sx={{ fontSize: "330px", color: "#E8F8CF" }}
                      ></StarIcon>
                      <Typography sx={{ transform: "translateY(-43px)" }}>
                        Completed Activities
                      </Typography>
                      <Box
                        sx={{
                          fontSize: "50px",
                          color: "#fff",
                          position: "absolute",
                          top: "125px",
                          fontWeight: "400",
                        }}
                      >
                        53
                      </Box>
                    </Box>
                    <NextLink href="#" passHref>
                      <Link
                        color="info.main"
                        sx={{ textDecoration: "none", alignSelf: "flex-end" }}
                      >
                        View Workspace
                      </Link>
                    </NextLink>
                  </Box>
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                lg={tabletScreen ? 12 : 6}
                xl={4}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ fontSize: "1.43rem", marginBottom: "25px" }}
                  >
                    Collaborator Lookup
                  </Typography>
                  <Typography sx={{ marginBottom: "2px" }}>
                    Want to get more help? These users can help.
                  </Typography>
                  <CollabSelect />
                  <CollabUsers />
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                lg={tabletScreen ? 12 : 6}
                xl={4}
                mb={tabletScreen ? 5 : undefined}
              >
                <Item sx={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ fontSize: "1.43rem", marginBottom: "55px" }}
                  >
                    Trends
                  </Typography>
                  <TrendsSelect />
                  <LineChart />
                </Item>
              </Grid>
              <Grid item xs={12} lg={tabletScreen ? 12 : 6} xl={4}>
                <Item sx={{ cursor: "pointer" }}>
                  <Typography
                    sx={{ fontSize: "1.43rem", marginBottom: "37px" }}
                  >
                    Leaderboard
                  </Typography>
                  <LeaderUsers />
                </Item>
              </Grid>
            </>
          )}
        </Grid>
      </Main>
    </DashboardLayout>
  );
};

export default MainPage;
