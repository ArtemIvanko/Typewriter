import { TextField } from "@mui/material";

export const Typewriter = () => {
  return (
    <div>
      Typewriter
      <p>quotes</p>
      <TextField label="Type here" multiline fullWidth maxRows={8} variant="filled" />
    </div>
  );
};
