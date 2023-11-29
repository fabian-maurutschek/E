import {PdfFileRaw} from "@/modules/core/PdfFileRaw";
import {DictObj} from "@/modules/core/dictonary";

export class PdfFile extends PdfFileRaw{



  s() : void{

  }

}

export class StreamObj {

  public length: number;
  public filter: string | string[] | null;
  public decodeParms: DictObj | any[] | null;
  public f : File | null; //"File specification"
  public fFilter: string | any[] | null;
  public fDecodeParms: DictObj | DictObj[] | null;
  public dL: number; //None negative

  public convertStream (text: string ) : StreamObj{
    //starts with "stream" mit (CR +) LF
    //ends with "endstream" davor: mit (CR +) LF (not included in stream length)
    //There shall not be any extra bytes, other than white-space, between endstream and endobj

    return new StreamObj();
  }
}



export abstract class IndirectObj {
  public objNumber: number; //positive
  public generationNumber: number; //non negative

  public convertObj(data: string) : string{
    //TODO
    return data;
  }

}
