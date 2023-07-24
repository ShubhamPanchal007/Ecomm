import { SetMetadata } from "@nestjs/common";
import {role} from "../../../utils/utils.enum"

export const hasRoles = (...roles:role[]) => SetMetadata("userRoles",roles)