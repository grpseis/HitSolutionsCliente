export class Platos {
  _id?: number;
  name: string;
  principal: string;
  farinacea: string;
  tuberculos: string;
  verdura: string;
  precio: number;

  constructor(name: string,
              principal: string,
              farinacea: string,
              tuberculos: string,
              verdura: string,
              precio: number) {
    this.name = name;
    this.principal = principal;
    this.farinacea = farinacea;
    this.tuberculos = tuberculos;
    this.verdura = verdura;
    this.precio = precio;
  }

}
