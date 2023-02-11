import { Person } from "."

it("o nome está coreto?", () => {
  const pessoa = new Person()
  expect(pessoa.sayMyName()).toBe("André")
})
