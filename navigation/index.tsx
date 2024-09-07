import NoInternet from "../components/noInternet";
import useNetworkInfo from "../hooks/useNetworkInfo";
import { useUser } from "../hooks/useUser";
import AuthorizedNavigation from "./stackNavigation/authorizedNavigation";
import UnAuthorizedNavigation from "./stackNavigation/unauthorizedNavigation";

const Navigation = () => {
  const [isOnline, onPressReload] = useNetworkInfo();
  const { user } = useUser();

  if (!isOnline) {
    return <NoInternet onPressReload={onPressReload} />;
  }
  if (user) return <AuthorizedNavigation />;

  return <UnAuthorizedNavigation />;
};
export default Navigation;
