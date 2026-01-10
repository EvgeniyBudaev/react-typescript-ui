import type { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "services/form/Input";
import { PhoneInputMask } from "services/form/PhoneInputMask";
import { Textarea } from "services/form/Textarea";
import { Button, ETypographyVariant, Typography } from "uikit";
import { EFormFields } from "./enums";
import { formSchema } from "./schemas";
import "./FormPage.scss";

export const FormPage: FC = () => {
  const resolver = zodResolver(formSchema);
  const methods = useForm({ resolver });

  const handleSubmit = (event) => {
    console.log("submit event: ", event);
  };

  return (
    <section className="FormPage">
      <div className="FormPage-Inner">
        <div className="FormPage-Content">
          <h2 className="FormPage-Title">
            <Typography variant={ETypographyVariant.TextH1Bold}>Form</Typography>
          </h2>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <div className="FormPage-FormFieldGroup">
                <Input label="Name" name={EFormFields.Name} type="text" />
                <Input label="Email" name={EFormFields.Email} type="text" />
                <PhoneInputMask label="Mobile phone" name={EFormFields.Phone} />
                <Input label="Password" name={EFormFields.Password} type="text" />
                <Input label="Password confirmation" name={EFormFields.RePassword} type="text" />
                <Textarea label="Comment" name={EFormFields.Comment} />
                {/*<FormErrors errors={methods.formState.errors} />*/}
              </div>
              <div className="FormPage-Control">
                <Button className="FormPage-Button" type="submit">
                  <Typography variant={ETypographyVariant.TextB3Regular}>Send</Typography>
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};
