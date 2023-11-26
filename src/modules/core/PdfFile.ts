import {PdfFileRaw} from "@/modules/core/PdfFileRaw";

export class PdfFile extends PdfFileRaw{




    s() : void{

    }





}

export class StreamObj {

  length: number;
  filter: string | string[] | null;
  decodeParms: DictObj | any[] | null;
  F : File | null; //"File specification"
  FFilter: string | any[] | null;
  FDecodeParms: DictObj | DictObj[] | null;
  DL: number; //None negative

  public convertStream (text: string ) : StreamObj{
    //starts with "stream" mit (CR +) LF
    //ends with "endstream" davor: mit (CR +) LF (not included in stream length)
    //There shall not be any extra bytes, other than white-space, between endstream and endobj

    return new StreamObj();
  }
}

export class DictObj {

}

export abstract class IndirectObj {
  public objNumber: number; //positive
  public generationNumber: number; //non negative

  public convertObj(data: string) : string{
    //TODO
    return data;
  }

}
