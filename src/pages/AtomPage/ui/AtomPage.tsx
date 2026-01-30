import { appRoutes } from "@/shared/config/routeConfig";
import { CardBlock } from "@/shared/ui/CardBlock";

function AtomPage() {
  return (
    <CardBlock
      mainTitle="Atom va yadro fizikasi"
      titleOne="Masala yechish metodikasi"
      titleTwo="Mustaqil yechish uchin masalalar"
      pageOne={appRoutes.atomAndNucleusMethodology}
      pageTwo={appRoutes.optikaIndependent}
    />
  );
}

export default AtomPage;
