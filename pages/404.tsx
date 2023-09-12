import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import * as React from "react";

const Error = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/");
  });
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></div>
  );
};

export default Error;
