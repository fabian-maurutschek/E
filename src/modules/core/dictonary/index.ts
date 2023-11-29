import throwError from "@/modules/foundation/ErrorHandler";
import {SPACE} from "@/modules/core/CharacterSet";

export class DictObj extends Map<string, string | string[] | number | number[] | null> {


  constructor(entries: (readonly [string, string | string[] | number | number[] | null])[] = []) {
    super(entries);
  }

  public static castDictionary(lines: string[]): Map<string, string | string[] | number | number[] | null> {
    if (!lines[0].trimStart().startsWith("<<"))
      throwError(`Dictionary Cast: Doesnt start with \"<<\": ${lines[0]}`)
    if (lines[lines.length - 1].trimEnd().endsWith(">>"))
      throwError(`Dictionary Cast: Doesnt end with \">>\": ${lines[lines.length - 1]}`)

    let dict: DictObj = new DictObj();

    //Entries

    let dataRaw = lines.reduce((previousValue, currentValue) => previousValue + currentValue).trim();

    let dataSplited: string[] = dataRaw.split("/")

    dataSplited.forEach((value: string, index: number): void => {
      if (value.startsWith("<<")){

      }

      let data: string[] = value.trim().split(String.fromCharCode(SPACE))

      if (data.length >= 2)
        throwError(`Dictionary Cast: More then one field in line: ${value}`)

      dict.set(data[0], data.length == 1 ? data[1] : null);
    })


    return dict;
  }

  public static findDictInStrings(lines: string[]): string {
    let wholeData: string = lines.reduce((previousValue: string, currentValue: string) => previousValue + currentValue).trim();
    return wholeData.substring(wholeData.indexOf("<<"), wholeData.lastIndexOf(">>") + 2);
  }

}



