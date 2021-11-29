import React, { useRef } from "react";
import Maps from "../composants/map/Maps";
import Avis from "../composants/avis/Avis";
import { getDataIleDeFrance } from "../service/api";
import { useDataCity } from "../context/context";
import Modal from "../composants/modal/Modal";
import Search from "../composants/search/Search";

export default function Home({ dataIleDeFrance }) {
  const { city, display, response } = useDataCity();
  const avisRef = useRef(null);
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const executeScroll = () => scrollToRef(avisRef);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>PROJET PERSO</h1>
      <Search dataIleDeFrance={dataIleDeFrance} />
      <Maps dataIleDeFrance={dataIleDeFrance} executeScroll={executeScroll} />
      {response ? <Modal /> : null}
      {city && display && <Avis city={city} avisRef={avisRef} />}
    </div>
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
