import * as _ from 'lodash';

export class BaseMapper {
    static toBaseMapper = (entity: any) => ({
        description: _.get(entity, 'Description'),
        display_order: parseFloat(_.get(entity, 'DisplayOrder')),
        created_by: _.get(entity, 'CreatedBy'),
        updated_by: _.get(entity, 'UpdatedBy'),
        deleted_by: _.get(entity, 'DeleteBy'),
        rec_status: _.get(entity, 'RecStatus'),
        code: _.get(entity, 'Code'),
    });

    static async toEntity<T>(data: any, EntityClass: new () => T): Promise<T> {
        const entity = new EntityClass();

        Object.keys(data).forEach(key => {
            if (data[key] !== undefined) {
                (entity as any)[key] = data[key];
            }
        });

        return entity;
    };

    static async toUpdateEntity<T>(data: any, entity: T): Promise<T> {
        Object.keys(data).forEach(key => {
            if (data[key] !== undefined) {
                (entity as any)[key] = data[key];
            }
        });

        return entity;
    };
};
