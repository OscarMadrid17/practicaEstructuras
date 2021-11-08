import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Partes2 extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  codigoParte: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
  })
  vehiculoOld?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Partes2>) {
    super(data);
  }
}

export interface Partes2Relations {
  // describe navigational properties here
}

export type Partes2WithRelations = Partes2 & Partes2Relations;
