import {SPACE} from "@/modules/core/CharacterSet";
import throwError from "@/modules/foundation/ErrorHandler";

//The first entry in the table (object number 0) shall always be free and shall have a generation number of 65,535;
export class XrefSubsection {

	public objIndex : number = -1;
	public objCount : number = -1;
	public entries : RefEntry[] = [];

	/**
	 * TODO: Correct input?
	 * Also deviding in subsections
	 * @param lines
	 */
	public analyzeXREFSection(lines : string[]): XrefSubsection[]{
		let sections :  XrefSubsection[] = [];
		for(let i : number = 0; i < lines.length; i++){
			//Subsection "Heading"
			if(lines[i].charCodeAt(0) == SPACE && lines[i].charCodeAt(1) == SPACE)
				sections[sections.length] = this.castSubsectionHeading(lines[i]);
			else //Entry
				sections[sections.length - 1].entries[sections[sections.length - 1].entries.length] = analyzeEntry(lines[i]); //Clean?
		}
		return sections;
	}

	/**
	 * Example: "  1 1\n"
	 * @param line
	 */
	private castSubsectionHeading(line : string) : XrefSubsection{
		const splitStrings : string[] =  line.trim().split(" ");

		if(splitStrings.length != 2)
			throwError(`XREF-Entry Syntax Error: \"${line}\"`)

		let entry : XrefSubsection = new XrefSubsection();

		entry.objIndex = Number.parseInt(splitStrings[0]);
		entry.objCount = Number.parseInt(splitStrings[1]);

		return entry;
	}



}

//Each line is 20 bytes long
//nnnnnnnnnn ggggg n/f eol
public class RefEntry {

	public byteOffset: number;
	public generationNumber: number;
	public isInUse: boolean;

	public analyzeEntry(line : string): RefEntry{
		let entry : RefEntry = new RefEntry();

		const fields : string[] =  line.split(String.fromCharCode(SPACE));

		if(fields.length != 3)
			throwError(`XREF-Entry Syntax Error: \"${line}\"`)

		entry.byteOffset = Number.parseInt(fields[0]);
		entry.byteOffset = Number.parseInt(fields[1]);
		entry.byteOffset = fields[2] == 'n';

		return entry;
	}

}
