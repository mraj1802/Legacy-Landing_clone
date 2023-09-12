import { Box, Container, Typography, useTheme } from "@mui/material";
import TeamCard from "../../../components/TeamCard/TeamCard";
import classes from "./BehindTheScene.module.css";
import anumc from "/public/about/anum-c.png";
import anum from "/public/about/anum.png";
import azazc from "/public/about/azaz-c.png";
import azaz from "/public/about/azaz.png";
import chrisc from "/public/about/chris-c.png";
import chris from "/public/about/chris.png";
import crystalc from "/public/about/crystal-c.png";
import crystal from "/public/about/crystal.png";
import gordonc from "/public/about/gordon-c.png";
import gordon from "/public/about/gordon.png";
import lazaroc from "/public/about/lazaro-c.png";
import lazaro from "/public/about/lazaro.png";
import richardc from "/public/about/richard-c.png";
import richard from "/public/about/richard.png";
import russellc from "/public/about/russell-c.png";
import russell from "/public/about/russell.png";
import seanc from "/public/about/sean-c.png";
import sean from "/public/about/sean.png";
import syedc from "/public/about/syed-c.png";
import syed from "/public/about/syed.png";
import tabishc from "/public/about/tabish-c.png";
import tabish from "/public/about/tabish.png";

const BehindTheScene = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Box className={classes.container}>
          <Typography
            variant="body1"
            color={theme.palette.primary.dark}
            mt="80px"
          >
            Our Artists
          </Typography>
          <Typography
            variant="h2"
            mt="10px"
            fontWeight="700"
            color={theme.palette.primary.dark}
          >
            Behind the Scenes
          </Typography>
          <Typography
            variant="body1"
            mt="22px"
            color={theme.palette.primary.dark}
          >
            We are a team of artists, and the most profound, precise, and
            inexhaustible source of art we possess is nothing but “dedication”
            and “commitment” towards building your ever-lasting legacy.
          </Typography>
        </Box>
        <Box className={classes.imageContainer} mt={"40px"} mb={"40px"}>
          {teamData.map(({ coloredImage, image, role, name }, index) => (
            <Box key={index}>
              <TeamCard
                image={image}
                coloredImage={coloredImage}
                role={role}
                name={name}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

const teamData = [
  {
    name: "Sean Foote",
    role: "CEO | Founder",
    image: sean,
    coloredImage: seanc,
  },
  {
    name: "Gordon Bell",
    role: "President & COO",
    image: gordon,
    coloredImage: gordonc,
  },
  {
    name: "Azaz Ahmed",
    role: "CTO | Co-Founder",
    image: azaz,
    coloredImage: azazc,
  },
  {
    name: "R. Chris Bramwell",
    role: "Vice President | Co-Founder ",
    image: richard,
    coloredImage: richardc,
  },
  {
    name: "Lazaro Chevalier",
    role: "Co-Founder & VP of Sales",
    image: lazaro,
    coloredImage: lazaroc,
  },
  {
    name: "Russell Bramwell",
    role: "Co-Founder & Director of Finance",
    image: russell,
    coloredImage: russellc,
  },
  {
    name: "Crystal Foote",
    role: "CMO",
    image: crystal,
    coloredImage: crystalc,
  },
  {
    name: "Chris Lowe",
    role: "Head of Strategic Partnerships",
    image: chris,
    coloredImage: chrisc,
  },
  {
    name: "Anum Qasim",
    role: "Director Sales",
    image: anum,
    coloredImage: anumc,
  },
  {
    name: "Syed Arslan",
    role: "Head of Content Management",
    image: syed,
    coloredImage: syedc,
  },
  {
    name: "Tabish Munir",
    role: "Director Marketing",
    image: tabish,
    coloredImage: tabishc,
  },
];

export default BehindTheScene;
