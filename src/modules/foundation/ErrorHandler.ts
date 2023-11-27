import {Ref, ref} from "vue";

const ignoreErrors : Ref<boolean> = ref(false)

export default function throwError(message : string): void{
	if (ignoreErrors)
		return;
	throw new Error(message);
}
