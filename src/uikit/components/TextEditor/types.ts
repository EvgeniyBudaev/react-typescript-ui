export type TTextEditorTextStyle = "H1" | "H2" | "OL" | "UL" | "BOLD" | "UNDERLINE" | "HIGHLIGHT";

type TClasses = {
  textEditor?: string;
};

export type TTextEditorProps = {
  classes?: TClasses;
  htmlText?: string;
  isInvalid?: boolean;
  onChangeHTMLText?: (value: string) => void;
  placeholder?: string;
  title?: string;
};
