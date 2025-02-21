export type TTab = {
  id: string | number;
  label?: string | number;
};

export type TTabsProps = {
  className?: string;
  dataTestId?: string;
  onClick: (id: string | number) => void;
  selectedId: string | number;
  tabs: TTab[];
};
