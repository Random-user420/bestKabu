class objectColorField {
    color = "";
    name = "";
    id;
    
    constructor(name) {
        this.name = name;
        this.id = name.replace("#", "").replace(" ", "").replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss");
    }
    
    validateColor() {
        return /^#([0-9A-Fa-f]{6})$/.test(this.color);
    }
    updateColor() {
        lessonColor[this.name] = this.color;
    }
}
