import { useState } from "react";
import type { FC } from "react";
import { Title } from "components";
import { Icon } from "uikit";

export const IconPage: FC = () => {
  const [count, setCount] = useState(0);

  const handleClickIcon = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <section>
      <Title>Icon</Title>
      <Icon className="Icon-Custom" onClick={handleClickIcon} type="Close" />
      <div>
        <pre>{JSON.stringify(count, null, 2)}</pre>
      </div>
    </section>
  );
};
