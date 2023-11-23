import {ref} from "vue";
import {PdfFileRaw} from "@/modules/PdfFile";

const file = ref<File | null>();
const form = ref<HTMLFormElement>();

export function onFileChanged(obj : any) {
  const target = obj.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
  }

  /*console.debug(file.value)*/

  const x = new FileReader();
  x.onloadend = splitSections
  x.readAsBinaryString(file.value)
}

const pdfBuffer : PdfFileRaw = new PdfFileRaw();


function splitSections(ev: ProgressEvent<FileReader>){
  const data: string = ev.target?.result as string
  /*console.debug(data)*/

  let temp : string = "";
  for(let i = 0; i < data.length; i++){
    if(data[i] == "\n"){
      readLine(temp);
      temp = "";
	  }
    else
      temp += data[i];
  }
  //Read trailer



  console.debug(pdfBuffer, pdfBuffer.body)
}

let readBuffer = "";
function readLine(line: string) {
  console.debug(line)

  //Version
  if(line.match(/%pdf-\d.\d/i)){
    pdfBuffer.version = line.substring(5).trimEnd()
    readBuffer = "";
    return;
  }

  //Header
  if(line.match("%µµµµ")){
    pdfBuffer.header = readBuffer;

    readBuffer = "";
    return;
  }

  //Body
	if(line.match("xref")){
		pdfBuffer.body += readBuffer;
	  console.error(pdfBuffer.body)
		readBuffer = "";
	  console.error(pdfBuffer.body)
		return;
	}

	//Xref
	if(line.match("trailer")){
		pdfBuffer.xref = readBuffer;
		readBuffer = "";
		return;
	}

  //trailer
	if(line.match("%EOF")){
		pdfBuffer.trailer = readBuffer;
		readBuffer = "";
		return;
	}
	readBuffer += line;
  console.debug(readBuffer)
}


function cachePdfFile(){

}

/*
async function saveImage() {
  if (file.value) {
    try {
      // save file.value
    } catch (error) {
      console.error(error);
      form.value?.reset();
      file.value = null;
    } finally {
    }
  }
};
*/
