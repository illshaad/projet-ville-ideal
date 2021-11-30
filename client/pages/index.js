import React from "react";
import Maps from "../composants/map/Maps";
import { getDataIleDeFrance } from "../service/api";
import { useDataCity } from "../context/context";
import Hearder from "../composants/header/Hearder";
import Modal from "../composants/modal/Modal";
import Search from "../composants/search/Search";
import { CardHome, Menu, FlexContainerHome } from "../styles/global";

export default function Home({ dataIleDeFrance }) {
  const { response } = useDataCity();

  return (
    <>
      <CardHome>
        <Hearder />
        <FlexContainerHome>
          <Menu>
            <Search dataIleDeFrance={dataIleDeFrance} />
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
