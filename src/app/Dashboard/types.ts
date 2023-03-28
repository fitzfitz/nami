export type Names = {
  id: string;
  name: string;
  meaning: string;
  newIndex: number;
};

export type Filter = {
  meaning: string;
  gender: string | number;
  wordLength: number | string;
  origin: number | string;
};

export type DashboardState = {
  filter: Filter;
  detail: Names | null;
};
export type DashboardAction = {
  setFilter: (filter: Partial<Filter>) => void;
  setDetail: (names?: Names | null) => void;
  clearFilter?: () => void;
  clearAll?: () => void;
};
