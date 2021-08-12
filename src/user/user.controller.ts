import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('/user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.appService.create(data);
  }

  @Get('/:id')
  async read(@Param('id') id: number) {
    return this.appService.read(id);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: UpdateUserDto) {
    return this.appService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return this.appService.delete(id);
  }
}
