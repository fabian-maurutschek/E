import * as stream from "stream";

/**
 * If one character is not a whitespace => false
 * @param data One or more chars
 */
export function isWhiteSpace(data : string) : boolean {
  for(let i = 0; i < data.length; i++){
    let charCode : number = data.charCodeAt(i);
    if(!(charCode == HORIZONTAL_TAB || charCode == FORM_FEED || charCode == LINE_FEED || charCode == CARRIAGE_RETURN || charCode == SPACE))
      return false;
  }
  return true;
}


//White Space Characters

export const HORIZONTAL_TAB : number = 0x09; //HT
export const FORM_FEED : number = 0x0C; //FF
export const LINE_FEED : number = 0x0A; //LF, newline characters
export const CARRIAGE_RETURN : number = 0x0D; //CR, newline characters
export const SPACE : number = 0x20; //SP

//Delimiter Characters

export const LEFT_PARENTHESIS : number = 0x28; //"("
export const RIGHT_PARENTHESIS : number = 0x29; //"("
export const LESS_THAN_SIGN : number = 0x3C; //"<"
export const GREATER_THAN_SIGN : number = 0x3E; //">"
export const LEFT_SQUARE_BRACKET : number = 0x5B; //"["
export const RIGHT_SQUARE_BRACKET : number = 0x5D; //"]"
export const LEFT_CURLY_BRACKET : number = 0x7B; //"{", postscript only
export const RIGHT_CURLY_BRACKET : number = 0x7D; //"}", postscript only
export const SOLIDUS : number = 0x2F; //"/"
export const PERCENT_SIGN : number = 0x25; //"%"
