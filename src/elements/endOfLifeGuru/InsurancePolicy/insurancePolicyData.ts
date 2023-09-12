interface IInsurancePolicyData {
  id: number;
  heading: string;
  text: string;
}
const InsurancePolicyData: IInsurancePolicyData[] = [
  {
    id: 1,
    heading: "Locate the decedent’s life insurance policies",
    text: "The decedent may have life insurance policy information in a safety deposit box or a safe. It may also be beneficial to contact the decedent’s previous employer, financial advisor, or insurance agent to determine whether they had life insurance.The National Association of Insurance Commissioners has a free tool that allows individuals to locate life insurance policies through participating insurance companies. Your state’s Department of Insurance may also offer resources to locate policies for free. Finally, there are private companies that can identify whether a decedent had a life insurance policy. Oftentimes, these companies charge a fee.",
  },
  {
    id: 2,
    heading: "Be prepared with the paperwork",
    text: "In general, you will have to have a certified copy of the decedent’s death certificate. You will most likely have to provide the decedent’s full name, date of birth, date of death, social security number, and current and past addresses to the insurance company. Each insurance company may require different information, so it is best practice to be prepared.",
  },
  {
    id: 3,
    heading: "Identify beneficiaries",
    text: "If you are a beneficiary, then you will have to fill out paperwork to receive life insurance proceeds. If you are not a beneficiary, then you should notify the potential beneficiary of their interest in the decedent’s life insurance proceeds. If the beneficiaries are minor children, your state may require legal guardianship to be set up in court or may require the child’s parent to set up a custodial account.",
  },
  {
    id: 4,
    heading: "Determine whether life insurance proceeds belong to the estate",
    text: "If a beneficiary dies and there are no alternative (“contingent” or “secondary”) beneficiaries, then the life insurance proceeds may belong to the estate. In other words, the life insurance proceeds will probably be distributed through the state’s rules of distribution or the decedent’s will. Additionally, some policies provide that if the decedent divorced the life insurance beneficiary, then the beneficiary will no longer be able to collect proceeds. In such an instance, the life insurance proceeds will be payable to the estate if there were no other contingent beneficiaries.",
  },
];

export default InsurancePolicyData;
