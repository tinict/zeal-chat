import * as _ from 'lodash';

export class BaseMapper {
    /**
     * 
     * @param entity 
     * @returns 
     */
    static toBaseMapper = (entity: any) => ({
        description: _.get(entity, 'description'),
        display_order: parseFloat(_.get(entity, 'display_order')),
        created_by: _.get(entity, 'created_by'),
        updated_by: _.get(entity, 'updated_by'),
        deleted_by: _.get(entity, 'delete_by'),
        rec_status: _.get(entity, 'rec_status'),
        code: _.get(entity, 'code'),
    });


    /**
     * 
     * @param entity 
     * @returns 
     */
    static toBaseCreateMapper = (entity: any) => ({
        description: _.get(entity, 'description'),
        created_by: _.get(entity, 'created_by'),
        rec_status: _.get(entity, 'rec_status'),
        code: _.get(entity, 'code'),
    });

    /**
     * 
     * @param data 
     * @param EntityClass 
     * @returns 
     */
    static async toEntity<T>(data: any, EntityClass: new () => T): Promise<T> {
        const entity = new EntityClass();

        Object.keys(data).forEach(key => {
            if (data[key] !== undefined) {
                (entity as any)[key] = data[key];
            }
        });

        return entity;
    };

    /**
     * 
     * @param data 
     * @param entity 
     * @returns 
     */
    static async toUpdateEntity<T>(data: any, entity: T): Promise<T> {
        Object.keys(data).forEach(key => {
            if (data[key] !== undefined) {
                (entity as any)[key] = data[key];
            }
        });

        return entity;
    };
};
