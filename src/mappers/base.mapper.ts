import * as _ from 'lodash';

export class BaseMapper {
    static toBaseMapper = (entity: any) => ({
        description: _.get(entity, 'Description'),
        display_order: parseFloat(_.get(entity, 'DisplayOrder')),
        created_by: _.get(entity, 'CreatedBy'),
        updated_by: _.get(entity, 'UpdatedBy'),
        deleted_by: _.get(entity, 'DeleteBy'),
        rec_status: _.get(entity, 'RecStatus'),
    });
};
