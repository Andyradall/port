const projects = document.querySelector("#projects");

const db = firebase.database();
const prosjekter = db.ref("testprosjekt");


function visProsjekt(snap) {
    const prosjekt = snap.val();

    projects.innerHTML += `
        <article class="entry">
            <img class="entryImg" src="${prosjekt.bilder[0].url}" alt="">
            <h2>${prosjekt.tittel}</h2>
            <p> ${prosjekt.beskrivelse}</p>
        </article>
    `;

}

prosjekter.on("child_added", visProsjekt);

function triggerVisibility() {
    console.log("button press");
    document.getElementById("before").style.display ="none";
    document.getElementById("after").style.display ="block";
}