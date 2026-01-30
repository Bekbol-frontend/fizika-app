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
import { ElectricityAndMagnetismPageAsync } from "@/pages/ElectricityAndMagnetismPage";
import { ElectricityMethodologyPageAsync } from "@/pages/ElectricityMethodologyPage";
import { ElectricityIndependentPageAsync } from "@/pages/ElectricityIndependentPage";
import { OptikaPageAsync } from "@/pages/OptikaPage";
import { OptikaMethodologyPageAsync } from "@/pages/OptikaMethodologyPage";
import { OptikaIndependentPageAsync } from "@/pages/OptikaIndependentPage";
import { AtomPageAsync } from "@/pages/AtomPage";
import { AtomMethodologyPageAsync } from "@/pages/AtomMethodologyPage";

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
        <Route
          path={appRoutes.electricityAndMagnetism}
          element={<ElectricityAndMagnetismPageAsync />}
        />
        <Route
          path={appRoutes.electricityAndMagnetismMethodology}
          element={<ElectricityMethodologyPageAsync />}
        />
        <Route
          path={appRoutes.electricityAndMagnetismIndependent}
          element={<ElectricityIndependentPageAsync />}
        />
        <Route path={appRoutes.optika} element={<OptikaPageAsync />} />
        <Route
          path={appRoutes.optikaMethodology}
          element={<OptikaMethodologyPageAsync />}
        />
        <Route
          path={appRoutes.optikaIndependent}
          element={<OptikaIndependentPageAsync />}
        />

        <Route path={appRoutes.atomAndNucleus} element={<AtomPageAsync />} />
        <Route
          path={appRoutes.atomAndNucleusMethodology}
          element={<AtomMethodologyPageAsync />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
