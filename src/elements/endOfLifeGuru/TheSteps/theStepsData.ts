import { StaticImageData } from "next/image";
import image1 from "/public/lifeGuru/1.png";
import image2 from "/public/lifeGuru/2.png";
import image3 from "/public/lifeGuru/3.png";
import image4 from "/public/lifeGuru/4.png";
import image5 from "/public/lifeGuru/5.png";
import image6 from "/public/lifeGuru/6.png";

interface ISteps {
  image: StaticImageData;
  heading: string;
  note?: boolean;
  minHeight: string;
  content: string;
  responsiveContent: string;
  width?: string;
}
const steps: ISteps[] = [
  {
    image: image1,
    heading: "Find the Original Will",
    note: true,
    minHeight: "600px",
    content:
      "Determine whether the decedent had a will. This is one of the first steps to help you determine whether probate is required. You may want to search through the decedent’s Legal Suite through Legacy Suite, access safety deposit boxes, contact prior known attorneys, or contact close family and friends who may have been aware of the decedent’s estate planning.",
    responsiveContent:
      "Determine whether the decedent had a will. This is one of the first steps to help you determine whether probate is ",
  },
  {
    image: image2,
    heading: "Identify the Decedent's Assets and Liabilities",
    minHeight: "500px",
    content:
      "When a person dies, it is important to be aware of their assets and liabilities if you are poised to be their personal representative. At this point, you may go through the decedent’s files to discover what they had when they passed away.  By understanding their liabilities, you will be able to anticipate any potential issues with creditors. Additionally, by having an idea of their assets, you can begin to determine which assets can immediately be transferred without the involvement of a probate court and which assets must go through the probate process. For example, joint accounts and accounts with beneficiaries can generally avoid probate. If assets do not have a joint owner or a beneficiary, do not give anything away until you are certain that debts and taxes have been paid and that probate is not required. Remember, some states may require probate, even if the estate has a low value.",
    responsiveContent:
      "When a person dies, it is important to be aware of their assets and liabilities if you are poised to be their personal representative. At this",
  },
  {
    image: image3,
    heading: "Keep Good Records",
    width: "393px",
    minHeight: "400px",
    content:
      "Keep every receipt from any expense you have paid, either from your own assets or from the decedent’s assets. You will have to provide an inventory and accounting to the court if probate is required and your accounting will have to include transactions before the probate process began. If probate is not required, it is still good practice to have an inventory and accounting available for beneficiaries. If you have spent your own money on funeral expenses, attorneys, utility bills, etc., you will be entitled to the reimbursement of those expenses.",
    responsiveContent:
      "Keep every receipt from any expense you have paid, either from your own assets or from the decedent’s assets. You will",
  },
  {
    image: image4,
    heading: "Make a Family Tree",
    minHeight: "450px",
    content:
      "Even if a person passes away with a will or a trust, some states will require the personal representative to create a document called an “affidavit of heirship”. This is essentially a formal, notarized family tree. It names all of the decedent’s living relatives to the nearest generation. For example, if a person passes away with a child and spouse, the affidavit of heirship may only name the child and the spouse. If the person passed away with no children and no spouse, but living parents, then the person’s parents may be listed. The more complicated the lineage, the more complex the affidavit, so to prepare, having a family tree for more complex family structures will be beneficial.",
    responsiveContent:
      "Even if a person passes away with a will or a trust, some states will require the ",
  },
  {
    image: image5,
    heading: "Get Death Certificates",
    width: "394px",
    minHeight: "300px",
    content:
      "Many financial institutions will not accept photocopies of death certificates and will require the original or certified copy of a death certificate. You should have several death certificates available because they are necessary to transfer assets or close accounts whether or not probate is required.",
    responsiveContent:
      "Many financial institutions will not accept photocopies of death certificates and will require the original or certified copy of a",
  },
  {
    image: image6,
    heading: "Contact an Attorney",
    minHeight: "400px",
    content:
      "Once you have conducted your due diligence, if you have not already done so, you should contact an attorney to help you determine the next steps and whether you will need help with administering the estate. Many states require that an attorney is present for probate. For cases involving minor children, blended families, complex wills or trusts, or creditor issues, you will likely need an attorney to guide you through the administration process. Funds that are in the estate will pay attorneys’ fees, therefore, if you suspect an estate is insolvent, please inform the attorney in advance.",
    responsiveContent:
      "Once you have conducted your due diligence, if you have not already done so, you should contact an attorney to help you determine the next",
  },
];

export default steps;
