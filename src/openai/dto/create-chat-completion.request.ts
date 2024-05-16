import { Type } from 'class-transformer';
import { IsArray, ValidateNested, IsNotEmpty, IsString } from 'class-validator';

export class CreateChatCompletionRequest {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatCompletionMessageDto)
  messages: ChatCompletionMessageDto[];
}

export class ChatCompletionMessageDto {
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
