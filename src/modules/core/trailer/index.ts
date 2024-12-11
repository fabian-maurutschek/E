import {DictObj} from "@/modules/core/dictonary";

export default Trailer.convertTrailer;


export class Trailer{

  public byteOffset: number = -1;
  public data : DictObj = new DictObj();

	constructor(byteOffset: number, data: DictObj) {
	  this.byteOffset = byteOffset;
	  this.data = data;
  }

	public static convertTrailer(lines : string[]) {
    lines.forEach((value, index) => {
      if(index == 0 && value == "trailer")
        return;
      if(value.startsWith("<<"))
        console.debug(lines)


    })


	}
}
