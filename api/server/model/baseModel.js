const crypto = require('crypto');
export default class BaseModel {

    constructor({orm, modelName, tableName, options = {}}) {
        this.options = options;
        this.modelName = modelName;
        this.tableName = tableName;
        this.orm = orm.orm;

        const definition = this.orm.Model.extend({
            tableName: this.tableName,
        });

        this.model = this.orm.model(this.modelName, definition);
    }

    create(data) {
        return new this.model().save({...data});
    }

    createMultiple(data) {
        return this.model
            .collection(data)
            .invokeThen('save')
    }


    getAll() {
        return new this.model().fetchAll();
    }

    getById(id) {
        return new this.model({id: id}).fetch();
    }

    getBy({col, value}) {
        let by = {};
        by[col] = value;

        return new this.model(by).fetch();
    }

    findBy({col, value}) {
        let by = {};
        by[col] = value;
        return new this.model(by).fetchAll();
    }

    removeById(id) {
        return new this.model({id: id}).destroy();
    }

    createHash(str, alg) {
        let hash = crypto.createHash(alg);
        hash.update(str);
        return hash.digest('hex');
    }

    update(data) {
        return this.model
            .forge()
            .save({...data},
                {
                    method: 'update',
                    patch: true
                }
            );
    }

}
