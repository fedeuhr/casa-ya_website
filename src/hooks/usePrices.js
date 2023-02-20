export const usePrices = (modelos) => {
  let preciosTotal = [];

  const PRECIOS = {
    casaPack: {
      superficieCubierta: {
        unaPlanta: 31600,
      },
      superficieSemicubierta: {
        unaPlanta: 29000,
      },
    },
    casaPro: {
      superficieCubierta: {
        unaPlanta: 51600,
      },
      superficieSemicubierta: {
        unaPlanta: 29000,
      },
    },
    casaMix: {
      superficieCubierta: {
        unaPlanta: 57000,
      },
      superficieSemicubierta: {
        unaPlanta: 29000,
      },
    },
  };

  modelos.forEach((modelo) => {
    let precioTotal;
    let entrega;
    let restoCuotas;
    let precioCuota;

    switch (modelo?.cantidadDePlantas) {
      case 1:
        precioTotal =
          PRECIOS[modelo?.usePrices].superficieCubierta.unaPlanta *
            modelo.superficies.superficieCubierta +
          PRECIOS[modelo?.usePrices].superficieSemicubierta.unaPlanta *
            modelo.superficies.superficieSemicubierta;

        entrega = Math.round(precioTotal * modelo.porcentajeDeEntrega);

        restoCuotas = precioTotal - entrega;
        precioCuota = Math.round(restoCuotas / modelo.cantidadDeCuotas);

        preciosTotal.push([entrega, precioCuota]);
        break;

      case 2:
        precioTotal =
          PRECIOS[modelo?.usePrices].superficieCubierta.dosPlanta *
            modelo.superficies.superficieCubierta +
          PRECIOS[modelo?.usePrices].superficieSemicubierta.dosPlanta *
            modelo.superficies.superficieSemicubierta;

        entrega = Math.round(precioTotal * modelo.porcentajeDeEntrega);

        restoCuotas = precioTotal - entrega;
        precioCuota = Math.round(restoCuotas / modelo.cantidadDeCuotas);

        preciosTotal.push([entrega, precioCuota]);
        break;

      default:
        break;
    }
  });
  return preciosTotal;
};
