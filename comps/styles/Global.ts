import { styled } from "@mui/system";

export const Flex = styled("div")(({ sx, dir, theme }: any) => ({
  display: "flex",
  flexDirection: dir,
  alignContent: "center",
  justifyContent: "center",
  gap: "5px",
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    backgroundColor: "orange",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: "yellow",
    flexDirection: sx,
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: " green",
    flexDirection: sx,
  },
}));
