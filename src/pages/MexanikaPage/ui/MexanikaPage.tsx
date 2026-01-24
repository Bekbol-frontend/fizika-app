import { appRoutes } from "@/shared/config/routeConfig";
import { CardBlock } from "@/shared/ui/CardBlock";

function MexanikaPage() {
  return (
    <CardBlock
      mainTitle="Mexanika"
      titleOne="Masala echish metodikasi"
      titleTwo="Mustaqil echish uchin masalalar"
      pageOne={appRoutes.mexanikaMethodology}
      pageTwo="/aaa"
    />
  );
}

export default MexanikaPage;
