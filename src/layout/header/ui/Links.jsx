import { Box } from "@mui/material";
import nextKey from "generate-my-key";
import myLinks, {
  alwaysLinks,
  loggedInLinks,
  businessInLinks,
  loggedOutLinks,
} from "../../myLinks";
import NavLinkComponent from "../NavLinkComponent";
import { useSelector } from "react-redux";

const Links = () => {
  const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
  const isBuisness = useSelector((bigPie) => bigPie.authSlice.isBuisness);
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {alwaysLinks.map((myItem) => (
        <NavLinkComponent to={myItem.to} key={nextKey()}>
          {myItem.children}
        </NavLinkComponent>
      ))}
      {loggedIn &&
        loggedInLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {!loggedIn &&
        loggedOutLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {isBuisness &&
        businessInLinks.map((myItem) => (
          <NavLinkComponent to={myItem.to} key={nextKey()}>
            {myItem.children}
          </NavLinkComponent>
        ))}
    </Box>
  );
};

export default Links;
