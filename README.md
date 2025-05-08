## Consigna

1) Armar un servidor que reciba solicitudes del tipo "Post" en un endpoint llamado "\operaciones"

2) En el Body debe recibir el siguiente JSON [ejemplo](ejemplo.json)

3) Las funciones que deber sorportar el endpoint son:
* suma
* resta
* div
* mult
* resto

4) La respuesta que debe dar es la siguiente:

``` json
[
  {
    op1:3,
    op2: 4,
    fn: "multi",
    result: 12
  },
  {
    op1: 5,
    op2: 6,
    fn: "suma",
    result: 11
  }
]
```
