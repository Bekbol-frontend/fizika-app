import { Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { appRoutes } from "@/shared/config/routeConfig";
import { MexanikaPageAsync } from "@/pages/MexanikaPage";
import { MexanikaMethodologyPageAsync } from "@/pages/MexanikaMethodologyPage";
import { MexanikaIndependentPageAsync } from "@/pages/MexanikaIndependentPage";
import { MolecularPageAsync } from "@/pages/MolecularPage";
import { MolekularMethodologyPageAsync } from "@/pages/MolekularMethodologyPage";
import { MolekularIndependentPageAsync } from "@/pages/MolekularIndependentPage";

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
        <Route path={appRoutes.molecular} element={<MolecularPageAsync />} />
        <Route
          path={appRoutes.molekularMethodology}
          element={<MolekularMethodologyPageAsync />}
        />
        <Route
          path={appRoutes.molekularIndependent}
          element={<MolekularIndependentPageAsync />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
