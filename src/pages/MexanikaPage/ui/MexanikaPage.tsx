import { appRoutes } from "@/shared/config/routeConfig";
import { CardBlock } from "@/shared/ui/CardBlock";

function MexanikaPage() {
  return (
    <CardBlock
      mainTitle="Mexanika"
      titleOne="Masala yechish metodikasi"
      titleTwo="Mustaqil yechish uchin masalalar"
      pageOne={appRoutes.mexanikaMethodology}
      pageTwo={appRoutes.mexanikaIndependent}
    />
  );
}

export default MexanikaPage;
