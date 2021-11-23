import { Card } from "../../styles/global";
import { useConsentCookie } from "../../context/context";
import { useForm } from "react-hook-form";
import { Button, Form, FlexContainer } from "../../styles/global";

export default function Avis({ consentCookie }) {
  const { setDisplay } = useConsentCookie();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log("tototoototo");
    console.log(data);
  };

  const closeComponentAvis = () => {
    setDisplay(false);
  };

  const information = [
    {
      titre: "Qualiter de l'environement",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "Les transports",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "La sécurité",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "La santé",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "Les sports et loisirs",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "La culture",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "Les commerces ",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "Qualiter de l'environement",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "La qualiter de vie",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "Note global",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];
  return (
    <Card>
      <h2>Avis</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexContainer>
          {information.map((e) => (
            <select {...register(e.titre)}>
              <label>{e.titre}</label>
              <option value={e.value}>{e.value}</option>
            </select>
          ))}
        </FlexContainer>
        {/* <FlexContainer>
          <label>Question n°2</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </FlexContainer>
        <FlexContainer>
          <label>Question n°3</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </FlexContainer>
        <FlexContainer>
          <label>Question n°4</label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </FlexContainer> */}
        <Button cursor="pointer " type="submit">
          Enregistrer
        </Button>
      </Form>
      <Button cursor="pointer" onClick={closeComponentAvis}>
        Close
      </Button>
    </Card>
  );
}
