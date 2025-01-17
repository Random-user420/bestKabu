// lessons[{name:str, color: str},…]
function generateLesson(lessons) {
    ret = ""
    return lessons.forEach(lesson => {
        ret.append(
            `<div class="lesson">
                <label for="@next" class="sr-only">Stundenkürzel</label>
                <input type="text" class="lessonName" placeholder="Name" value="${lesson.name}"/>
                <label for="@next" class="sr-only">Farbe</label>
                <input type="color" class="lessonColor" value="${lesson.color}"/>
            </div>`)
    });
}

//links[{name:str, link:str}]
function generateLinks(links) {
    ret = ""
    return links.forEach(link => {
        ret.append(
            `<div class="link">
                <label for="@next" class="sr-only">Linkname</label>
                <input type="text" class="linkName" placeholder="Name" value="${link.name}"/>
                <label for="@next" class="sr-only">Link</label>
                <input type="Text" class="linkLink" value="${link.link}"/>
            </div>`)
    });
}