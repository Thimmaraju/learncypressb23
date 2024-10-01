Feature: Verify Login functionality


Scenario: Verify login with valid Credentials
  Given Based on the browser set viewport 
  Given User Launch the Application
  When User enter username "Admin" and password as "admin123"
  And  User clicks on login button 
  Then User navigated to dashbaord page 

Scenario: Verify login with valid username and Invalid password 
  Given User Launch the Application
  When User enter username "Admin" and password as "ergth"
  And  User clicks on login button 
  Then User should get login error message
@regression
Scenario: Verify login with invalid username and valid password 
  Given User Launch the Application
  When User enter username "hghfh" and password as "admin123"
  And  User clicks on login button 
  Then User should get login error message

Scenario: Verify login with invalid username and invalid password 
  Given User Launch the Application
  When User enter username "hghfh" and password as "erhgf"
  And  User clicks on login button 
  Then User should get login error message
