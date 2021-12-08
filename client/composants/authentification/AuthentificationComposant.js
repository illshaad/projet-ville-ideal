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
  email: yup.string().required("L'email est requise"),
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
    console.log(data)
    const response = await createUser(data);
    console.log(response);
  };

  return (
    <>
      <H1 color="black">Bienvenue</H1>
      <FormAuthentification onSubmit={handleSubmit(onSubmit)}>
        <label>E-mail</label>
        <Input
          {...register("email", {
            required: "L'email est requise",
          })}
          placeholder="E-mail"
        />
        <ErrorMessage errors={errors} name="email" as={Perror} />

        <label>Mots de passe</label>
        <Input
          {...register("password", {
            required: "Le mots de passe est requise",
          })}
          placeholder="Mots de passe"
          type='password'
        />
        <ErrorMessage errors={errors} name="password" as={Perror} />
        <Button cursor="pointer " type="submit">
          Continuer
        </Button>
      </FormAuthentification>
    </>
  );
}
