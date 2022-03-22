// Author: Pastushenko Vladislav
// Login: xpastu04

import { combineReducers } from 'redux'
import posts from "./posts/reducers";
import users from "./users/reducers";
import stops from "./stops/reducers";
import questionsFromUsers from "./questionsFromUsers/reducers";
import news from "./news/reducers";
import FAQs from "./FAQs/reducers";
import lostThings from "./lostThings/reducers";
import vacancies from "./vacancies/reducers";

export default combineReducers({
    posts,
    users,
    stops,
    questionsFromUsers,
    news,
    FAQs,
    lostThings,
    vacancies,
})
