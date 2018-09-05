import LandingLayout from "layouts/LandingLayout";
import Landing from "./Landing";

export const createRoutes = store => {
  return [
    {
      path: "/",
      component: LandingLayout,
      indexRoute: Landing,
    },
  ];
};

export default createRoutes;
