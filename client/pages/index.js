import React, { useState } from "react";
import Maps from "../composants/map/Maps";
import { getDataIleDeFrance } from "../service/api";
import { useDataCity } from "../context/context";
import Hearder from "../composants/header/Hearder";
import Modal from "../composants/modal/Modal";
import Search from "../composants/search/Search";
import ViewAllRating from "../composants/menu/rating/viewAllRating";
import { CardHome, Menu, FlexContainerHome } from "../styles/global";
import Avis from "../composants/avis/Avis";

export default function Home({ dataIleDeFrance }) {
  const { response, selectCityInfoWindows } = useDataCity();
  const [step, setStep] = useState(0);

  // Si il y'a la donnée du back il faut afficher le composant ViewAllRating

  const nextStep = (_step, data) => {
    setStep(_step, data);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const stepComponent = [
    <ViewAllRating nextStep={nextStep} />,
    <Avis prevStep={prevStep} />,
  ];

  return (
    <>
      <CardHome>
        <Hearder />
        <FlexContainerHome>
          <Menu>
            <Search dataIleDeFrance={dataIleDeFrance} />
            {stepComponent[step]}
          </Menu>
          <Maps dataIleDeFrance={dataIleDeFrance} />
          {response ? <Modal /> : null}
        </FlexContainerHome>
      </CardHome>
    </>
  );
}

export async function getStaticProps() {
  const dataIleDeFrance = await getDataIleDeFrance();
  return {
    revalidate: 1,
    props: {
      dataIleDeFrance,
    },
  };
}
