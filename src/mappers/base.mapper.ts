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
        rec_status: _.get(entity, 'rec_status'),
        code: _.get(entity, 'code'),
    });


    /**
     * 
     * @param entity 
     * @returns 
     */
    static toBaseCreateMapper = (entity: any) => ({
        ...this.toBaseMapper(entity),
        created_by: _.get(entity, 'created_by'),
    });

    /**
     * 
     * @param entity 
     * @returns 
     */
    static toBaseDeleteMapper = (entity: any) => ({
        ...this.toBaseMapper(entity),
        deleted_by: _.get(entity, 'deleted_by'),
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
