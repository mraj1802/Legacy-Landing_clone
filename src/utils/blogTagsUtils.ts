interface IRefactorTag {
  id: string;
  tag: string;
  selected: boolean;
}

const generateIdWithTag = (tag: string) => {
  return tag.toLowerCase().split(" ").join("-");
};

export const tagsGeneration = (data: any) => {
  let dataCopy = [...data];
  let allTags: string[] = [];
  dataCopy.forEach((element: any) => {
    allTags.push(element?.data?.keywords);
  });
  let tags = new Set();
  allTags.forEach((elem: any) => {
    return elem.forEach((tag: any) => tags.add(tag));
  });
  let refactorTags: Array<IRefactorTag> = [];
  tags.forEach((elem: any) => {
    refactorTags.push({
      tag: elem,
      selected: false,
      id: generateIdWithTag(elem),
    });
  });
  return refactorTags;
};

export const findSelectedBlogs = (data: any, selected: any, all: boolean) => {
  if (all) {
    return data;
  } else {
    const selectdTrue = selected.filter((elem: any) => {
      if (elem.selected) {
        return elem.tag;
      }
    });
    const tags = selectdTrue.map((elem: any) => {
      return elem.tag;
    });
    const selectedData = data.filter((elem: any) => {
      return elem.data.keywords.find((tag: any) => {
        if (tags.includes(tag)) {
          return elem;
        }
      });
    });
    return selectedData;
  }
};
