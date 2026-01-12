import { Hr } from "components/Hr";
import { ThemeSwitcher } from "components/theme/ThemeSwitcher";
import { ThemeSwitcherCustom } from "components/theme/ThemeSwitcherCustom";
import { Title } from "components/Title";

export const SwitcherPage: FC = () => {
  return (
    <section className="SwitcherPage">
      <Title>Switcher</Title>
      <ThemeSwitcher />
      <Hr />
      <Title>Switcher Custom</Title>
      <ThemeSwitcherCustom />
    </section>
  );
};
