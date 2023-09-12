import { Modal } from "@mui/material";
import * as React from "react";
type MarketingModalContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const MarketingPageModal = React.createContext<MarketingModalContextType>({
  open: false,
  setOpen: () => {},
});
import MarketingModal from "../elements/marketing/MarketingModal/MarketingModal";

export function MarketingModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <MarketingPageModal.Provider value={{ open, setOpen }}>
      <Modal open={open}>
        <MarketingModal setOpen={setOpen} />
      </Modal>
      {children}
    </MarketingPageModal.Provider>
  );
}

export function useMarketingPageModal() {
  const context = React.useContext(MarketingPageModal);
  if (context === undefined) {
    throw new Error(
      "useMarketingPageModal can only be used inside MarketingModalProvider"
    );
  }
  return context;
}
