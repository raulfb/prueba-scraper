const { chromium } = require('playwright')

// scraper()
;(async()=>{
    // const browser = await chromium.launch({headless:false});//para visualizar lo que hace
    const browser = await chromium.launch({headless:false});
    const page = await browser.newPage();
    
    // Capturas de pantalla
    // await page.goto("https://github.com");
    // const screenshot= await page.screenshot({path:"screenshot.png"});
    // if(screenshot){
    //     console.log("Captura de pantalla realizada");
    // }else{
    //     console.log("No ha podido realizar la captura de pantalla");
    // }
    
    // Autenticacion
    // await page.goto("https:/dominio.es/login");
    // await page.locator('input[name="log"]').fill("Usuario");
    // await page.locator('input[name="pwd"]').fill(".Prueba.");
    // await page.locator('input=[type="submit"]').click();


    await page.close();
    await browser.close();
}
)()