import { test,expect } from '@playwright/test';

test('Token test', async ({ page }) => {

     const contexto = page.context()  /// separo el context de la page
     const requerimiento = contexto.request 

    const pidoToken= {
                       username:"institutoweb",
                       password:"cursoperformance"
                     }


    // llamo la api por post 
     const respuesta  = await requerimiento.post('https://cursotesting.com.ar:3000/token', 
      {data: pidoToken, Headers:{'Content-type':'application/josn'},})

    /// lo que recibo lo convierto en Json  
     const respuestaJson = await respuesta.json()
     
     
     console.log(respuesta)
     console.log("---")
     console.log(respuestaJson)
     console.log("---")
     console.log(respuestaJson.token)
     expect(respuesta.status()).toBe(200)
     expect(respuestaJson.token).not.toBe(undefined)

        });
