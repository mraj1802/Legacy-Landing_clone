import { IDosAndDontsData } from "../../../interfaces/elements/DosAndDontsData/dosAndDontsData";

const donts: IDosAndDontsData = {
  text: "Don'ts",
  data: [
    {
      text: "Make distributions until you understand whether probate is required and whether there are claims against the estate",
      type: "cross",
    },
    {
      text: "Pay any of the decedent’s debts from your own funds",
      type: "cross",
    },
    {
      text: "The decedent’s debts are the responsibility of the estate, not you personally",
      type: "arrow",
    },
    {
      text: "Use estate funds for your personal needs",
      type: "cross",
    },
    {
      text: "Comingle the decedent’s money or assets with your assets",
      type: "cross",
    },
    {
      text: "You will use the EIN to set up an estate bank account, if applicable. You may also need letters of testamentary (a court order) to set up the bank account. You can navigate through these steps with the help of a lawyer",
      type: "arrow",
    },
    {
      text: "Delay the estate administration process. If you are unable to take on the role of executor, trustee, or administrator, then you can decline and allow someone else to manage administration",
      type: "cross",
    },
  ],
};
export default donts;
