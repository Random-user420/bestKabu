class objectColorField {
    color = "";
    name = "";
    id = "";

    constructor(name, color, id) {
        this.color = color;
        this.name = name;
        this.id = id;
    }

    validateColor(color) {
        return /^#([0-9A-Fa-f]{6})$/.test(color);
    }
    getColor() {
        const color = document.getElementById(`${this.id}Field`).value;
        if (this.validateColor(color)) {
            this.color = color;
        }
        else {
            this.color = "";
            document.getElementById(`${this.id}Field`).value = document.getElementById(`${this.id}Picker`).value;
        }
        return this.color;
    }
}
