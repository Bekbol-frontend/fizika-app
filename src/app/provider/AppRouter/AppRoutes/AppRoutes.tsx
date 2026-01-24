import { Route, Routes } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import { HomePageAsync } from "@/pages/HomePage";
import { appRoutes } from "@/shared/config/routeConfig";
import { MexanikaPageAsync } from "@/pages/MexanikaPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={appRoutes.home} element={<HomePageAsync />} />
        <Route path={appRoutes.mexanika} element={<MexanikaPageAsync />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
