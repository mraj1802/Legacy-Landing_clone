import { getData } from "../../pages/api/getCaseStudies";
import AllCaseStudiesPage from "../../src/elements/CaseStudies/AllCaseStudies/AllcaseStudies";

export default async function Index() {
  const caseStudies = await getData();

  return (
    <div>
      <AllCaseStudiesPage data={caseStudies.data} />
    </div>
  );
}
