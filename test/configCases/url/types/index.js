import png from "./file.png";
import svg from './file.svg';

it("should output PNG asset (raw)", () => {
	expect(png).toEqual("a04e99f837b13d786bce.png");
	expect(svg).toEqual("05d1fc45d76b1e6a8224.svg");
})
