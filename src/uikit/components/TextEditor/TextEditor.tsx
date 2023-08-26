import clsx from "clsx";
import { Editor, EditorState, RichUtils } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";
import { memo, useCallback, useEffect, useState } from "react";
import type { FC } from "react";

import { BlockStyleControls } from "./BlockStyleControls";
import { TEXT_EDITOR_CUSTOM_STYLES, TEXT_EDITOR_STYLE_TO_HTML } from "./constants";
import { InlineStyleControls } from "./InlineStyleControls";
import type { TTextEditorTextStyle } from "./types";

import "draft-js/dist/Draft.css";
import "./TextEditor.scss";

type TClasses = {
  textEditor?: string;
};

type TProps = {
  classes?: TClasses;
  htmlText?: string;
  isInvalid?: boolean;
  onChangeHTMLText?: (value: string) => void;
  placeholder?: string;
  title?: string;
};

const TextEditorComponent: FC<TProps> = ({
  classes,
  htmlText,
  isInvalid = false,
  onChangeHTMLText,
  placeholder,
  title,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());

  let wrapperClassName = "TextEditor-Wrapper";
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType("") !== "unstyled") {
      wrapperClassName += " TextEditor-Wrapper__hidePlaceholder";
    }
  }

  const options = {
    styleToHTML: (style: string) => TEXT_EDITOR_STYLE_TO_HTML(style as TTextEditorTextStyle),
  };
  const convertMessageToHtml = convertToHTML(options);

  const convertHtmlToRaw = (html: string): EditorState => {
    const contentState = convertFromHTML({
      htmlToStyle: (nodeName, node, currentStyle) => {
        if (nodeName === "span" && node.className === "highlight") {
          return currentStyle.add("HIGHLIGHT");
        } else {
          return currentStyle;
        }
      },
    })(html);
    return EditorState.createWithContent(contentState);
  };

  useEffect(() => {
    htmlText && setEditorState(convertHtmlToRaw(htmlText));
  }, [htmlText]);

  const handleChangeBlur = () => {
    setFocused((prevState: boolean) => (prevState ? false : prevState));
  };

  const handleChangeFocus = () => {
    setFocused((prevState: boolean) => (prevState ? true : !prevState));
  };

  const handleChangeText = useCallback((value: EditorState) => {
    const currentSelection = value.getSelection();
    onChangeHTMLText?.(convertMessageToHtml(value.getCurrentContent()));
    const stateWithContentAndSelection = EditorState.forceSelection(value, currentSelection);
    setEditorState(stateWithContentAndSelection);
  }, []);

  const handleKeyCommand = useCallback(
    (command, editorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        setEditorState(newState);
        return "handled";
      }
      return "not-handled";
    },
    [editorState, setEditorState],
  );

  const getBlockStyle = (block) => {
    switch (block.getType("")) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  };

  return (
    <div className={clsx("TextEditor", classes?.textEditor)}>
      <div className="TextEditor-Title">{title}</div>
      <div
        className={clsx("TextEditor-Area", {
          "TextEditor-Area__isFocused": isFocused || contentState.hasText(),
          "TextEditor-Area__isInvalid": isInvalid,
        })}
        onClick={handleChangeFocus}
      >
        <div className={wrapperClassName}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={TEXT_EDITOR_CUSTOM_STYLES}
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            onBlur={handleChangeBlur}
            onChange={handleChangeText}
            placeholder={placeholder}
          />
        </div>
        <div className="TextEditor-Sub">
          <BlockStyleControls
            editorState={editorState}
            onToggle={(blockType) => {
              const newState = RichUtils.toggleBlockType(editorState, blockType);
              setEditorState(newState);
            }}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={(inlineStyle) => {
              const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
              setEditorState(newState);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const TextEditor = memo(TextEditorComponent);
