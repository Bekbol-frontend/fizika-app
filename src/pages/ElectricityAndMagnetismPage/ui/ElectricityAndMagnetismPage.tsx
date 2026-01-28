import { appRoutes } from "@/shared/config/routeConfig";
import { CardBlock } from "@/shared/ui/CardBlock";

function ElectricityAndMagnetismPage() {
  return (
    <CardBlock
      mainTitle="Elektr va magnetizm"
      titleOne="Masala yechish metodikasi"
      titleTwo="Mustaqil yechish uchin masalalar"
      pageOne={appRoutes.electricityAndMagnetismMethodology}
      pageTwo={appRoutes.electricityAndMagnetismIndependent}
    />
  );
}

export default ElectricityAndMagnetismPage;
