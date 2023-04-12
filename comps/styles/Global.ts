import { styled } from "@mui/system";

interface FlexProps {
  mobile: string;
  dir: string;
}

export const Flex = styled("div")<FlexProps>(({ mobile, dir, theme }: any) => ({
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
    flexDirection: mobile,
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: " green",
    flexDirection: mobile,
  },
}));
