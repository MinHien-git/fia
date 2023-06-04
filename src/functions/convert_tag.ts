import { Tags } from "../enum/enum";

export function ConvertTag(t: string) {
  var enumValue = Tags[t];
  return enumValue;
}
