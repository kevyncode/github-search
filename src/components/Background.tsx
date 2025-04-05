import React from "react";
import Image from "next/image";
import Vector1 from "@/assets/Ellipse 1vetor1.png";
import Vector2 from "@/assets/Ellipse 2vetor2.png";
import Vector3 from "@/assets/Camada_1sla.png";

const BackgroundImages: React.FC = () => {
  return (
    <div className="fixed">
      <div className="fixed top-0 left-450 z-0">
        <Image src={Vector1} alt="Imagem 2" width={888} height={888} />
      </div>
      <div className="fixed bottom-190 left-90 z-0">
        <Image src={Vector3} alt="Imagem 3" width={239} height={235} />
      </div>
      <div className="fixed top-50 right-400 z-0">
        <Image src={Vector2} alt="Imagem 1" width={674} height={674} />
      </div>
    </div>
  );
};

export default BackgroundImages;
