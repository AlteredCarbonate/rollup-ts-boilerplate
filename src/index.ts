import {ArticleScrapper} from "./scrapper";
const url: string = 'https://igg-games.com/becastled-308418277-free-download.html';

const newArticle = new ArticleScrapper(url);
newArticle.generate();




