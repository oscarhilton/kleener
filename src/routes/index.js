import LandingLayout from "layouts/LandingLayout";
import Landing from "./Landing";
import PrivacyPolicy from "./PrivacyPolicy";

export const createRoutes = store => {
  return [
    {
      path: "/privacy-policy",
      component: LandingLayout,
      indexRoute: PrivacyPolicy,
    },
    {
      path: "/**",
      component: LandingLayout,
      indexRoute: Landing,
    },
  ];
};

export default createRoutes;
