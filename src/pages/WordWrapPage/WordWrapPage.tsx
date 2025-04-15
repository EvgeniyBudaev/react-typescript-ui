import isNil from "lodash/isNil";
import { useEffect, useRef } from "react";
import { wordWrap } from "word-wrap-canvas";
import { Title } from "components";
import "./WordWrapPage.scss";

export const WordWrapPage = () => {
  const text =
    "Lorem Ipsum is simply dummy text 63cd5262396af745513c70f0e73b7e7b4c8e2cae37a55c1ded99acde2ebba761 of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const hash = "63cd5262396af745513c70f0e73b7e7b4c8e2cae37a55c1ded99acde2ebba761";
  const maxWidth = 200;
  const fontSize = 14;
  const fontFamily = "Roboto";
  const lineHeight = fontSize * 1.2; // Line spacing (1.2 of font size)

  const lineListText = wordWrap({
    text,
    maxWidth,
    fontConfig: { fontSize, fontFamily },
  });

  const lineListTextAdaptive = wordWrap({
    text,
    maxWidth,
    fontConfig: { fontSize, fontFamily },
    isAdaptiveWidth: true,
  });

  const lineListHash = wordWrap({
    text: hash,
    maxWidth,
    fontConfig: { fontSize, fontFamily },
  });

  const lineListHashAdaptive = wordWrap({
    text: hash,
    maxWidth,
    fontConfig: { fontSize, fontFamily },
    isAdaptiveWidth: true,
  });

  const canvasTextBeforeRef = useRef<HTMLCanvasElement>(null);
  const canvasTextAfterRef = useRef<HTMLCanvasElement>(null);

  const canvasTextAdaptiveBeforeRef = useRef<HTMLCanvasElement>(null);
  const canvasTextAdaptiveAfterRef = useRef<HTMLCanvasElement>(null);

  const canvasHashBeforeRef = useRef<HTMLCanvasElement>(null);
  const canvasHashAfterRef = useRef<HTMLCanvasElement>(null);

  const canvasHashAdaptiveBeforeRef = useRef<HTMLCanvasElement>(null);
  const canvasHashAdaptiveAfterRef = useRef<HTMLCanvasElement>(null);

  // setCanvasTextStyle - setting up the text style
  const setCanvasTextStyle = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = "#000";
    ctx.font = `normal ${fontSize}px ${fontFamily}`;
    ctx.textBaseline = "top"; // Align top
  };

  const setCanvasSettingsText = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    // Calculate canvas height based on number of lines
    canvas.height = lineListText.length * lineHeight;
    setCanvasTextStyle(ctx);
  };

  const setCanvasSettingsTextAdaptive = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    // Calculate canvas height based on number of lines
    canvas.height = lineListTextAdaptive.length * lineHeight;
    setCanvasTextStyle(ctx);
  };

  const setCanvasSettingsHash = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    // Calculate canvas height based on number of lines
    canvas.height = lineListHash.length * lineHeight;
    setCanvasTextStyle(ctx);
  };

  const setCanvasSettingsHashAdaptive = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
  ) => {
    // Calculate canvas height based on number of lines
    canvas.height = lineListHashAdaptive.length * lineHeight;
    setCanvasTextStyle(ctx);
  };

  useEffect(() => {
    if (!isNil(canvasTextBeforeRef?.current)) {
      const canvas = canvasTextBeforeRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsText(canvas, ctx);
      // Draw each line of text
      ctx.fillText(text, 0, 0);
    }
    if (!isNil(canvasTextAfterRef?.current)) {
      const canvas = canvasTextAfterRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsText(canvas, ctx);
      // Draw each line of text
      lineListText.forEach((line, index) => {
        const yPosition = index * lineHeight;
        ctx.fillText(line, 0, yPosition);
      });
    }
    if (!isNil(canvasTextAdaptiveBeforeRef?.current)) {
      const canvas = canvasTextAdaptiveBeforeRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsTextAdaptive(canvas, ctx);
      // Draw each line of text
      ctx.fillText(text, 0, 0);
    }
    if (!isNil(canvasTextAdaptiveAfterRef?.current)) {
      const canvas = canvasTextAdaptiveAfterRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsTextAdaptive(canvas, ctx);
      // Draw each line of text
      lineListTextAdaptive.forEach((line, index) => {
        const yPosition = index * lineHeight;
        ctx.fillText(line, 0, yPosition);
      });
    }
    if (!isNil(canvasHashBeforeRef?.current)) {
      const canvas = canvasHashBeforeRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsHash(canvas, ctx);
      // Draw each line of text
      ctx.fillText(hash, 0, 0);
    }
    if (!isNil(canvasHashAfterRef?.current)) {
      const canvas = canvasHashAfterRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsHash(canvas, ctx);
      // Draw each line of text
      lineListHash.forEach((line, index) => {
        const yPosition = index * lineHeight;
        ctx.fillText(line, 0, yPosition);
      });
    }
    if (!isNil(canvasHashAdaptiveBeforeRef?.current)) {
      const canvas = canvasHashAdaptiveBeforeRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsHashAdaptive(canvas, ctx);
      // Draw each line of text
      ctx.fillText(hash, 0, 0);
    }
    if (!isNil(canvasHashAdaptiveAfterRef?.current)) {
      const canvas = canvasHashAdaptiveAfterRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      setCanvasSettingsHashAdaptive(canvas, ctx);
      // Draw each line of text
      lineListHashAdaptive.forEach((line, index) => {
        const yPosition = index * lineHeight;
        ctx.fillText(line, 0, yPosition);
      });
    }
  }, [
    canvasTextAfterRef?.current,
    canvasTextBeforeRef?.current,
    canvasTextAdaptiveAfterRef?.current,
    canvasTextAdaptiveBeforeRef?.current,
    canvasHashAfterRef?.current,
    canvasHashBeforeRef?.current,
    canvasHashAdaptiveAfterRef?.current,
    canvasHashAdaptiveBeforeRef?.current,
    fontSize,
    fontFamily,
    lineHeight,
  ]);

  return (
    <section className="WordWrapPage">
      <Title>Word wrap text</Title>
      <div className="WordWrapPage-Inner">
        <div className="WordWrapPage-Container">
          <div className="WordWrapPage-Text">{text}</div>
        </div>
        <div className="WordWrapPage-Container">
          <div className="WordWrapPage-Text">
            {lineListText.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        </div>
      </div>

      <Title>Word wrap hash</Title>
      <div className="WordWrapPage-Inner">
        <div className="WordWrapPage-Container">
          <div className="WordWrapPage-Text">{hash}</div>
        </div>
        <div className="WordWrapPage-Container">
          <div className="WordWrapPage-Text">
            {lineListHash.map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </div>
        </div>
      </div>

      <Title>Canvas word wrap simple text</Title>
      <div className="WordWrapPage-Inner">
        <canvas ref={canvasTextBeforeRef} width={maxWidth} className="WordWrapPage-Canvas" />
        <canvas ref={canvasTextAfterRef} width={maxWidth} className="WordWrapPage-Canvas" />
      </div>

      <Title>Canvas word wrap simple text with adaptive width</Title>
      <div className="WordWrapPage-Inner">
        <canvas
          ref={canvasTextAdaptiveBeforeRef}
          width={maxWidth}
          className="WordWrapPage-Canvas"
        />
        <canvas ref={canvasTextAdaptiveAfterRef} width={maxWidth} className="WordWrapPage-Canvas" />
      </div>

      <Title>Canvas word wrap hash</Title>
      <div className="WordWrapPage-Inner">
        <canvas ref={canvasHashBeforeRef} width={maxWidth} className="WordWrapPage-Canvas" />
        <canvas ref={canvasHashAfterRef} width={maxWidth} className="WordWrapPage-Canvas" />
      </div>

      <Title>Canvas word wrap hash with adaptive width</Title>
      <div className="WordWrapPage-Inner">
        <canvas
          ref={canvasHashAdaptiveBeforeRef}
          width={maxWidth}
          className="WordWrapPage-Canvas"
        />
        <canvas ref={canvasHashAdaptiveAfterRef} width={maxWidth} className="WordWrapPage-Canvas" />
      </div>
    </section>
  );
};
