import throwError from "@/modules/foundation/ErrorHandler";

export default DictObj.castDictionary;

export class DictObj extends Map<string, string | number | string[] | number[]>{

	public static castDictionary(lines: string[]){
		if(!lines[0].trimStart().startsWith("<<"))
			throwError(`Dictionary Cast: Doesnt start with \"<<\": ${lines[0]}`)
		if(lines[lines.length-1].trimEnd().endsWith(">>"))
			throwError(`Dictionary Cast: Doesnt end with \">>\": ${lines[lines.length-1]}`)


		this.set("key", "value")
		//TODO

		if(lines[0].substring(1).length != 0)
			return;
	}

}
