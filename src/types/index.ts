import { Prisma } from "@prisma/client";
export interface ISidebarLink {
  label: string;
  icon: string;
  link: string;
}

export interface IUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface IRegisterCredentials {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export type ISignInCredentials = Pick<
  IRegisterCredentials,
  "email" | "password"
>;

export type Task = Prisma.TaskGetPayload<Prisma.TaskArgs>;
