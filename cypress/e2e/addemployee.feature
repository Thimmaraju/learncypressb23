Feature: Verify add employee functionality

  Add employee positive and nagative tests

  Background: Navigate Add employee page
    Given User Launch the Application
    When User enter username "Admin" and password as "admin123"
    And  User clicks on login button
    Then User navigated to dashbaord page
    When User clicks on PIM
    And  User clicks on Add employee submenu

  @raju @regression
  Scenario: Verify Add Employee error message for Mandotory fields

    And User clicks on save button
    Then User should get error message for firstname and lastnamefields

  #@focus
  # Scenario: Verify Add Employee all the deatils

  #   And User enter firstname "Raju"
  #   And User enter lastname "G"
  #   And User enter own EmployeeiD
  #   And User clicks on save button
  #   Then User get success message


  Scenario Outline: Verify Add Employee all the deatils

    And User enter firstname "<firstname>"
    And User enter lastname "<lastname>"
    And User enter own EmployeeiD
    And User clicks on save button
    Then User get success message

    Examples:
      | firstname | lastname |
      | Ravi      | xyz      |
      | Pavn      | KB       |
      | Raju      | G        |
