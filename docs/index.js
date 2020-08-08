var generateTitle = (function() {
    var words = ["Ancient", "Valley", "Sky", "Voyage", "Passage", "Wander", "Far", "Wood", "Shadow"];

    function fisherYates(arr) {
        for (var i = arr.length-1; i > 0; i--)
        {
            var j = Math.floor(Math.random() * (i + 1));
            swap(arr, i, j);
        }
    }

    function swap(arr, i, j)
    {
        var old = arr[i];
        arr[i] = arr[j];
        arr[j] = old;
    }

    function generateTitle() {
        fisherYates(words);
        var title = `${words[0]} ${words[1]}: the ${words[2]} ${words[3]}`;
        var titleElem = document.getElementById("generatedTitle");
        titleElem.innerText = title;
    }

    return generateTitle;
})();

