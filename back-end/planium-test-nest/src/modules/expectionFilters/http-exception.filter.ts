import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    if (exception.message === 'planoEscolhido not found') {
      return response.status(status).json({
        error: 'Plano escolhido não encontrado.',
      });
    }
    if (exception.message.startsWith('Não cumpre com o minimo de')) {
      return response.status(status).json({
        error: exception.message,
      });
    }

    if (exception.message) {
      return response.status(status).json({
        error: exception.message,
      });
    }

    return response.status(status).json({
      error: 'Erro interno do servidor.',
    });
  }
}
