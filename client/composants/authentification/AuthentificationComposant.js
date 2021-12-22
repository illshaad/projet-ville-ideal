import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as yup from "yup";
import { createUser } from "../../service/api";
import { useDataCity } from "../../context/context";
import AuthSocial from "./AuthSocial";
import {
  H1,
  FormAuthentification,
  Button,
  Input,
  Perror,
} from "../../styles/global";

const schema = yup.object().shape({
  pseudo: yup
    .string()
    .required("Le pseudo est requis")
    .min(
      5,
      "Le mots de pseudo est trop court - il doit comporter au moins 5 caractères"
    ),
  email: yup.string().required("L'email est requis"),
  password: yup
    .string()
    .required("Le mots de passe est requis")
    .min(
      5,
      "Le mots de passe est trop court - il doit comporter au moins 5 caractères"
    ),
});

export default function AuthentificationComposant({ textButton, textWelcome }) {
  const { setResponse } = useDataCity();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await createUser(data);
    setResponse(response);
  };

  return (
    <>
      <H1 color="black">
        Bienvenue veuillez <br /> vous {textWelcome}
      </H1>
      <FormAuthentification onSubmit={handleSubmit(onSubmit)}>
        <label>Votre Pseudo </label>
        <Input {...register("pseudo")} placeholder="Un pseudo sympa" />
        <ErrorMessage errors={errors} name="pseudo" as={Perror} />
        <label>E-mail</label>
        <Input {...register("email")} placeholder="E-mail" />
        <ErrorMessage errors={errors} name="email" as={Perror} />
        <label>Mots de passe</label>
        <Input
          {...register("password")}
          placeholder="Mots de passe"
          type="password"
        />
        <ErrorMessage errors={errors} name="password" as={Perror} />
        <Button cursor="pointer " type="submit">
          {textButton}
        </Button>
        <AuthSocial />
      </FormAuthentification>
    </>
  );
}
