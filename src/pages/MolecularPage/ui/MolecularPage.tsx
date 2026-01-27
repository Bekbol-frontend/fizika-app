import { appRoutes } from "@/shared/config/routeConfig";
import { CardBlock } from "@/shared/ui/CardBlock";

function MolecularPage() {
  return (
    <CardBlock
      mainTitle="Malekulyar fizika"
      titleOne="Masala yechish metodikasi"
      titleTwo="Mustaqil yechish uchin masalalar"
      pageOne={appRoutes.molekularMethodology}
      pageTwo={appRoutes.molekularIndependent}
    />
  );
}

export default MolecularPage;
