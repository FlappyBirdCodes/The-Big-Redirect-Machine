//List of links for button 1
let image1_links = [
    "https://www.youtube.com/watch?v=RGNTYPmeLXk",
    "https://www.youtube.com/watch?v=cLNyF1Zw5tg",
    "https://www.youtube.com/watch?v=pY5v6PwCYnA",
    "https://www.youtube.com/watch?v=Y30VF3cSIYQ",
    "https://www.youtube.com/watch?v=J53UK_bul5Y",
    "https://www.youtube.com/watch?v=T3W4Mx2aSGE",
    "https://www.youtube.com/watch?v=9Deg7VrpHbM",
    "https://www.youtube.com/watch?v=wsZ7013yHiw",
    "https://www.youtube.com/watch?v=X1ahJsDNDTQ",
    "https://www.youtube.com/watch?v=XDXrP9HET2A"
]

//List of links for button 2
let image2_links = [
    "https://www.youtube.com/watch?v=G7RgN9ijwE4",
    "https://www.youtube.com/watch?v=IdoD2147Fik",
    "https://www.youtube.com/watch?v=_Wv1W0m4eOo",
    "https://www.youtube.com/watch?v=aKRgZUHpqg8",
    "https://www.youtube.com/watch?v=5GIj2BVJS2A",
    "https://www.youtube.com/watch?v=y5D9OUKYr0c",
    "https://www.youtube.com/watch?v=xmc_RDUigHg",
    "https://www.youtube.com/watch?v=9BeV2lKSyXU",
    "https://www.youtube.com/watch?v=tdDbUemC-ss",
    "https://www.youtube.com/watch?v=QbC6dLG_dQY"
]

//List of links for button 3
let image3_links = [
    "https://www.youtube.com/watch?v=SAUzHHyGAYc",
    "https://www.youtube.com/watch?v=iYx_aGlmyc4",
    "https://www.youtube.com/watch?v=04nR7QrywYo",
    "https://www.youtube.com/watch?v=HluANRwPyNo",
    "https://www.youtube.com/watch?v=0zjMb75vyrs",
    "https://www.youtube.com/watch?v=tOUpJvPgXIA",
    "https://www.youtube.com/watch?v=V_I62UyKQ5Y",
    "https://www.youtube.com/watch?v=uGgI6qsg_kc",
    "https://www.youtube.com/watch?v=7v8-f0IG5_k",
    "https://www.youtube.com/watch?v=ull5YaEHvw0"
]

//Generates random number
let random_number = Math.floor((Math.random() * 3) + 1);

//Redirects to link in list 1 if button is pressed
image1_redirect.onmousedown = function() {
    let random_href = image1_links[Math.floor(Math.random() * image1_links.length)];
    image1_redirect.href = random_href;
};

//Redirects to link in list 2 if button is pressed
image2_redirect.onmousedown = function() {
    let random_href = image2_links[Math.floor(Math.random() * image2_links.length)];
    image2_redirect.href = random_href;
};

//Redirects to link in list 3 if button is pressed
image3_redirect.onmousedown = function() {
    let random_href = image3_links[Math.floor(Math.random() * image3_links.length)];
    image3_redirect.href = random_href;
};