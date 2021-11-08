import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conn2',
  connector: 'mongodb',
  url: 'mongodb://dev:control1*@localhost:27017/autolote2',
  host: 'localhost',
  port: 27017,
  user: 'dev',
  password: 'control1*',
  database: 'autolote2',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Conn2DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conn2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conn2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
