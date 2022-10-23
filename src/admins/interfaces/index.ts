export type AdminProps = {
  nombre: string;
  apellido: string;
  email: string;
};

export type Admin = AdminProps & {
  id: number;
  url: string;
};
