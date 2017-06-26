function loadRedditImages(fetch, url, target) {
    return fetch(url).then(response => {
        return response.json();
    })
}

function drawThumbnails(thumbnails, element) {
    thumbnails.data.children.forEach(item => {
        let img = document.createElement('img');
        img.src = item.data.thumbnail
        document.getElementById(element).appendChild(img);
    })
}

function process(fetch, url, elem) {
    loadRedditImages(fetch, url).then(obj => {
        drawThumbnails(obj, elem);
    })
}

process(window.fetch, "https://www.reddit.com/r/aww.json", "contentAww");
process(window.fetch, "https://www.reddit.com/r/ImaginaryLandscapes.json", "contentLandscapes");