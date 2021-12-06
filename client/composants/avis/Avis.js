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
import { createRating } from "../../service/api";
import information from "./information.json";
import commentaire from "./commentaire.json";

export default function Avis({ prevStep }) {
  const { setResponse, selectCityInfoWindows, SetselectCityInfoWindows } =
    useDataCity();

  const { handleSubmit, register, watch } = useForm({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCommentaire, setCurrentIndexCommentaire] = useState(0);

  const qualiter = watch(information[8].titre);
  const remarkPositive = watch(commentaire[0].titre);
  const remarkNegative = watch(commentaire[1].titre);
  const onSubmit = async (data) => {
    const responseToFront = await createRating({
      nameCity: selectCityInfoWindows?.nom || null,
      nameDepartement: selectCityInfoWindows?.departement.nom || null,
      environement: data?.Environement || null,
      transports: data.Transports || null,
      security: data.Securite || null,
      sante: data.Sante || null,
      sportandleisure:
        (data["Sportetloisir"] = data["Sport et Loisir"]) || null,
      culture: data.Culture || null,
      commerce: data.Commerce || null,
      enseignement: data.Environement || null,
      transport: data.Transport || null,
      remarkPositive: remarkPositive || null,
      remarkNegative: remarkNegative || null,
      quality: qualiter || null,
    });

    console.log(responseToFront, " RETOUR DU BACK");

    setResponse(responseToFront.save.message);
    prevStep();
  };

  return (
    <>
      <GreyArrowLeft onClick={() => prevStep()}> &lt; </GreyArrowLeft>
      <P>Vous allez noté la ville : {selectCityInfoWindows?.nom} </P>
      <P>
        Qui est dans le département : {selectCityInfoWindows?.departement.nom}
      </P>

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
            <P>{[currentIndex][0] + 1} / 9</P>
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
        {qualiter === undefined ? null : (
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
              <P>{[currentIndexCommentaire][0] + 1} / 2</P>
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
                onClick={() => {
                  setCurrentIndexCommentaire(currentIndexCommentaire + 1);
                }}
              >
                &gt;
              </PinkArrowRight>
            ) : (
              <GreyArrowRight> &gt; </GreyArrowRight>
            )}
          </FlexContainer>
        )}
        {remarkPositive === undefined && remarkNegative === undefined ? null : (
          <Button cursor="pointer " type="submit">
            Enregistrer
          </Button>
        )}
        // mettre en disable et{" "}
        {remarkPositive && remarkNegative && (
          <Button cursor="pointer " type="submit">
            Enregistrer
          </Button>
        )}
      </Form>
    </>
  );
}
