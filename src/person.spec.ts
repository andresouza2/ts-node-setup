import Person from "@/person"

it("o nome está coreto?", () => {
  const pessoa = new Person()
  expect(pessoa.sayHello()).toBe("Hello World!")
})
