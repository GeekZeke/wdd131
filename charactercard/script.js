const character = {
    name: "Big Man",
    class: "Alligator",
    level: 1,
    health: 100,
    image: "character.png",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died.`);
        }

        updateCard();
    },

    levelUp() {
        this.level += 1;
        updateCard();
    }
};

function updateCard() {
    document.getElementById("char-name").textContent = character.name;
    document.getElementById("char-class").textContent = character.class;
    document.getElementById("char-level").textContent = character.level;
    document.getElementById("char-health").textContent = character.health;
}

updateCard();