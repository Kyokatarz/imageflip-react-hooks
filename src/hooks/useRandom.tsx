import _ from "lodash";

export default function useRandom(array: any[]) {
  return _.shuffle([...array]);
}
