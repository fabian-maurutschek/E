import {SPACE} from "@/modules/core/CharacterSet";
import throwError from "@/modules/foundation/ErrorHandler";

//The first entry in the table (object number 0) shall always be free and shall have a generation number of 65,535;
export class XrefSubsection {

	public objIndex : number = -1;
	public objCount : number = -1;
	public entries : RefEntry[] = [];

	constructor(objIndex: number, objCount: number, entries: RefEntry[]) {
    this.objIndex = objIndex;
    this.objCount = objCount;
	  this.entries = entries;
  }

	/**
	 * TODO: Correct input?
	 * Also deviding in subsections
	 * @param lines
	 */
	public static analyzeXREFSection(lines : string[]): XrefSubsection[]{
		let sections :  XrefSubsection[] = [];
		for(let i : number = 0; i < lines.length; i++){
      if(lines[i].startsWith("xref"))
        continue;
			//Subsection "Heading"
			if(lines[i].split(String.fromCharCode(SPACE)).length == 2)
				sections[sections.length] = this.castSubsectionHeading(lines[i]);
			else //Entry
				sections[sections.length - 1].entries[sections[sections.length - 1].entries.length] = RefEntry.analyzeEntry(lines[i]); //Clean?
		}
		return sections;
	}

	/**
	 * Example: "  1 1\n"
	 * @param line
	 */
	private static castSubsectionHeading(line : string) : XrefSubsection{
		const splitStrings : string[] =  line.trim().split(String.fromCharCode(SPACE));

		if(splitStrings.length != 2)
			throwError(`XREF-Entry Syntax Error: \"${line}\"`)

		let entry : XrefSubsection = new XrefSubsection(Number.parseInt(splitStrings[0]), Number.parseInt(splitStrings[1]), []);

		return entry;
	}



}

//Each line is 20 bytes long
//nnnnnnnnnn ggggg n/f eol
export class RefEntry {

	public byteOffset: number = 0;
	public generationNumber: number = 0;
	public isInUse: boolean = false;



	constructor(byteOffset: number, generationNumber: number, isInUse: boolean) {
	  this.byteOffset = byteOffset;
	  this.generationNumber = generationNumber;
	  this.isInUse = isInUse;
  }

	public static analyzeEntry(line : string): RefEntry{
		const fields : string[] =  line.split(String.fromCharCode(SPACE));

		if(fields.length != 3)
			throwError(`XREF-Entry Syntax Error: \"${line}\"`)

		return new RefEntry(Number.parseInt(fields[0]), Number.parseInt(fields[1]),fields[2].trimEnd() == 'n');
	}

}
