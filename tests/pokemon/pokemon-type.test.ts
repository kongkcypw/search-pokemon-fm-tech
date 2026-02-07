const mocks = {
    bulbasaur: { name: "Bulbasaur", types: ["Grass", "Poison"] },
    charmander: { name: "Charmander", types: ["Fire"] },
    squirtle: { name: "Squirtle", types: ["Water"] },
};

describe("Pokemon Type", () => {
    test("expect Bulbasaur to have the Grass type, given mocks have two types", () => {
        expect(mocks.bulbasaur.types).toContain("Grass");
    });

    test("expect Charmander to have the Fire type, given mocks have one type", () => {
        expect(mocks.charmander.types).toContain("Fire");
    });

    test("expect Squirtle to have the Water type, given mocks have one type", () => {
        expect(mocks.squirtle.types).toContain("Water");
    });
});