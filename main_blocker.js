document.querySelectorAll("div[class*='ads'], div[class*='ad_native'], div[class='ad'], div[id='ad'], div[id*='ad_native'], div[id*='ads'], div[id*='widget']").forEach((item) => {item.style.display = 'none'});

document.addEventListener("DOMNodeInserted", function () {
    document.querySelectorAll("div[class*='ads'], div[class*='ad_native'], div[class='ad'], div[id='ad'], div[id*='ad_native'], div[id*='ads'], div[id*='widget']").forEach((item) => {item.style.display = 'none'});
}, false);
