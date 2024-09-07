import NoInternet from "../components/noInternet";
import useNetworkInfo from "../hooks/useNetworkInfo";
import AuthorizedNavigation from "./stackNavigation/authorizedNavigation";
import UnAuthorizedNavigation from "./stackNavigation/unauthorizedNavigation";

const Navigation = () => {
  const [isOnline, onPressReload] = useNetworkInfo();
  //   const { isUserLoggedIn } = useUser();
  const isUserLoggedIn = true;
  if (!isOnline) {
    return <NoInternet onPressReload={onPressReload} />;
  }
  if (isUserLoggedIn) return <AuthorizedNavigation />;

  return <UnAuthorizedNavigation />;
};
export default Navigation;
