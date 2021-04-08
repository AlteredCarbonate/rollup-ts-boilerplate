const request = require("request-promise");
const $ = require("cheerio");
var ArticleData;
(function (ArticleData) {
    ArticleData[ArticleData["Description"] = 0] = "Description";
    ArticleData[ArticleData["Disclaimer"] = 2] = "Disclaimer";
    ArticleData[ArticleData["Developer"] = 4] = "Developer";
    ArticleData[ArticleData["Publisher"] = 5] = "Publisher";
    ArticleData[ArticleData["ReleaseDate"] = 6] = "ReleaseDate";
    ArticleData[ArticleData["Genre"] = 7] = "Genre";
    ArticleData[ArticleData["GameIntro"] = 9] = "GameIntro";
    ArticleData[ArticleData["KeyFeatures"] = 11] = "KeyFeatures";
    ArticleData[ArticleData["DownloadHint"] = 13] = "DownloadHint";
})(ArticleData || (ArticleData = {}));
var ArticleList;
(function (ArticleList) {
    ArticleList[ArticleList["KeyFeatures"] = 0] = "KeyFeatures";
    ArticleList[ArticleList["RequirementMinimal"] = 1] = "RequirementMinimal";
    ArticleList[ArticleList["RequirementRecommended"] = 2] = "RequirementRecommended";
})(ArticleList || (ArticleList = {}));
// console.log($('h1.uk-article-title', html).text());
// console.log($('p.ogiua', html).text());
// $(".uk-margin-medium-top > p", html).each((index, element) => {
//     console.log(`ID: ${index} ${$(element).text()}`);
class ArticleScrapper {
    constructor(url) {
        this.URL = null;
        this.URL = url;
    }
    generate() {
        request(this.URL)
            .then((html) => {
            let title, version, description, developer, publisher, releaseDate, genre, gameIntro, downloadHint, keyFeatures;
            title = $('h1.uk-article-title', html).text().replace("Free Download", "");
            const removeTitle = title.match(`\\(([^)]+)\\)`)[0];
            title = title.replace(removeTitle, "").replace("  ", "");
            console.log("Getting Title");
            // version = $('h1.uk-article-title', html).text().match(`\\(([^)]+)\\)`)[1];
            // console.log("Getting Version");
            //
            // // description = $('p.ogiua', html).text().replace("\n", "").replace(". ", "").replace("Posted by Admin | ", "");
            // description = $('p.ogiua', html).children().toArray().map((data) => {
            //     return $(data).text();
            // });
            // console.log("Getting Description");
            //
            // $(".uk-margin-medium-top > p", html).each((index: ArticleData, element) => {
            //     switch (index) {
            //         case ArticleData.Developer:
            //             developer = $(element).text().replace(" Developer: ", "");
            //             break;
            //         case ArticleData.Publisher:
            //             publisher = $(element).text().replace(" Publisher: ", "");
            //             break;
            //         case ArticleData.ReleaseDate:
            //             releaseDate = $(element).text().replace(" Release Date: ", "");
            //             break;
            //         case ArticleData.Genre:
            //             genre = $(element).text().replace(" Genre: ", "");
            //             break;
            //         case ArticleData.GameIntro:
            //             gameIntro = $(element).text();
            //             break;
            //     }
            // });
            // console.log("Getting ArticleData");
            //
            // $(".uk-margin-medium-top > ul", html).each((index: ArticleList, element) => {
            //     switch (index) {
            //         case ArticleList.KeyFeatures:
            //             keyFeatures = $(element).children().toArray().map((data) => {
            //                 return $(data).text();
            //             });
            //             break;
            //         case ArticleList.RequirementMinimal:
            //             break;
            //         case ArticleList.RequirementRecommended:
            //             break;
            //     }
            // });
            //
            // console.log("Getting ArticleList");
            const newArticle = {
                title: title,
                version: version,
                description: description,
                creatorInfo: {
                    developer: developer,
                    publisher: publisher,
                    releaseDate: releaseDate,
                    genre: genre
                },
                gameIntro: gameIntro,
                keyFeatures: keyFeatures,
                downloadHint: downloadHint
            };
            console.log(newArticle);
        });
    }
    getData(target, selector, context) {
        return new Promise(((resolve, reject) => {
            try {
                resolve($(selector, context));
            }
            catch (e) {
                console.log(`Error getting data from ${target}`);
            }
        }));
    }
}

const url = 'https://igg-games.com/becastled-308418277-free-download.html';
const newArticle = new ArticleScrapper(url);
newArticle.generate();
