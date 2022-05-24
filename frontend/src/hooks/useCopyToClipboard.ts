import { useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async text => {
    if (!navigator?.clipboard) {
      const textarea = document.createElement("textarea");
      textarea.textContent = text;
      textarea.style.position = "fixed";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopiedText(text);
        return true;
      } catch (error) {
        console.warn("Copy to clipboard failed.", error);
        setCopiedText(null);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed.", error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
}

export { useCopyToClipboard };
