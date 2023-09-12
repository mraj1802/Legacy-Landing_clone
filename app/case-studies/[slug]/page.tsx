import React from "react";
import { getCaseStudy } from "../../../pages/api/getCaseStudies";
import CaseStudyDetail from "../../../src/elements/CaseStudies/caseStudyDetail/CasestudyDetail";

export default async function Index({ params }: { params: any }) {
  const caseStudy = await getCaseStudy(params.slug);

  return (
    <div>
      <CaseStudyDetail res={caseStudy} />
    </div>
  );
}
