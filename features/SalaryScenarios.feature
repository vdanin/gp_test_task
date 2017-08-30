Feature:  Payday


  Scenario :As a payroll accountant I should have ability to download report for current month
    Given: I log in into system as accountant
    When I open payroll reports page
    Then Payroll report page is displayed
    And I download latest report
    When report is downloaded
    Then it should contain dates when salaries and bonuses should be payed for current month


  Scenario: As a payroll accountant I can view calculated dates of salaries for sales employees
    Given: I log in into system as accountant
    When I open payroll reports page
    Then Payroll report page is displayed
    When I open report for current month
    Then report is displayed
    And I can see bonus pay date calculated for sales employees
    And bonus pay day should be 15 day of month if it is not weekend, otherwise - first Wednesday after 15th.
    And I can see salary pay date calculated for sales employees
    And salary pay date should be last weekday of the month.

  Scenario: As a payroll accountant I can view calculated dates of salaries for regular employees
    Given: I log in into system as accountant
    When I open payroll reports page
    Then Payroll report page is displayed
    When I open report for current month
    Then report is displayed
    And I can see salary pay date calculated for sales employees
    And salary pay date should be last weekday of the month.

  Scenario Outline: As a payroll accountant I should be able to create report for chosen month to receive dates when salaries and bonuses should be payed
    Given: I log in into system as accountant
    When I open payroll reports page
    Then Payroll report page is displayed
    When I choose <monthName> from month dropdown
    And click ‘Process’ button
    Then a report with selected month - <monthName> should be created
    Examples:
      | monthName |
      | January   |
      | February  |
      | March     |
      | April     |
      | May       |
      | June      |
      | July      |
      | August    |
      | September |
      | October   |
      | November  |
      | December  |