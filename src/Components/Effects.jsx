import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const Effects = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(10);
  const [randomNumbertwo, setRandomNumberTwo] = useState(20);
  // after render
  useEffect(() => {
    setCount(count + 1);
    // Something that is not responsible for rendering a component - Side Effects
    // - Fetching data from server.
    // - Modifying the dom manually. (Eg: document.getElement)
    // - Accessing the local storage.
  }, [randomNumber]);
  return (
    <Box>
      <Typography variant="h3">{count}</Typography>
      <Typography variant="h3">{randomNumbertwo}</Typography>
      <Button onClick={() => setRandomNumber(randomNumber + 1)}>
        Increment Random Number
      </Button>
      <Button onClick={() => setRandomNumberTwo(randomNumbertwo + 1)}>
        Increment Random Number 2
      </Button>
    </Box>
  );
};
export default Effects;
