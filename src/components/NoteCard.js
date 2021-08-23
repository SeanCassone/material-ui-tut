import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  categoryBorder: {
    border: (note) => {
      if (note.category === "work") {
        return "1px solid red";
      }
      if (note.category === "reminders") {
        return "1px solid orange";
      }
      if (note.category === "todos") {
        return "1px solid green";
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.categoryBorder}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          {
            <Typography variant="body2" color="textSecondary">
              {note.details}
            </Typography>
          }
        </CardContent>
      </Card>
    </div>
  );
}
