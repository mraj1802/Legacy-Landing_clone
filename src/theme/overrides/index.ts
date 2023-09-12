import Button from "./Button";
import { merge } from "lodash";
import Typography from "./Typography";
export default function ComponentsOverrides(theme: any) {
  return merge(Button(theme), Typography(theme));
}
