import {DictObj} from "@/modules/core/dictonary/index";


test('Extract Dict', () => {
  expect(DictObj.findDictInStrings(["<</Size 22/Root 1 0 R/Info<<>> 14 0 R/ID[<A1A09DEA075ABC479131EDDA242F9D80><A1A09DEA075ABC479131EDDA242F9D80>] >>EEEEE"]))
      .toBe("<</Size 22/Root 1 0 R/Info<<>> 14 0 R/ID[<A1A09DEA075ABC479131EDDA242F9D80><A1A09DEA075ABC479131EDDA242F9D80>] >>");
});

test('Cast Dict', () => {
  console.debug(DictObj.castDictionary(["<</Size 22/Root 1 0 R/Info 14 0 R/ID[<A1A09DEA075ABC479131EDDA242F9D80><A1A09DEA075ABC479131EDDA242F9D80>] >>"]));

  expect(DictObj.castDictionary(["<</Size 22/Root 1 0 R/Info 14 0 R/ID[<A1A09DEA075ABC479131EDDA242F9D80><A1A09DEA075ABC479131EDDA242F9D80>] >>"]))
      .toStrictEqual(new DictObj([
        ["Size", "22"],
        ["Root", "1 0 R"],
        ["Info", "14 0 R"],
        ["ID", ["<A1A09DEA075ABC479131EDDA242F9D80>","<A1A09DEA075ABC479131EDDA242F9D80>"]]
  ]));
});
