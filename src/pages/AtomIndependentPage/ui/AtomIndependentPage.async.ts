import { lazy } from "react";

export const AtomIndependentPageAsync = lazy(
  () => import("./AtomIndependentPage"),
);
