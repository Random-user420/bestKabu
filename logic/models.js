class objectColorField {
    color = "";
    name = "";
    id;
    
    constructor(name, color) {
        this.color = color;
        this.name = name;

        this.id = name.replace("#", "").replace(" ", "").replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss");
        
    }
}
