let song_lest = document.getElementById("song-lest");
    let song_text_field = document.getElementById("song-text-field");
    let song_array = localStorage.song_array;
    if (song_array) song_array = JSON.parse(song_array);
    else song_array = [];
    song_array.forEach((element) => {
        addSong(element);
    });
    document
        .getElementById("add-song-button")
        .addEventListener("click", () => {
        addSong(song_text_field.value);
        song_array.push(song_text_field.value);
        localStorage.song_array = JSON.stringify(song_array);
        song_text_field.value = "";
        });

    function addSong(value) {
        let new_song = document.createElement("li");
        new_song.innerText = value;
        song_lest.appendChild(new_song);
    }