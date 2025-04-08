import isNil from "lodash/isNil";
import { type FC, useEffect, useRef, useState } from "react";
import { Title } from "components";
import { Button, Spinner } from "uikit";
import { resize } from "./resize";

export const CanvasImageResizePage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const canvasOriginalRef = useRef<HTMLCanvasElement>(null);
  const canvasResizedRef = useRef<HTMLCanvasElement>(null);
  const widthOriginal = 500;
  const heightOriginal = 500;
  const widthResized = 250;
  const heightResized = 250;

  useEffect(() => {
    if (!isNil(canvasOriginalRef?.current)) {
      const canvasOriginal = canvasOriginalRef.current;
      const ctxOriginal = canvasOriginal.getContext("2d");
      const imgOriginal = new Image();
      imgOriginal.src = "/images/canvasOriginal.jpg";
      imgOriginal.onload = function () {
        if (!ctxOriginal) return null;
        ctxOriginal.drawImage(imgOriginal, 0, 0, widthOriginal, heightOriginal);
      };
    }
  }, [canvasOriginalRef?.current]);

  const onPreview = () => {
    if (!isNil(canvasResizedRef?.current)) {
      const canvasResized = canvasResizedRef.current;
      canvasResized.width = widthOriginal;
      canvasResized.height = heightOriginal;
      const ctxResized = canvasResized.getContext("2d");
      const imgResized = new Image();
      imgResized.src = "/images/canvasOriginal.jpg";
      imgResized.onload = function () {
        if (!ctxResized) return null;
        ctxResized.drawImage(imgResized, 0, 0, widthOriginal, heightOriginal);
        console.log(
          "BEFORE canvas.width, canvas.height",
          canvasResized.width,
          canvasResized.height,
        );
        setIsLoading(true);
        resize({
          canvas: canvasResized,
          options: {
            width: widthResized,
            height: heightResized,
          },
        });
        setIsLoading(false);
        console.log("AFTER canvas.width, canvas.height", canvasResized.width, canvasResized.height);
      };
    }
  };

  return (
    <section>
      <Title>Canvas image before resizing</Title>
      <div>
        <canvas
          ref={canvasOriginalRef}
          id="canvasOriginal"
          width={widthOriginal}
          height={heightOriginal}
        />
      </div>
      <Title>Canvas image after resizing</Title>
      <div>
        <div>
          <Button type="button" onClick={onPreview}>
            Preview
          </Button>
        </div>
        <div>
          {isLoading && <Spinner />}
          {!isLoading && (
            <canvas
              ref={canvasResizedRef}
              id="canvasResized"
              width={widthOriginal}
              height={heightOriginal}
            />
          )}
        </div>
      </div>
    </section>
  );
};
