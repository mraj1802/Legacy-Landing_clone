import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./MarketingModal.module.css";
import Image from "next/image";
import { influencer } from "../../../api/influencer";
import { toast } from "react-toastify";

const names = ["Facebook", "Instagram", "Tik Tok", "Twitter", "Youtube"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
interface IModalProps {
  setOpen: (open: boolean) => void;
}
type Inputs = {
  email: string;
  twitterId: string;
  userName: string;
};
const MarketingModal = forwardRef(function MarketingModal(
  { setOpen }: IModalProps,
  ref
) {
  const [platform, setPlatform] = useState<string>("Twitter");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const handleOpen = () => {
    setOpen(false);
  };

  const handleChange = (e: SelectChangeEvent) => {
    setPlatform(e.target.value);
    console.log(e.target.value);
  };
  const onSubmit = async (data: Inputs) => {
    try {
      const body: any = { ...data, platform: platform };
      await influencer(body);
      window.location.href = "https://app.legacysuite.com";
    } catch (error: any) {
      toast.error(error?.errMsg);
    }
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.box}>
          <Typography
            variant="h4"
            color="primary.dark"
            fontWeight="700"
            textAlign="center"
          >
            Sign up for your all access account privileges
          </Typography>
          <Box className={classes.img} onClick={handleOpen}>
            <Image src="/marketing/cross.svg" alt="" width="32" height="32" />
          </Box>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            <Typography
              variant="body1"
              color="primary.dark"
              fontWeight="600"
              mt="17px"
            >
              Email Address
            </Typography>
          </label>
          <input
            required
            {...register("email", { required: true })}
            className={classes.input}
            placeholder="e.g. mail@test.com"
          />
          <InputLabel id="demo-multiple-name-label">
            <Typography
              variant="body1"
              color="primary.dark"
              fontWeight="600"
              mt="17px"
              pb="10px"
            >
              Select Social Media Platform
            </Typography>
          </InputLabel>
          <Select
            fullWidth
            required
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            // multiple
            value={platform}
            onChange={handleChange}
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              px: "7.5px !important",
              ".MuiOutlinedInput-input": {
                py: "10px !important",
              },
            }}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <label htmlFor="twitter">
            <Typography
              variant="body1"
              color="primary.dark"
              fontWeight="600"
              mt="16px"
            >
              Enter Username
            </Typography>
          </label>
          <input
            required
            {...register("userName", { required: true })}
            className={classes.input}
            placeholder="e.g. @legacysuite12"
          />
          <Box className={classes.btn}>
            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
});

export default MarketingModal;
