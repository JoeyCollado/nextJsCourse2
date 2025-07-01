//codes here only run on the client side

import 'server-only';

export const add = (a:number, b:number) => a + b;

export const subtract = (a:number, b:number) => a - b;

//npm i server-only = package that makes any code usable in server only
//npm i client-only = package that makes any code usable in client only