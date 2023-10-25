import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { BearerModel } from "../../models/auth/token/bearer.model";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as BearerModel;
  }
);
