import React from "react";
import { useDataCity } from "../../context/context";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  Form,
  ContainerSelect,
  P,
  Textarea,
  Select,
} from "../../styles/global";
import { saveAvis } from "../../service/api";
import information from "./information.json";

export default function Avis({ city, avisRef }) {
  const { setDisplay, setResponse } = useDataCity();
  const { handleSubmit, register, watch } = useForm({});
  const text = watch("Commentaire");

  const onSubmit = (data) => {
    saveAvis({
      Environement: data.Environement,
      Transports: data.Transports,
      Securite: data.Securite,
      Sante: data.Sante,
      SportetLoisir: (data["Sportetloisir"] = data["Sport et Loisir"]),
      Culture: data.Culture,
      Commerce: data.Commerce,
      Enseignement: data.Environement,
      Transport: data.Transport,
      Commentaire: data.Commentaire,
      QualitedeVie: (data["QualitedeVie"] = data["Qualiter de Vie"]),
    }).then((res) => {
      setResponse(res.save);
      setDisplay(false);
    });
  };

  const closeComponentAvis = () => {
    setDisplay(false);
  };

  return (
    <div ref={avisRef}>
      <P>Vous allez noté la ville : {city.nom} </P>
      <P>Qui est dans le département : {city.departement.nom}</P>

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
              <Select name={e.titre} {...register(e.titre)}>
                {information[index].value.map((f) => (
                  <option value={f}>{f}</option>
                ))}
              </Select>
            </Card>
          </ContainerSelect>
        ))}
        <Card padding="0px 5px ">
          <P color="#3197d4">Commentaire</P>
          <Textarea
            placeholder="Noter ici votre commentaire"
            {...register("Commentaire")}
          ></Textarea>
        </Card>
        {text?.length > 0 ? (
          <Button cursor="pointer " type="submit">
            Enregistrer
          </Button>
        ) : (
          <Button disabled>Enregistrer</Button>
        )}
        <Button cursor="pointer" onClick={closeComponentAvis}>
          Fermer
        </Button>
      </Form>
    </div>
  );
}
