import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import * as React from "react";
import classes from "./Profile.module.css";
const Profile = ({ image, name }: { image: StaticImageData; name: string }) => {
  return (
    <Box className={classes.container}>
      <Box>
        <Image src={image} alt="profile" />
      </Box>
      <Box>
        <Typography variant="body1" color="primary.dark">
          {name}
        </Typography>
        <Typography variant="body1" color="disabled.main">
          Author
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
