Feature: LOGOUT AND PLACE ORDER DEMOBLAZE

Scenario: John logout his user
    # Given ==> Arrange, When ==> Act, Then ==> assert
    Given john login user
    When john logout user
    Then john sucessfully logout his user 


Scenario: Budi doing place the order  
    Given Budi login user
    When Budi choose 2 item and put in the cart
    Then Budi sucessfully place the order 