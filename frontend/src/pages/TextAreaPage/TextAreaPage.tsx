import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FormField } from "ui-kit";

export interface IForm {
  comment?: string;
}

export const TextAreaPage: React.FC = () => {
  const [isFocused, setIsFocused] = useState({
    comment: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const watchAllFields = watch();

  const onSubmit = (data: IForm) => {
    console.log("TextArea data: ", data);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused({ ...isFocused, [event.target.name]: true });
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (watchAllFields[event.target.name] !== "") {
      setIsFocused({ ...isFocused, [event.target.name]: true });
    } else {
      setIsFocused({ ...isFocused, [event.target.name]: false });
    }
  };

  return (
    <section className="FormPage">
      <div className="FormPageContent">
        <h1 className="FormPageContentTitle">TextArea</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="FormPage-FormFieldGroup">
            <FormField
              label="Comment"
              name="comment"
              type="textarea"
              register={register}
              error={errors.comment && errors.comment.message}
              isFocused={isFocused.comment}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          </div>
          <Button className="FormPage-Button" type="submit">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};
