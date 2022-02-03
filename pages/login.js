import {
  Button,
  List,
  Link,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import useStyles from "../utils/styles";
import FormLayout from "../components/FormLayout";
import { useRouter } from "next/router";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useContext, useState } from "react";
import { getError } from "../utils/error";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { Store } from "../utils/Store";
import { motion } from "framer-motion";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();
  const router = useRouter();
  const { redirect } = router.query;

  const [error, setError] = useState("");

  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    if (userInfo) {
      router.push("/mainpage");
    }
  }, []);

  const clickHandler = async ({ email, password }) => {
    closeSnackbar();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });

      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));

      router.push("/mainpage");

      setError(getError(error));
    } catch (error) {
      enqueueSnackbar(getError(error), {
        variant: "error",
      });
    }
  };

  return (
    <FormLayout>
      <motion.form
        className={classes.form}
        onSubmit={handleSubmit(clickHandler)}
        variants={{
          shake: {
            x: [0, -20, 20, -20, 20, -20, 20, 0],
          },
        }}
        animate="shake"
      >
        <div className={classes.logo}>
          <Image
            width={"200"}
            height={100}
            src="https://cdn.sibylity.com/static/branding/sibylsoft/img/logo.svg"
            alt="logo"
          />
        </div>
        <Typography className={classes.bold} align="center">
          Log In
        </Typography>
        <Typography align="center">to access the Sibylity Dashboard</Typography>
        <List style={{ marginTop: 30 }}>
          <ListItem>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  inputProps={{ type: "email" }}
                  error={Boolean(errors.email)}
                  helperText={
                    errors.email
                      ? errors.email.type === "pattern"
                        ? "Email is not valid"
                        : "Email is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password"
                  inputProps={{ type: "password" }}
                  error={Boolean(errors.password)}
                  helperText={
                    errors.password
                      ? errors.password.type === "minLength"
                        ? "Password length is more than 5"
                        : "Password is required"
                      : ""
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button
              color="primary"
              className={classes.btn}
              variant="contained"
              fullWidth
              type="submit"
            >
              Log In
            </Button>
          </ListItem>
          <ListItem>
            Don`t have an account? &nbsp;
            <NextLink href={`/register?redirect=${redirect || "/"}`} passHref>
              <Link>Sign In</Link>
            </NextLink>
          </ListItem>
        </List>
      </motion.form>
    </FormLayout>
  );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
