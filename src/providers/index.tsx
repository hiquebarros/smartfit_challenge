import { FilterProvider } from "./contexts/filterContext"

const Providers = ({ children }: any) => {
  return (
    <FilterProvider>
        {children}
    </FilterProvider>
  );
};

export default Providers;