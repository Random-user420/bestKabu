class objectColorField {
    color = "";
    name = "";
    id;
    
    constructor(name, color, id) {
        this.color = color;
        this.name = name;

        if (id == null) {
            this.id = name.replace("#", "").replace(" ", "").replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss");
        }
        else {
            this.id = id;
        }
    }
}
