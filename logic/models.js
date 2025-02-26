class objectColorField {
    color = "";
    name = "";
    id = "";
    
    constructor(name, color) {
        this.color = color;
        this.name = name;
        this.id = name.replace("#", "").replace(" ", "").replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss");
    }
    
    validateColor() {
        return /^#([0-9A-Fa-f]{6})$/.test(this.color);
    }
    updateColor() {
        lessonColor[this.name] = this.color;
    }
    setColorInput(value) {
        document.getElementById(`${this.id}Field`).value = value;
    }
    updateField() {
        document.getElementById(`${this.id}Picker`).addEventListener("input", function () {
            this.setColorInput(document.getElementById(`${this.id}Picker`).value.toLowerCase());
        });
    }
    getColor() {
        return document.getElementById(`${this.id}Field`).value;
    }
}
