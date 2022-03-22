import Orm from "../model/orm";

class QuestionsFromUsersController {

    static getAll(req, res, next) {
        return new Orm().getOrm().questionFromUserModel.getAll()
            .then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static get(req, res, next) {
        return new Orm().getOrm().questionFromUserModel
            .getById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send(row.toJSON()) );
    }

    static create(req, res, next) {
        return new Orm().getOrm().questionFromUserModel
            .create(req.body).then((row, err) => (err) ? err.toJSON():  res.send('OK') )
    }

    static removeById(req, res, next) {
        if(req.session.loggedToken) {
            return new Orm().getOrm().userModel
                .getUserByAuthToken(req.session.loggedToken)
                .then((row, err) => {
                    let loggedUser = row.toJSON();
                        //...
                    return new Orm().getOrm().questionFromUserModel
                        .removeById(req.params.id).then((row, err) => (err) ? err.toJSON():  res.send("OK") )

                }).catch(err => {
                    if(err.message == "EmptyResponse") {
                        res.status(404).send("User not found");
                    }
                })
        } else {
            res.status(403).send('User not logged in');
        }
    }

}

export default QuestionsFromUsersController;
