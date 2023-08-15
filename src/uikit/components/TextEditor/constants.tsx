import type { TTextEditorTextStyle } from "./types";

export const TEXT_EDITOR_STYLE_TO_HTML = (style: TTextEditorTextStyle) => {
  switch (style) {
    case "H1":
      return <h1 />;
    case "H2":
      return <h2 />;
    case "OL":
      return <ol />;
    case "UL":
      return <ul />;
    case "BOLD":
      return <strong />;
    case "UNDERLINE":
      return <u />;
    case "HIGHLIGHT":
      return <span className="highlight" />;
    default:
      return null;
  }
};

export const TEXT_EDITOR_CUSTOM_STYLES = {
  HIGHLIGHT: {
    backgroundColor: "#8fcbe5",
    color: "#fff",
  },
};

export const TEXT_EDITOR_BLOCK_TYPES = [
  { label: "H2", style: "header-two", icon: "H2", size: "extra-small" },
  { label: "OL", style: "ordered-list-item", icon: "OL", size: "medium" },
  { label: "UL", style: "unordered-list-item", icon: "UL", size: "medium" },
];

export const TEXT_EDITOR_INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: "Bold", size: "extra-small" },
  { label: "Underline", style: "UNDERLINE", icon: "Underline", size: "extra-small" },
  { label: "Highlight", style: "HIGHLIGHT", icon: "Highlight", size: "small" },
];
