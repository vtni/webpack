import url from "./file.png";

it("should output asset into assets/", () => {
	expect(url).toEqual("assets/images/file.png");
})
