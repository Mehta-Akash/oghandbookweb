export type SignupFormValues = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type LoginFormValues = Omit<SignupFormValues, 'repeatPassword'>;

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
