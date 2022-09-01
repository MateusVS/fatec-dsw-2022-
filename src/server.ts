import { StarWarsController } from './controllers/StarWarsController';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port=3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  public setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  public setupController(): void {
    const starWarsController = new StarWarsController();
    this.addControllers(starWarsController);
  }

  public getApp(): Application {
    return this.app;
  }
}
