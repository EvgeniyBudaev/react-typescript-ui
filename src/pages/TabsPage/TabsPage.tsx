import { useState } from "react";
import type { FC } from "react";
import { Tabs } from "uikit";
import type { TTab } from "uikit";
import "./TabsPage.scss";

export const TabsPage: FC = () => {
  const tabs: TTab[] = [
    { id: "1", label: "Label №1" },
    { id: "2", label: "Label №2" },
  ];

  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string | number) => {
    setSelectedTabId(id);
  };

  return (
    <section className="TabsPage">
      <h2>Tabs</h2>
      <Tabs selectedId={selectedTabId} tabs={tabs} onClick={handleTabClick} />
      <div className="TabsPage-Content">
        {selectedTabId === tabs[0].id && (
          <div>
            Sed ut perspiciatis unde omnis iste natus error sit voltage accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo
          </div>
        )}
        {selectedTabId === tabs[1].id && (
          <div>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga.
          </div>
        )}
      </div>
    </section>
  );
};
