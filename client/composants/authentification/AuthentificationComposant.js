import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { createUser } from "../../service/api";
import {
  H1,
  FormAuthentification,
  Button,
  Input,
  Perror,
} from "../../styles/global";

const schema = yup.object().shape({
  pseudo: yup.string().required("Le pseudo est requise"),
  password: yup.string().required("Le mots de passe est requise"),
});

export default function AuthentificationComposant() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const redirection (response) => {
  //   if(response) return
  // }

  const onSubmit = async (data) => {
    const response = await createUser(data);
    console.log(response);
  };

  return (
    <>
      <H1 color="black">Bienvenue</H1>
      <FormAuthentification onSubmit={handleSubmit(onSubmit)}>
        <label>Pseudo</label>
        <Input
          {...register("pseudo", {
            required: "Le pseudo est requise",
          })}
          placeholder="Un pseudo stylé"
        />
        <ErrorMessage errors={errors} name="pseudo" as={Perror} />

        <label>Mots de passe</label>
        <Input
          {...register("password", {
            required: "Le mots de passe est requise",
          })}
          placeholder="Mots de passe"
        />
        <ErrorMessage errors={errors} name="password" as={Perror} />
        <Button cursor="pointer " type="submit">
          Continuer
        </Button>
      </FormAuthentification>
    </>
  );
}
