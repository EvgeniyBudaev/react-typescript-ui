import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import type { z } from "zod";

import { Form } from "components/Form";
import { useInitForm } from "components/Form/hooks/useInitForm";
import { Title } from "components/Title";
import { Button, ETypographyVariant, Otp, Typography } from "uikit";

import { EFormFields } from "./enums";
import { otpSchema } from "./schemas";
import "./OtpPage.scss";

type TOtpFormValues = z.infer<typeof otpSchema>;

export const OtpPage: FC = () => {
  const CODE_VALID = "1111";

  const form = useInitForm<TOtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      [EFormFields.Code]: "",
    },
  });

  const handleFormSubmit = useCallback((data: TOtpFormValues) => {
    if (data.code !== CODE_VALID) {
      return form.methods.setError(EFormFields.Code, { message: "Invalid code" });
    }
  }, []);

  const handleOtpChange = useCallback(
    (value: string) => {
      form.methods.setValue(EFormFields.Code, value);
      if (value.length === 4) {
        form.methods.handleSubmit(handleFormSubmit)();
      }
    },
    [form, handleFormSubmit],
  );

  const handleReset = useCallback(() => {
    form.methods.setValue(EFormFields.Code, "");
    form.methods.clearErrors(EFormFields.Code);
  }, [form.methods]);

  const codeError = form.methods.formState.errors[EFormFields.Code];
  const codeValue = form.methods.watch(EFormFields.Code);

  return (
    <section className="OtpPage">
      <Title>PassCode</Title>
      <div className="OtpPage-Wrapper">
        <div className="OtpPage-ContentContainer">
          <div className="OtpPage-Title">
            <Typography variant={ETypographyVariant.TextH2Bold}>Hello!</Typography>
            <div className="OtpPage-SubTitle">
              <Typography variant={ETypographyVariant.TextB2Regular}>
                Enter the access code
              </Typography>
            </div>
          </div>
          <Form form={form} method="post">
            <div className="OtpPage-FormBody">
              <Otp
                countInputs={4}
                hasError={!!codeError}
                name={EFormFields.Code}
                onChange={handleOtpChange}
                value={codeValue}
              />
              {!!codeError && (
                <div className="OtpPage-ErrorMessage">
                  <Typography variant={ETypographyVariant.TextB2Regular}>
                    Incorrect code, please enter again
                  </Typography>
                </div>
              )}
            </div>
            {!!codeError && (
              <div className="OtpPage-ResetButtonBox">
                <Button className="OtpPage-ResetButton" onClick={handleReset}>
                  <Typography variant={ETypographyVariant.TextB2Bold}>Resend</Typography>
                </Button>
              </div>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
};
