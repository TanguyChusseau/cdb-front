import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [ {
      id: 0,
      name: 'Daiquiri',
    },
      {
        id: 1,
        name: 'Piña Colada',
      },
      {
        id: 2,
        name: 'Mojito',
      } ]
    return { 'companies': companies };
  }
}
