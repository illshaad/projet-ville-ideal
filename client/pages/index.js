import Maps from "../composants/map/Maps";
import Avis from "../composants/avis/Avis";
import { getDataIleDeFrance } from "../service/api";
import { useConsentCookie } from "../context/context";
import { FlexContainer } from "../styles/global";
export default function Home({ dataIleDeFrance }) {
  const { consentCookie } = useConsentCookie();
  const { display } = useConsentCookie();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>PROJET PERSO</h1>
      <FlexContainer>
        <Maps dataIleDeFrance={dataIleDeFrance} />
        {consentCookie && display && <Avis consentCookie={consentCookie} />}
      </FlexContainer>
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
