import React, { useState } from "react";
import { useDataCity } from "../../context/context";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  Form,
  ContainerSelect,
  P,
  Textarea,
  GreyArrowLeft,
  GreyArrowRight,
  PinkArrowLeft,
  PinkArrowRight,
  FlexContainer,
  Select,
} from "../../styles/global";
import { saveAvis } from "../../service/api";
import information from "./information.json";
import commentaire from "./commentaire.json";

export default function Avis({ city, avisRef }) {
  const { setDisplay, setResponse } = useDataCity();
  const { handleSubmit, register } = useForm({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCommentaire, setCurrentIndexCommentaire] = useState(0);

  const onSubmit = (data) => {
    console.log(data, "????");
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
      CommentaireNegative: (data["CommentaireNegative"] =
        data["Commentaire negative"]),
      CommentairePositive: (data["CommentairePositive"] =
        data["Commentaire positive"]),
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
        <FlexContainer>
          {currentIndex > 0 ? (
            <PinkArrowLeft onClick={() => setCurrentIndex(currentIndex - 1)}>
              &lt;
            </PinkArrowLeft>
          ) : (
            <GreyArrowLeft> &lt;</GreyArrowLeft>
          )}

          <Card>
            <P color="#3197d4">{information?.[currentIndex]?.titre}</P>
            <ContainerSelect>
              <P textAlign="justify" fontSize="15px">
                {information?.[currentIndex]?.info}
              </P>
            </ContainerSelect>
            <Select
              name={information?.[currentIndex].titre}
              {...register(information?.[currentIndex].titre)}
            >
              {information[currentIndex].value.map((f) => (
                <option value={f}>{f}</option>
              ))}
            </Select>
          </Card>
          {currentIndex !== information?.length - 1 ? (
            <PinkArrowRight onClick={() => setCurrentIndex(currentIndex + 1)}>
              &gt;
            </PinkArrowRight>
          ) : (
            <GreyArrowRight> &gt; </GreyArrowRight>
          )}
        </FlexContainer>
        <FlexContainer>
          {currentIndexCommentaire > 0 ? (
            <PinkArrowLeft
              onClick={() =>
                setCurrentIndexCommentaire(currentIndexCommentaire - 1)
              }
            >
              &lt;
            </PinkArrowLeft>
          ) : (
            <GreyArrowLeft> &lt;</GreyArrowLeft>
          )}
          <Card padding="0px 5px ">
            <P color="#3197d4">
              {commentaire?.[currentIndexCommentaire].titre}
            </P>
            <Textarea
              placeholder="Noter ici votre commentaire"
              {...register(commentaire?.[currentIndexCommentaire].titre)}
            ></Textarea>
          </Card>
          {currentIndexCommentaire !== commentaire?.length - 1 ? (
            <PinkArrowRight
              onClick={() =>
                setCurrentIndexCommentaire(currentIndexCommentaire + 1)
              }
            >
              &gt;
            </PinkArrowRight>
          ) : (
            <GreyArrowRight> &gt; </GreyArrowRight>
          )}
        </FlexContainer>

        {commentaire?.length > 0 ? (
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
