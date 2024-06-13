import * as _ from 'lodash';
import { BaseMapper } from 'src/mappers';

export class UserMapper extends BaseMapper {
    static toUserMapper = (entity: any) => ({
        ...BaseMapper.toBaseMapper(entity),
    });
};
