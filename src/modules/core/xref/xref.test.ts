import {RefEntry, XrefSubsection} from "@/modules/core/xref/index";

test("Cast XREF table", cb => {
	expect(XrefSubsection.analyzeXREFSection(
		[
			"xref\n",
			"0 6\n",
			"0000000003 65535 f\n",
			"0000000017 00000 n\n",
			"0000000081 00000 n\n",
			"0000000000 00007 f\n",
			"0000000331 00000 n\n",
			"0000000409 00000 n\n"]
	)).toEqual([new XrefSubsection(0, 6, [
    new RefEntry(3, 65535, false),
    new RefEntry(17, 0, true),
    new RefEntry(81, 0, true),
    new RefEntry(0, 7, false),
    new RefEntry(331, 0, true),
    new RefEntry(409, 0, true),
  ])])
});
