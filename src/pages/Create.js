import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note!
      </Typography>
      <Button
        onClick={() => console.log("You Clicked Me!")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
      {/* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup> */}
    </Container>
  );
}
