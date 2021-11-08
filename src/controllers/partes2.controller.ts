import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Partes2} from '../models';
import {Partes2Repository} from '../repositories';

export class Partes2Controller {
  constructor(
    @repository(Partes2Repository)
    public partes2Repository : Partes2Repository,
  ) {}

  @post('/partes2s')
  @response(200, {
    description: 'Partes2 model instance',
    content: {'application/json': {schema: getModelSchemaRef(Partes2)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partes2, {
            title: 'NewPartes2',
            exclude: ['id'],
          }),
        },
      },
    })
    partes2: Omit<Partes2, 'id'>,
  ): Promise<Partes2> {
    return this.partes2Repository.create(partes2);
  }

  @get('/partes2s/count')
  @response(200, {
    description: 'Partes2 model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Partes2) where?: Where<Partes2>,
  ): Promise<Count> {
    return this.partes2Repository.count(where);
  }

  @get('/partes2s')
  @response(200, {
    description: 'Array of Partes2 model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Partes2, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Partes2) filter?: Filter<Partes2>,
  ): Promise<Partes2[]> {
    return this.partes2Repository.find(filter);
  }

  @patch('/partes2s')
  @response(200, {
    description: 'Partes2 PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partes2, {partial: true}),
        },
      },
    })
    partes2: Partes2,
    @param.where(Partes2) where?: Where<Partes2>,
  ): Promise<Count> {
    return this.partes2Repository.updateAll(partes2, where);
  }

  @get('/partes2s/{id}')
  @response(200, {
    description: 'Partes2 model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Partes2, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Partes2, {exclude: 'where'}) filter?: FilterExcludingWhere<Partes2>
  ): Promise<Partes2> {
    return this.partes2Repository.findById(id, filter);
  }

  @patch('/partes2s/{id}')
  @response(204, {
    description: 'Partes2 PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Partes2, {partial: true}),
        },
      },
    })
    partes2: Partes2,
  ): Promise<void> {
    await this.partes2Repository.updateById(id, partes2);
  }

  @put('/partes2s/{id}')
  @response(204, {
    description: 'Partes2 PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() partes2: Partes2,
  ): Promise<void> {
    await this.partes2Repository.replaceById(id, partes2);
  }

  @del('/partes2s/{id}')
  @response(204, {
    description: 'Partes2 DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.partes2Repository.deleteById(id);
  }
}
