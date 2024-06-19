import { query } from 'express';
import * as _ from 'lodash';
import { BaseMapper } from 'src/mappers';

export class UserMapper extends BaseMapper {
    /**
     * 
     * @param entity 
     * @returns 
     */
    static toUserCreateDTOMapper = (entity: any) => ({
        ...BaseMapper.toBaseCreateMapper(entity),
        username: _.get(entity, 'username'),
        credentials: _.get(entity, 'credentials'),
    });

    /**
     * 
     * @param entity 
     * @returns 
     */
    static toUserUpdateDTOMapper = (entity: any) => ({
        ...BaseMapper.toBaseCreateMapper(entity),
        username: _.get(entity, 'username'),
        credentials: _.get(entity, 'credentials'),
    });

    /**
     * 
     * @param entity 
     * @returns 
     */
    static toUserDeleteDTOMapper = (entity: any) => ({
        ...BaseMapper.toBaseDeleteMapper(entity),
        id: _.get(entity, 'id'),
        credentials: _.get(entity, 'credentials'),
    });

    /**
     * 
     * @param entity 
     * @returns 
     */
    static toUserQueryDTOMapper = (entity: any) => ({
        id: _.get(entity, 'id'),
        username: _.get(entity, 'username'),
        credentials: _.get(entity, 'credentials'),
    });
};
