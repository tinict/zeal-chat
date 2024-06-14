import * as _ from 'lodash';
import { pick } from 'lodash';
import { BaseEntity } from 'typeorm';

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

        // Type assertion to `any` is necessary to assign dynamic properties
        Object.keys(data).forEach(key => {
            if (data[key] !== undefined) {
                (entity as any)[key] = data[key];
            }
        });

        console.log('Mapped entity:', entity);
        return entity;
    }
};
