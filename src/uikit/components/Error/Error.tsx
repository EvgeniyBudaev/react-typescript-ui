import { forwardRef, memo, useEffect, useState } from "react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { ETypographyVariant, FadeIn, Typography } from "uikit/index";
import { EErrorTheme } from "uikit/components/Error/enums";
import type { TErrorProps } from "uikit/components/Error/types";
import "./Error.scss";

const ErrorComponent = forwardRef<HTMLDivElement, TErrorProps>(
  (
    { dataTestId, id, errors = [], role = "alert", theme = EErrorTheme.Error }: TErrorProps,
    ref,
  ) => {
    const [length, setLength] = useState(0);

    useEffect(() => {
      if (length) {
        setLength(0);
        setTimeout(() => setLength(errors.length), 400);
      }
      setLength(errors.length);
    }, [errors.length, length]);

    return (
      <div className="ErrorUI">
        <div data-testid={dataTestId} id={id} ref={ref}>
          {!!length && (
            <ul
              className={clsx("ErrorUI-content", {
                "ErrorUI-content__list-disc": length > 1,
                "ErrorUI-content__list-none": length === 1,
              })}
            >
              {errors.map((error) => (
                <li key={`error-item-${error.id ?? uuidv4()}`}>
                  <FadeIn>
                    <Typography variant={ETypographyVariant.TextB3Regular}>
                      {error.title}
                    </Typography>
                  </FadeIn>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
);

ErrorComponent.displayName = "ErrorComponent";

export const Error = memo(ErrorComponent);
