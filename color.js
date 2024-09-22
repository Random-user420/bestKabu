function get_stored_color() {
    const color_ = localStorage.getItem("color");
    if (color_ !== null) {
        return color_;
    }
    else {
        return "#4281ff";
    }
}

function set_stored_color(color_) {
    if (color_ !== null && color_ !== undefined && color_ !== "" && color_.includes("#")) {
        color = color_;
        localStorage.setItem("color", color);
    }
}

function set_style_color() {
    // Change the --weekdayToday variable to a new color
    document.documentElement.style.setProperty('--weekdayToday', color);
}

let color = get_stored_color();
set_style_color();