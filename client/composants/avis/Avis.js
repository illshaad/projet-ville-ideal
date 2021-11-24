import { useDataCity } from "../../context/context";
import { useForm } from "react-hook-form";
import { Button, Card, Form, ContainerSelect, P } from "../../styles/global";
import information from "./information.json";
export default function Avis({ city, avisRef }) {
  const { setDisplay } = useDataCity();

  const { handleSubmit, register } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  const closeComponentAvis = () => {
    setDisplay(false);
  };

  return (
    <div ref={avisRef}>
      <P>Vous allez noté la ville : {city.nom} </P>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {information.map((e, index) => (
          <ContainerSelect>
            <Card>
              <P color="#3197d4">{e.titre}</P>
              <ContainerSelect>
                <P textAlign="justify" fontSize="15px">
                  {e.info}
                </P>
              </ContainerSelect>
              <select name={e.titre} {...register(e.titre)}>
                {information[index].value.map((f) => (
                  <option value={f}>{f}</option>
                ))}
              </select>
            </Card>
          </ContainerSelect>
        ))}
      </Form>

      <Button cursor="pointer " type="submit">
        Enregistrer
      </Button>
      <Button cursor="pointer" onClick={closeComponentAvis}>
        Close
      </Button>
    </div>
  );
}
