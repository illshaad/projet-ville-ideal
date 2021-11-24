import { useConsentCookie } from "../../context/context";
import { useForm } from "react-hook-form";
import { Button, Form, FlexContainer, Card } from "../../styles/global";
import { MenuItem } from "@material-ui/core";
import { Select } from "../../ui/Select";

export default function Avis({ consentCookie }) {
  const { setDisplay } = useConsentCookie();

  const { handleSubmit, register } = useForm({});

  const onSubmit = (data) => {
    console.log("tototoototo");
    console.log(data);
  };

  const closeComponentAvis = () => {
    setDisplay(false);
  };

  const information = [
    {
      titre: "QualiterEnvironement",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      titre: "Transports",
      value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  ];

  return (
    <Card>
      <h2>Avis</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexContainer>
          {information.map(
            (e, index) =>
              e && (
                <>
                  <p>{e.titre}</p>
                  <select name={e.titre} {...register(e.titre)}>
                    {information[index].value.map((f) => (
                      <option value={f}>{f}</option>
                    ))}
                  </select>
                </>
              )
          )}
        </FlexContainer>

        <button cursor="pointer " type="submit">
          Enregistrer
        </button>
      </Form>
      <Button cursor="pointer" onClick={closeComponentAvis}>
        Close
      </Button>
    </Card>
  );
}
