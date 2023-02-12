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
