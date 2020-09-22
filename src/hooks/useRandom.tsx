import _ from "lodash";

export default function useRandom(array: any[]): any[] {
  const tempArray = [...array];
  tempArray.forEach((item, index) => (item.id = index + 10000));
  return _.shuffle(tempArray);
}
