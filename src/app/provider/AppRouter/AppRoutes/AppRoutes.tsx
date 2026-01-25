import { Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { appRoutes } from "@/shared/config/routeConfig";
import { MexanikaPageAsync } from "@/pages/MexanikaPage";
import { MexanikaMethodologyPageAsync } from "@/pages/MexanikaMethodologyPage";
import { MexanikaIndependentPageAsync } from "@/pages/MexanikaIndependentPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={appRoutes.home} element={<HomePageAsync />} />
        <Route path={appRoutes.mexanika} element={<MexanikaPageAsync />} />
        <Route
          path={appRoutes.mexanikaMethodology}
          element={<MexanikaMethodologyPageAsync />}
        />
        <Route
          path={appRoutes.mexanikaIndependent}
          element={<MexanikaIndependentPageAsync />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
