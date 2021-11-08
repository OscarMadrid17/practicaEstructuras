import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Conn2DataSource} from '../datasources';
import {Partes2, Partes2Relations} from '../models';

export class Partes2Repository extends DefaultCrudRepository<
  Partes2,
  typeof Partes2.prototype.id,
  Partes2Relations
> {
  constructor(
    @inject('datasources.conn2') dataSource: Conn2DataSource,
  ) {
    super(Partes2, dataSource);
  }
}
