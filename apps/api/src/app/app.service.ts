import { Injectable } from '@nestjs/common';
import { Message } from '@guess-the-movie/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
