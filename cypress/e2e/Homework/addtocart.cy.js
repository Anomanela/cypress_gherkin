describe ('Skenario add to cart Blaze app',() => {
    it('Berhasil menambahkan suatu item ke cart',() => {
        cy.visit('https://www.demoblaze.com/index.html')

        // click link text login
        cy.get ("[data-target='#logInModal']"). click()
        cy.get ("[onclick='logIn()']"). should('be.visible')
        cy.wait(1000)

        //fill username password
        cy.get ("#loginusername").type ('wibowo.bullseye').should('have.value', 'wibowo.bullseye')
        cy.get ("#loginpassword").type ('bullseye').should ('have.value', 'bullseye')

        //click login button
        cy.get ("[onclick='logIn()']").click()

        //assert homescreen
        cy.get ("#nameofuser").should ('contain', 'wibowo.bullseye')

       
        
        //pilih salah satu hp dan click add to cart
        cy.get ("#tbodyid > div:nth-of-type(5) .hrefch").click()
        cy.wait(1000)
        cy.get (".btn-success").click()
        cy.wait(3000)

        // go to cart
        cy.get ("#cartur").click()

        // //assert masuk menu cart
        cy.get ("#tbodyid > tr:nth-of-type(1) > td:nth-of-type(2)").should('contain', 'Iphone 6 32gb')
        cy.wait(5000)

    }) 
      
        
})
