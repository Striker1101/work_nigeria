import { styled } from "@mui/system";

export const NavStyled = styled("nav")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

export const ContentStyled = styled("ul")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  position: "absolute",
  listStyle: "none",
  right: "10px",
  borderRadius: theme.shape.borderRadius,
}));

export const LinkStyled = styled("li")`
  padding: 2px;
  cursor: pointer;
  transition: transform ease-in-out;
  &:hover {
    border-bottom: 3px solid blue;
    transform: scale(0.9);
  }
`;
