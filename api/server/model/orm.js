import MySQL from "../mysql";
import UserModel from "./userModel";
import StopModel from "./stopModel";
import QuestionFromUserModel from "./questionFromUserModel";
import NewsModel from "./newsModel";
import FAQsModel from "./faqsModel";
import LostThingsModel from "./lostThingsModel";
import VacanciesModel from "./vacanciesModel";


export default class Orm {

    constructor() {
        const dotenv = require("dotenv");
        const config = dotenv.config();

        const orm = new MySQL(
            config.parsed.MYSQL_HOST,
            config.parsed.MYSQL_USER,
            config.parsed.MYSQL_PASS,
            config.parsed.MYSQL_DB
        );

        const userModel = new UserModel({orm: orm, modelName: 'User', tableName: 'users', options: {} })
        const stopModel = new StopModel({orm: orm, modelName: 'Stop', tableName: 'stops', options: {} })
        const questionFromUserModel = new QuestionFromUserModel({orm: orm, modelName: 'QuestionFromUser', tableName: 'questions_from_users', options: {} })
        const newsModel = new NewsModel({orm: orm, modelName: 'NewsModel', tableName: 'novinky', options: {} })
        const faqsModel = new FAQsModel({orm: orm, modelName: 'FAQsModel', tableName: 'faqs', options: {} })
        const lostThingsModel = new LostThingsModel({orm: orm, modelName: 'LostThingsModel', tableName: 'lost_things', options: {} })
        const vacanciesModel = new VacanciesModel({orm: orm, modelName: 'VacanciesModel', tableName: 'vacancies', options: {} })        

        this._orm = {
            userModel: userModel,
            stopModel: stopModel,
            questionFromUserModel: questionFromUserModel,
            newsModel: newsModel,
            faqsModel: faqsModel,
            lostThingsModel: lostThingsModel,
            vacanciesModel: vacanciesModel,
        };
    }

    getOrm() {
        return this._orm;
    }
}
