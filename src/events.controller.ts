import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';

@Controller('/events')
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'Laravel' },
      { id: 2, name: 'Express' },
      { id: 3, name: 'Nest' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return [{ id, name: 'NestJs' }];
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    return input;
  }

  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {}

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {}
}
