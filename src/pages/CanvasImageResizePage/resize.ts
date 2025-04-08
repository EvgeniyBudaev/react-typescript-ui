type TResizeImageCanvasOptions = {
  contextType?: "2d"; // Canvas context type
  height?: number | null | undefined;
  width?: number | null | undefined;
  keepAspectRatio?: boolean; // Flag to maintain proportions
  imageSmoothingQuality?: "low" | "medium" | "high"; // Image smoothing quality
};

type TResizeImageCanvasProps = {
  canvas: HTMLCanvasElement;
  options?: TResizeImageCanvasOptions;
};

type TResizeImageCanvasResponse = {
  resizedCanvas: HTMLCanvasElement | null;
};

export function resize(props: TResizeImageCanvasProps): TResizeImageCanvasResponse {
  const { canvas, options } = props;
  const contextType = options?.contextType ?? "2d";

  // Поддерживаем как HTMLCanvasElement, так и OffscreenCanvas
  const isOffscreen = typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas;
  const isRegularCanvas = canvas instanceof HTMLCanvasElement;

  if (!isOffscreen && !isRegularCanvas) {
    return { resizedCanvas: null };
  }

  const canvasContext = canvas.getContext(contextType);
  if (!canvasContext) return { resizedCanvas: null };

  const width = options?.width;
  const height = options?.height;
  const keepAspectRatio = options?.keepAspectRatio ?? true;
  const imageSmoothingQuality = options?.imageSmoothingQuality ?? "high";
  const originalWidth = canvas.width;
  const originalHeight = canvas.height;
  const isWidth = !!width;
  const isHeight = !!height;
  let newWidth = width;
  let newHeight = height;

  // Calculate proportions
  if (keepAspectRatio) {
    const originalRatio = originalWidth / originalHeight;

    if (isWidth && !isHeight) {
      newHeight = width! / originalRatio;
    } else if (isHeight && !isWidth) {
      newWidth = height! * originalRatio;
    } else if (isWidth && isHeight) {
      const targetRatio = width! / height!;
      if (originalRatio > targetRatio) {
        newHeight = width! / originalRatio;
      } else {
        newWidth = height! * originalRatio;
      }
    }
  }

  // Если новые размеры не указаны, возвращаем исходный canvas
  if (!newWidth && !newHeight) {
    return { resizedCanvas: canvas };
  }

  // Создаем временный canvas для масштабирования
  const tempCanvas = isOffscreen
    ? new OffscreenCanvas(newWidth ?? originalWidth, newHeight ?? originalHeight)
    : document.createElement("canvas");

  tempCanvas.width = newWidth ?? originalWidth;
  tempCanvas.height = newHeight ?? originalHeight;

  const ctx = tempCanvas.getContext(contextType);
  if (!ctx) return { resizedCanvas: null };

  if ("imageSmoothingQuality" in ctx) {
    ctx.imageSmoothingQuality = imageSmoothingQuality;
  }

  // Копируем изображение с масштабированием
  if ("drawImage" in ctx) {
    ctx.drawImage(
      canvas,
      0,
      0,
      originalWidth,
      originalHeight,
      0,
      0,
      tempCanvas.width,
      tempCanvas.height,
    );
  }

  // Обновляем размеры исходного canvas
  canvas.width = tempCanvas.width;
  canvas.height = tempCanvas.height;

  // Копируем обратно в исходный canvas
  const destCtx = canvas.getContext(contextType);
  if (!destCtx) return { resizedCanvas: null };

  destCtx.drawImage(tempCanvas, 0, 0);

  return { resizedCanvas: canvas };
}
