import { Box } from "@mui/material";
import HeadingTextButttonShowcase from "../../../components/HeadingTextButttonShowcase/HeadingTextButttonShowcase";
import ImageShowcase from "../../../components/ImageShowcase/ImageShowcase";
import TextContainerImageShowcase from "../../../components/TextContainerImageShowcase/TextContainerImageShowcase";
import classes from "./Wills.module.css";
import crypto from "/public/crypto/crypto.png";
import nft from "/public/crypto/nft.png";

const cryptoData = {
  heading: "Crypto Will ™",
  text: "Our technology is transparent and grants you complete control over who you want your crypto coins to be transferred to and how much you want to transfer, with the full capability of disbursing to multiple beneficiaries in one instant transaction.",
  type: "secondary",
};
const nftData = {
  heading: "NFT Will ™",
  text: "Our smart contracts allow you to pledge your NFTs (ERC721) to your beneficiaries without sharing sensitive information. In addition, you maintain complete control over when that transaction occurs without involving a third party.",
  type: "secondary",
};

const Wills = () => {
  return (
    <Box className={classes.root}>
      <Box>
        <TextContainerImageShowcase
          right={<HeadingTextButttonShowcase {...cryptoData} />}
          left={<ImageShowcase src={crypto} />}
        />
      </Box>
      <Box mt="52px">
        <TextContainerImageShowcase
          left={<HeadingTextButttonShowcase {...nftData} />}
          right={<ImageShowcase src={nft} />}
          reverse={true}
        />
      </Box>
    </Box>
  );
};

export default Wills;
