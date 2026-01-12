import { Title } from "components/Title";
import { TextEditor } from "uikit";

export const TextEditorPage: FC = () => {
  return (
    <section>
      <Title>Text editor</Title>
      <TextEditor title="Text editor" />
    </section>
  );
};
