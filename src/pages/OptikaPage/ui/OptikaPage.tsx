import { appRoutes } from "@/shared/config/routeConfig";
import { CardBlock } from "@/shared/ui/CardBlock";

function OptikaPage() {
  return (
    <CardBlock
      mainTitle="Optika"
      titleOne="Masala yechish metodikasi"
      titleTwo="Mustaqil yechish uchin masalalar"
      pageOne={appRoutes.optikaMethodology}
      pageTwo={appRoutes.optikaIndependent}
    />
  );
}

export default OptikaPage;
