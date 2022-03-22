import UsersController from "./controllers/usersController";
import StopsController from "./controllers/stopsController";
import QuestionsFromUsersController from "./controllers/questionFromUserController";
import NewsController from "./controllers/newsController";
import FAQsController from "./controllers/faqsController";
import LostThingsController from "./controllers/lostThingsController";
import VacanciesController from "./controllers/vacanciesController";

const routes = (route) => {
    route.get('/', (req, res) => {
        res.send(`Api server in running (${new Date()})`);
    });

    route.get('/isServerRunning', (req, res) => {
        res.status(200).send(true);
    });

    // USERS
    route.route('/users')
        .get(UsersController.getAll)

    route.route('/users/sign-up')
        .post(UsersController.signup)

    route.route('/users/login')
        .post(UsersController.login)

    route.route('/users/:id')
        .get(UsersController.getById)
        .post(UsersController.editById)
        .delete(UsersController.removeById)

    route.route('/users/verify/:authToken')
        .get(UsersController.verify)

    route.route('/users/logout')
        .get(UsersController.logout)

    route.route('/users/get-authToken/')
        .get(UsersController.getAuthToken)

    route.route('/users/get-logged/:authToken')
        .get(UsersController.getLoggedUser)

    route.route('/users/set-session/:authToken')
        .post(UsersController.setSession)

    // STOPS
    route.route('/stops')
        .get(StopsController.getAll)
        .post(StopsController.create)

    route.route('/stops/:id')
        .get(StopsController.getById)
        .delete(StopsController.removeById)

    route.route('/stops/get-by-city-id/:id')
        .get(StopsController.getById)

    // QUESTIONS_FROM_USERS
    route.route('/questions-from-users')
        .get(QuestionsFromUsersController.getAll)
        .post(QuestionsFromUsersController.create)

    route.route('/questions-from-users/:id')
        .get(QuestionsFromUsersController.getAll)
        .delete(QuestionsFromUsersController.removeById)

    // NEWS
    route.route('/news')
        .get(NewsController.getAll)
        .post(NewsController.create)

    route.route('/news/:id')
        .get(NewsController.get)
        .delete(NewsController.removeById)

    // FAQ
    route.route('/faqs')
        .get(FAQsController.getAll)
        .post(FAQsController.create)

    route.route('/faqs/:id')
        .get(FAQsController.get)
        .get(FAQsController.getAll)
        .delete(FAQsController.removeById)

    // LOST THINGS
    route.route('/lost-things')
        .get(LostThingsController.getAll)
        .post(LostThingsController.create)

    route.route('/lost-things/:id')
        .get(LostThingsController.getAll)
        .delete(LostThingsController.removeById)

    // VACANCIES
    route.route('/vacancies')
        .get(VacanciesController.getAll)
        .post(VacanciesController.create)

    route.route('/vacancies/:id')
        .get(VacanciesController.getAll)
        .delete(VacanciesController.removeById)
};

export default routes;
