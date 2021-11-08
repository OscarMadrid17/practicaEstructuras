import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Conn2DataSource} from '../datasources';
import {Inventario, InventarioRelations} from '../models';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.id,
  InventarioRelations
> {
  constructor(
    @inject('datasources.conn2') dataSource: Conn2DataSource,
  ) {
    super(Inventario, dataSource);
  }
}
