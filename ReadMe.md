Readme for Grand Parade (sorry no comments in code)
==============

How to:
--------------

1. npm install
2. use chrome driver
3. for reporting use 'grunt cucumberjs'
4. report will be generated to /my_report.html

Defect:
--------------
**Calculator unable to process values with 10 or more digits in pounds field.**

1. goto http://www.nationalarchives.gov.uk/currency/results.asp#mid
2. input `12345678910` value to pounds field
3. choose '1970' value from year dropdown.
4. Click 'submit' button

Expected result:
result message should appear -  ' 1970, £12,234,567,891 0s 0d would have the same spending worth of 2005's £122,691,357,919.48

Actual result:
result message appears -  In 1970, £12,345,678,910 0s 0d would have the same spending worth of 2005's £0.00

Exploratory testing notes:
--------------
1.Input 1p,1s, 1d and click submit button
2.choose first and last value from year dropdown
3.input 0XX0p,0s,1d values
4.input 00p,0XX0s,0d values
5.input 00p,00s,0XX0d values
6.input negative values
7.input letters
8.input symbols
9.input 6 digit values
10.input 9 digit values
11.input 10 digit values
12.input 11 digit values


Email:
--------------
Hello Mark,

I've been analysing our user story 328, but was unable to find any features related to price change for that story.
I can see there are scenarios for  Free shipping in Australia/No free shipping outside Australia
But none of them actually have statements related to functionality of price change when user observes his cart.
Can you please clarify me on this?
Probably this is something that we should discuss with Janet and Dave as they are business owners?

Kind regards,
Vladyslav Danin.
Beautiful-Tea QA team.









