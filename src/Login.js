import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Box
            sx={{
              bgcolor: "primary.main",
              width: "100%",
              height: 40,
              border: 1,
              color: "white",
            }}
          >
            <h2>Cadency Commander</h2>
          </Box>
        </Grid>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Smart Login"
        />
        <TextField
          required
          label="First name"
          name="name"
          placeholder="First name"
          fullWidth
        />
        <TextField
          label="Team name"
          name="teamname"
          placeholder="Team name"
          fullWidth
        />

        <Button
          form="userForm"
          type="submit"
          variant="contained"
          color="primary"
          data-upgraded=",MaterialButton"
          style={btnstyle}
          halfWidth
        >
          JOIN SESSION
        </Button>

        <div>
          <FormControlLabel control={<Checkbox />} label="Project Manager" />
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
