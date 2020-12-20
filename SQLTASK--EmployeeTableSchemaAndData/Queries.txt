1.) 
SELECT * from employee


FirstName	LastName	Title	Age	Salary	
John	Smith	Programmer	54	27000	
Leroy	Brooks	General Manager	55	40099	
John	Fanning	Programmer	28	35000	
Lisa	Moore	Programmer	27	35000	
Ginger	Finger	Fresher	22	31500	
Kelly	Brooks	Programmer	27	22000	
Shawn	Tait	Fresher	20	25000	
Michael	Tolstoy	Fresher	21	25000	
Anthony	Hopkins	Programmer	26	19500	



2.) 

SELECT FirstName,age,Salary from employee


FirstName	age	Salary	
John	54	27000	
Leroy	55	40099	
John	28	35000	
Lisa	27	35000	
Ginger	22	31500	
Kelly	27	22000	
Shawn	20	25000	
Michael	21	25000	
Anthony	26	19500	
Leroy	54	30000	
Mary Ann	32	32513	
Donald	35	19300	
Linda	35	25000	
Sarah	15	25000	
Kevin	40	32300	
Conrad	20	32300	
Isabela	38	30260	
Lisa	23	20000	
Ginger	10	22000	
Kelly	25	19000	
Shawn	26	22000	
Michael	24	21000	
Anthony	47	23000	
Mary Ann	27	37570	
Donald	34	31000	


3.) 
127.0.0.1/employee/employee/		http://localhost/phpmyadmin/tbl_sql.php?db=employee&table=employee
 Showing rows 0 - 24 (60 total, Query took 0.0024 seconds.)

SELECT FirstName AS Name from employee


Name	
John	
Leroy	
John	
Lisa	
Ginger	
Kelly	
Shawn	
Michael	
Anthony	
Leroy	
Mary Ann	
Donald	
Linda	
Sarah	
Kevin	
Conrad	
Isabela	
Lisa	
Ginger	
Kelly	
Shawn	
Michael	
Anthony	
Mary Ann	
Donald	

4.)

SELECT CONCAT(FirstName,' ',LastName) AS Name from employee


Name	
John Smith	
Leroy Brooks	
John Fanning	
Lisa Moore	
Ginger Finger	
Kelly Brooks	
Shawn Tait	
Michael Tolstoy	
Anthony Hopkins	
Leroy Miles	
Mary Ann Moore	
Donald Duck	
Linda Hamilton	
Sarah Karan	
Kevin Peitersen	
Conrad Whales	
Isabela Karan	
Lisa Logan	
Ginger Gran	
Kelly Shield	
Shawn Bichel	
Michael Stone	
Anthony Groove	
Mary Ann Vista	
Donald Bang	

5.)

SELECT * from employee WHERE Salary>38000


FirstName	LastName	Title	Age	Salary	
Leroy	Brooks	General Manager	55	40099	
Leroy	Garten	Programmer	55	40099	

6.)

SELECT FirstName,LastName from employee WHERE Age<24


FirstName	LastName	
Ginger	Finger	
Shawn	Tait	
Michael	Tolstoy	
Sarah	Karan	
Conrad	Whales	
Lisa	Logan	
Ginger	Gran	
Ginger	Brown	
Shawn	Sons	
Michael	Mitchell	
Sarah	Jones	
Lisa	Hammer	
Ginger	Gold	

7.)

SELECT FirstName,LastName,Salary from employee WHERE Title LIKE '%Programmer%'


FirstName	LastName	Salary	
John	Smith	27000	
John	Fanning	35000	
Lisa	Moore	35000	
Kelly	Brooks	22000	
Anthony	Hopkins	19500	
Donald	Duck	19300	
Kevin	Peitersen	32300	
Isabela	Karan	30260	
Lisa	Logan	20000	
Kelly	Shield	19000	
Mary Ann	Vista	37570	
Kevin	Luther	33000	
Isabela	Tauton	32500	
John	Vaughan	27000	
Leroy	Garten	40099	
John	Whitaker	32000	
Lisa	Merci	35000	
Kelly	Alba	22000	
Anthony	Bravo	19500	
Mary Ann	Dolce	32513	
Donald	Bus	19300	
Isabela	Apple	30260	
Lisa	Hammer	20000	
Kelly	Rise	19000	
Anthony	Tamahori	23000	

8.)

SELECT * from employee WHERE LastName LIKE '%O%'


FirstName	LastName	Title	Age	Salary	
Leroy	Brooks	General Manager	55	40099	
Lisa	Moore	Programmer	27	35000	
Kelly	Brooks	Programmer	27	22000	
Michael	Tolstoy	Fresher	21	25000	
Anthony	Hopkins	Programmer	26	19500	
Mary Ann	Moore	Software Engineer	32	32513	
Linda	Hamilton	Fresher	35	25000	
Lisa	Logan	Programmer	23	20000	
Michael	Stone	Fresher	24	21000	
Anthony	Groove	Software Engineer	47	23000	
Sarah	Bones	Fresher	51	32000	
Isabela	Tauton	Programmer	25	32500	
Ginger	Brown	Software Engineer	20	25000	
Shawn	Sons	Fresher	20	25000	
Anthony	Bravo	Programmer	26	19500	
Mary Ann	Dolce	Programmer	32	32513	
Linda	Scott	Fresher	35	25000	
Sarah	Jones	Fresher	15	25000	
Ginger	Gold	Fresher	10	22000	
Michael	Moore	Fresher	24	21000	
Anthony	Tamahori	Programmer	84	23000	
Mary Ann	Horn	Programmer	27	37570	
Linda	Josh	Fresher	42	34000	
Kevin	Long	Programmer	45	33000	
Conrad	Tamahori	Software Engineer	24	31500	

9.)
SELECT LastName from employee WHERE FirstName LIKE 'KELLY'

LastName	
Brooks	
Shield	
Alba	
Rise	

10.)
SELECT * from employee WHERE LastName LIKE '%Moore'


FirstName	LastName	Title	Age	Salary	
Lisa	Moore	Programmer	27	35000	
Mary Ann	Moore	Software Engineer	32	32513	
Michael	Moore	Fresher	24	21000	
Isabela	Moore	Programmer	25	32500	

11.)
SELECT * from employee WHERE Age>=35


FirstName	LastName	Title	Age	Salary	
John	Smith	Programmer	54	27000	
Leroy	Brooks	General Manager	55	40099	
Leroy	Miles	General Manager	54	30000	
Donald	Duck	Programmer	35	19300	
Linda	Hamilton	Fresher	35	25000	
Kevin	Peitersen	Programmer	40	32300	
Isabela	Karan	Programmer	38	30260	
Anthony	Groove	Software Engineer	47	23000	
Linda	Hamser	Fresher	42	34000	
Sarah	Bones	Fresher	51	32000	
Kevin	Luther	Programmer	45	33000	
Leroy	Garten	Programmer	55	40099	
Leroy	Kings	General Manager	54	30000	
Donald	Bus	Programmer	35	19300	
Linda	Scott	Fresher	35	25000	
Kevin	Reese	Software Engineer	40	32300	
Conrad	Turtle	Software Engineer	40	25000	
Isabela	Apple	Programmer	38	30260	
Anthony	Tamahori	Programmer	84	23000	
Linda	Josh	Fresher	42	34000	
Sarah	Michael	Fresher	51	32000	
Kevin	Long	Programmer	45	33000	


12.)SELECT * from employee WHERE Age BETWEEN 24 AND 43


FirstName	LastName	Title	Age	Salary	
John	Fanning	Programmer	28	35000	
Lisa	Moore	Programmer	27	35000	
Kelly	Brooks	Programmer	27	22000	
Anthony	Hopkins	Programmer	26	19500	
Mary Ann	Moore	Software Engineer	32	32513	
Donald	Duck	Programmer	35	19300	
Linda	Hamilton	Fresher	35	25000	
Kevin	Peitersen	Programmer	40	32300	
Isabela	Karan	Programmer	38	30260	
Kelly	Shield	Programmer	25	19000	
Shawn	Bichel	Fresher	26	22000	
Michael	Stone	Fresher	24	21000	
Mary Ann	Vista	Programmer	27	37570	
Donald	Bang	Fresher	34	31000	
Linda	Hamser	Fresher	42	34000	
Conrad	Marss	Fresher	24	31500	
Isabela	Tauton	Programmer	25	32500	
John	Vaughan	Programmer	25	27000	
John	Whitaker	Programmer	25	32000	
Lisa	Merci	Programmer	27	35000	
Kelly	Alba	Programmer	27	22000	
Anthony	Bravo	Programmer	26	19500	
Mary Ann	Dolce	Programmer	32	32513	
Donald	Bus	Programmer	35	19300	
Linda	Scott	Fresher	35	25000	


13.)SELECT FirstName,Title,LastName from employee WHERE Salary >31250 AND Age BETWEEN 28 AND 62

FirstName	Title	LastName	
Leroy	General Manager	Brooks	
John	Programmer	Fanning	
Mary Ann	Software Engineer	Moore	
Kevin	Programmer	Peitersen	
Linda	Fresher	Hamser	
Sarah	Fresher	Bones	
Kevin	Programmer	Luther	
Leroy	Programmer	Garten	
Mary Ann	Programmer	Dolce	
Kevin	Software Engineer	Reese	
Linda	Fresher	Josh	
Sarah	Fresher	Michael	
Kevin	Programmer	Long	


14.)SELECT * from employee WHERE Age <48 and Salary>=21520

FirstName	LastName	Title	Age	Salary	
John	Fanning	Programmer	28	35000	
Lisa	Moore	Programmer	27	35000	
Ginger	Finger	Fresher	22	31500	
Kelly	Brooks	Programmer	27	22000	
Shawn	Tait	Fresher	20	25000	
Michael	Tolstoy	Fresher	21	25000	
Mary Ann	Moore	Software Engineer	32	32513	
Linda	Hamilton	Fresher	35	25000	
Sarah	Karan	Fresher	15	25000	
Kevin	Peitersen	Programmer	40	32300	
Conrad	Whales	Software Engineer	20	32300	
Isabela	Karan	Programmer	38	30260	
Ginger	Gran	Fresher	10	22000	
Shawn	Bichel	Fresher	26	22000	
Anthony	Groove	Software Engineer	47	23000	
Mary Ann	Vista	Programmer	27	37570	
Donald	Bang	Fresher	34	31000	
Linda	Hamser	Fresher	42	34000	
Kevin	Luther	Programmer	45	33000	
Conrad	Marss	Fresher	24	31500	
Isabela	Tauton	Programmer	25	32500	
John	Vaughan	Programmer	25	27000	
John	Whitaker	Programmer	25	32000	
Lisa	Merci	Programmer	27	35000	
Ginger	Brown	Software Engineer	20	25000	


15.)SELECT FirstName,Age from employee WHERE Salary BETWEEN 25000 AND 35000 AND FirstName LIKE 'John%'


FirstName	Age	
John	54	
John	28	
John	25	
John	25	


16.)SELECT * from employee ORDER BY Age DESC


FirstName	LastName	Title	Age   	Salary	
Anthony	Tamahori	Programmer	84	23000	
Leroy	Brooks	General Manager	55	40099	
Leroy	Garten	Programmer	55	40099	
John	Smith	Programmer	54	27000	
Leroy	Kings	General Manager	54	30000	
Leroy	Miles	General Manager	54	30000	
Sarah	Bones	Fresher	51	32000	
Sarah	Michael	Fresher	51	32000	
Anthony	Groove	Software Engineer	47	23000	
Kevin	Luther	Programmer	45	33000	
Kevin	Long	Programmer	45	33000	
Linda	Hamser	Fresher	42	34000	
Linda	Josh	Fresher	42	34000	
Conrad	Turtle	Software Engineer	40	25000	
Kevin	Peitersen	Programmer	40	32300	
Kevin	Reese	Software Engineer	40	32300	
Isabela	Apple	Programmer	38	30260	
Isabela	Karan	Programmer	38	30260	
Donald	Bus	Programmer	35	19300	
Linda	Scott	Fresher	35	25000	
Linda	Hamilton	Fresher	35	25000	
Donald	Duck	Programmer	35	19300	
Donald	Crank	Programmer	34	31000	
Donald	Bang	Fresher	34	31000	
Mary Ann	Dolce	Programmer	32	32513	


17.)SELECT * from employee ORDER BY Age ASC


FirstName	LastName	Title	Age   	Salary	
Ginger	Gran	Fresher	10	22000	
Ginger	Gold	Fresher	10	22000	
Sarah	Jones	Fresher	15	25000	
Sarah	Karan	Fresher	15	25000	
Conrad	Whales	Software Engineer	20	32300	
Shawn	Tait	Fresher	20	25000	
Ginger	Brown	Software Engineer	20	25000	
Shawn	Sons	Fresher	20	25000	
Michael	Mitchell	Fresher	21	25000	
Michael	Tolstoy	Fresher	21	25000	
Ginger	Finger	Fresher	22	31500	
Lisa	Hammer	Programmer	23	20000	
Lisa	Logan	Programmer	23	20000	
Michael	Stone	Fresher	24	21000	
Michael	Moore	Fresher	24	21000	
Conrad	Tamahori	Software Engineer	24	31500	
Conrad	Marss	Fresher	24	31500	
Isabela	Moore	Programmer	25	32500	
John	Vaughan	Programmer	25	27000	
Kelly	Shield	Programmer	25	19000	
John	Whitaker	Programmer	25	32000	
Isabela	Tauton	Programmer	25	32500	
Kelly	Rise	Programmer	25	19000	
Shawn	Bichel	Fresher	26	22000	
Anthony	Hopkins	Programmer	26	19500	


18.)
SELECT * from employee ORDER BY Salary DESC


FirstName	LastName	Title	Age	Salary   	
Leroy	Brooks	General Manager	55	40099	
Leroy	Garten	Programmer	55	40099	
Mary Ann	Horn	Programmer	27	37570	
Mary Ann	Vista	Programmer	27	37570	
John	Fanning	Programmer	28	35000	
Lisa	Moore	Programmer	27	35000	
Lisa	Merci	Programmer	27	35000	
Linda	Josh	Fresher	42	34000	
Linda	Hamser	Fresher	42	34000	
Kevin	Long	Programmer	45	33000	
Kevin	Luther	Programmer	45	33000	
Mary Ann	Moore	Software Engineer	32	32513	
Mary Ann	Dolce	Programmer	32	32513	
Isabela	Tauton	Programmer	25	32500	
Isabela	Moore	Programmer	25	32500	
Kevin	Peitersen	Programmer	40	32300	
Kevin	Reese	Software Engineer	40	32300	
Conrad	Whales	Software Engineer	20	32300	
John	Whitaker	Programmer	25	32000	
Sarah	Bones	Fresher	51	32000	
Sarah	Michael	Fresher	51	32000	
Conrad	Tamahori	Software Engineer	24	31500	
Ginger	Finger	Fresher	22	31500	
Conrad	Marss	Fresher	24	31500	
Donald	Crank	Programmer	34	31000	


19.)SELECT * from employee ORDER BY Salary ASC


FirstName	LastName	Title	Age	Salary   	
Kelly	Rise	Programmer	25	19000	
Kelly	Shield	Programmer	25	19000	
Donald	Bus	Programmer	35	19300	
Donald	Duck	Programmer	35	19300	
Anthony	Hopkins	Programmer	26	19500	
Anthony	Bravo	Programmer	26	19500	
Lisa	Logan	Programmer	23	20000	
Lisa	Hammer	Programmer	23	20000	
Michael	Moore	Fresher	24	21000	
Michael	Stone	Fresher	24	21000	
Ginger	Gran	Fresher	10	22000	
Shawn	Bichel	Fresher	26	22000	
Shawn	Bell	Fresher	26	22000	
Kelly	Alba	Programmer	27	22000	
Kelly	Brooks	Programmer	27	22000	
Ginger	Gold	Fresher	10	22000	
Anthony	Tamahori	Programmer	84	23000	
Anthony	Groove	Software Engineer	47	23000	
Linda	Scott	Fresher	35	25000	
Shawn	Tait	Fresher	20	25000	
Linda	Hamilton	Fresher	35	25000	
Ginger	Brown	Software Engineer	20	25000	
Conrad	Turtle	Software Engineer	40	25000	
Shawn	Sons	Fresher	20	25000	
Sarah	Karan	Fresher	15	25000	



20.)
SELECT * from employee WHERE Age>=17 ORDER BY Salary ASC


FirstName	LastName	Title	Age	Salary   	
Kelly	Shield	Programmer	25	19000	
Kelly	Rise	Programmer	25	19000	
Donald	Duck	Programmer	35	19300	
Donald	Bus	Programmer	35	19300	
Anthony	Hopkins	Programmer	26	19500	
Anthony	Bravo	Programmer	26	19500	
Lisa	Logan	Programmer	23	20000	
Lisa	Hammer	Programmer	23	20000	
Michael	Stone	Fresher	24	21000	
Michael	Moore	Fresher	24	21000	
Shawn	Bichel	Fresher	26	22000	
Shawn	Bell	Fresher	26	22000	
Kelly	Alba	Programmer	27	22000	
Kelly	Brooks	Programmer	27	22000	
Anthony	Tamahori	Programmer	84	23000	
Anthony	Groove	Software Engineer	47	23000	
Conrad	Turtle	Software Engineer	40	25000	
Michael	Mitchell	Fresher	21	25000	
Linda	Scott	Fresher	35	25000	
Linda	Hamilton	Fresher	35	25000	
Shawn	Tait	Fresher	20	25000	
Michael	Tolstoy	Fresher	21	25000	
Shawn	Sons	Fresher	20	25000	
Ginger	Brown	Software Engineer	20	25000	
John	Vaughan	Programmer	25	27000	



21.)
SELECT * from employee WHERE Age<34 ORDER BY Salary DESC


FirstName	LastName	Title	Age	Salary   	
Mary Ann	Horn	Programmer	27	37570	
Mary Ann	Vista	Programmer	27	37570	
John	Fanning	Programmer	28	35000	
Lisa	Moore	Programmer	27	35000	
Lisa	Merci	Programmer	27	35000	
Mary Ann	Moore	Software Engineer	32	32513	
Mary Ann	Dolce	Programmer	32	32513	
Isabela	Tauton	Programmer	25	32500	
Isabela	Moore	Programmer	25	32500	
Conrad	Whales	Software Engineer	20	32300	
John	Whitaker	Programmer	25	32000	
Conrad	Tamahori	Software Engineer	24	31500	
Conrad	Marss	Fresher	24	31500	
Ginger	Finger	Fresher	22	31500	
John	Vaughan	Programmer	25	27000	
Shawn	Tait	Fresher	20	25000	
Michael	Mitchell	Fresher	21	25000	
Sarah	Karan	Fresher	15	25000	
Sarah	Jones	Fresher	15	25000	
Michael	Tolstoy	Fresher	21	25000	
Shawn	Sons	Fresher	20	25000	
Ginger	Brown	Software Engineer	20	25000	
Kelly	Brooks	Programmer	27	22000	
Ginger	Gran	Fresher	10	22000	
Shawn	Bell	Fresher	26	22000	


22.)
SELECT * from employee ORDER BY length(FirstName) ASC


FirstName	LastName	Title	Age	Salary	
John	Smith	Programmer	54	27000	
John	Vaughan	Programmer	25	27000	
Lisa	Logan	Programmer	23	20000	
John	Whitaker	Programmer	25	32000	
Lisa	Merci	Programmer	27	35000	
Lisa	Moore	Programmer	27	35000	
John	Fanning	Programmer	28	35000	
Lisa	Hammer	Programmer	23	20000	
Kevin	Luther	Programmer	45	33000	
Shawn	Bichel	Fresher	26	22000	
Kelly	Shield	Programmer	25	19000	
Shawn	Sons	Fresher	20	25000	
Kevin	Peitersen	Programmer	40	32300	
Sarah	Karan	Fresher	15	25000	
Linda	Hamilton	Fresher	35	25000	
Leroy	Brooks	General Manager	55	40099	
Kelly	Alba	Programmer	27	22000	
Kelly	Brooks	Programmer	27	22000	
Shawn	Tait	Fresher	20	25000	
Linda	Scott	Fresher	35	25000	
Leroy	Garten	Programmer	55	40099	
Leroy	Miles	General Manager	54	30000	
Sarah	Bones	Fresher	51	32000	
Sarah	Jones	Fresher	15	25000	
Linda	Hamser	Fresher	42	34000	


23.)
Your SQL query has been executed successfully.

SELECT COUNT(*) as NumberOfEmployees from employee WHERE Age>45


NumberOfEmployees
9	

24.)
SELECT FirstName,LastName,Title,(Age+5) as Age,(Salary-250) as Salary from employee


FirstName	LastName	Title	Age	Salary	
John	Smith	Programmer	59	26750	
Leroy	Brooks	General Manager	60	39849	
John	Fanning	Programmer	33	34750	
Lisa	Moore	Programmer	32	34750	
Ginger	Finger	Fresher	27	31250	
Kelly	Brooks	Programmer	32	21750	
Shawn	Tait	Fresher	25	24750	
Michael	Tolstoy	Fresher	26	24750	
Anthony	Hopkins	Programmer	31	19250	
Leroy	Miles	General Manager	59	29750	
Mary Ann	Moore	Software Engineer	37	32263	
Donald	Duck	Programmer	40	19050	
Linda	Hamilton	Fresher	40	24750	
Sarah	Karan	Fresher	20	24750	
Kevin	Peitersen	Programmer	45	32050	
Conrad	Whales	Software Engineer	25	32050	
Isabela	Karan	Programmer	43	30010	
Lisa	Logan	Programmer	28	19750	
Ginger	Gran	Fresher	15	21750	
Kelly	Shield	Programmer	30	18750	
Shawn	Bichel	Fresher	31	21750	
Michael	Stone	Fresher	29	20750	
Anthony	Groove	Software Engineer	52	22750	
Mary Ann	Vista	Programmer	32	37320	
Donald	Bang	Fresher	39	30750	


25.)
SELECT Count(*) as NumberOfEmployees from employee WHERE LastName like '%re' OR LastName LIKE '%ri' or LastName like '%ks'


NumberOfEmployees
8	


26.)
SELECT AVG(Salary) from employee


AVG(Salary)
27898.0667	

27.)
SELECT AVG(Salary) from employee where Title like 'Fresher'



26476.1905	


28.)
SELECT AVG(Salary) from employee where Title like 'Programmer'



28143.8621	


29.)
SELECT AVG(Salary) from employee where age>=35 and age<50


28265.7143	


30.)
SELECT Count(*) from employee where Title LIKE 'Fresher'

21	


31.)SELECT Title,100*COUNT(*) /(SELECT Count(*) from employee) as Percentage from employee  group by Title HAVING Title LIKE "Programmer"


Engineer	48.3333	



32.)
SELECT SUM(Salary) from employee where age < 40


1173086	


33.)
SELECT SUM(Salary) from employee where title like 'Fresher' or Title like 'Programmer'


1372172	


34.)
SELECT (SUM(Salary)*36) from employee where title like 'Fresher' and age>27


7668000	


35.)
SELECT FirstName,LastName,Age from employee where Salary>=35000 ORDER BY Age desc LIMIT 1


FirstName	LastName	Age
Leroy	Brooks	55	

36.)
SELECT FirstName,LastName,Age from employee where title LIKE 'General Manager' ORDER BY Age ASC LIMIT 1


Leroy	Kings	54	

37.)
SELECT * from employee where title LIKE 'Fresher' and Salary<35000 ORDER BY Age DESC LIMIT 1


Sarah	Michael	Fresher	51	32000	


38.)
SELECT FirstName,Age from employee where FirstName LIKE 'John' or FirstName LIKE 'Michael' and Salary BETWEEN 17000 AND 26000


FirstName	Age	
John	54	
John	28	
Michael	21	
Michael	24	
John	25	
John	25	
Michael	21	
Michael	24	


39.)
SELECT Title,COUNT(*) AS NumberOfEmployees from employee GROUP BY Title ORDER BY NumberOfEmployees ASC


Title	NumberOfEmployees   	
General Manager	3	
Software Engineer	7	
Fresher	21	
Programmer	29	



40.)
SELECT Title,AVG(Salary) from employee GROUP BY Title


Title	AVG(Salary)	
Fresher	26476.1905	
General Manager	33366.3333	
Programmer	28143.8621	
Software Engineer	28801.8571	


41.)
SELECT AVG(Salary) from employee where Title Not LIKE 'Fresher'


28663.6923	


42.)
SELECT Title,AVG(Age) from employee GROUP BY Title

Title	AVG(Age)	
Fresher	27.0476	
General Manager	54.3333	
Programmer	33.5517	
Software Engineer	31.8571	


43.)
SELECT Title,COUNT(*) from employee where Age BETWEEN 25 and 40 GROUP BY Title


Title	COUNT(*)	
Fresher	5	
Programmer	22	
Software Engineer	3	


44.)
SELECT Title,AVG(Salary) AS Average from employee GROUP BY Title HAVING AVG(Salary)>25000


Title	Average	
Fresher	26476.1905	
General Manager	33366.3333	
Programmer	28143.8621	
Software Engineer	28801.8571	


45.)
SELECT Title,SUM(Age) from employee GROUP BY Title HAVING SUM(Age)>30


Title	SUM(Age)	
Fresher	568	
General Manager	163	
Programmer	973	
Software Engineer	223	



Update Queries : 

UPDATE employee Set LastName = 'Moore' where FirstName like 'Lisa' and LastName like 'Ray'


UPDATE employee
Set Age = Age + 1, Salary = Salary + 5000
where FirstName like 'Ginger' and LastName like 'Finger'

SELECT * from employee

FirstName	LastName	Title	Age	Salary	
John	Smith	Programmer	54	27000	
Leroy	Brooks	General Manager	55	40099	
John	Fanning	Programmer	28	35000	
Lisa	Moore	Programmer	27	35000	
Ginger	Finger	Fresher	23	36500	
Kelly	Brooks	Programmer	27	22000	
Shawn	Tait	Fresher	20	25000	
Michael	Tolstoy	Fresher	21	25000	
Anthony	Hopkins	Programmer	26	19500	
Leroy	Miles	General Manager	54	30000	
Mary Ann	Moore	Software Engineer	32	32513	
Donald	Duck	Programmer	35	19300	
Linda	Hamilton	Fresher	35	25000	
Sarah	Karan	Fresher	15	25000	
Kevin	Peitersen	Programmer	40	32300	
Conrad	Whales	Software Engineer	20	32300	
Isabela	Karan	Programmer	38	30260	
Lisa	Logan	Programmer	23	20000	
Ginger	Gran	Fresher	10	22000	
Kelly	Shield	Programmer	25	19000	
Shawn	Bichel	Fresher	26	22000	
Michael	Stone	Fresher	24	21000	
Anthony	Groove	Software Engineer	47	23000	
Mary Ann	Vista	Programmer	27	37570	
Donald	Bang	Fresher	34	31000	


Update employee
Set Title = 'Engineer'
where Title Like 'Programmer'


SELECT * from employee


FirstName	LastName	Title	Age	Salary	
John	Smith	Engineer	54	27000	
Leroy	Brooks	General Manager	55	40099	
John	Fanning	Engineer	28	35000	
Lisa	Moore	Engineer	27	35000	
Ginger	Finger	Fresher	23	36500	
Kelly	Brooks	Engineer	27	22000	
Shawn	Tait	Fresher	20	25000	
Michael	Tolstoy	Fresher	21	25000	
Anthony	Hopkins	Engineer	26	19500	
Leroy	Miles	General Manager	54	30000	
Mary Ann	Moore	Software Engineer	32	32513	
Donald	Duck	Engineer	35	19300	
Linda	Hamilton	Fresher	35	25000	
Sarah	Karan	Fresher	15	25000	
Kevin	Peitersen	Engineer	40	32300	
Conrad	Whales	Software Engineer	20	32300	
Isabela	Karan	Engineer	38	30260	
Lisa	Logan	Engineer	23	20000	
Ginger	Gran	Fresher	10	22000	
Kelly	Shield	Engineer	25	19000	
Shawn	Bichel	Fresher	26	22000	
Michael	Stone	Fresher	24	21000	
Anthony	Groove	Software Engineer	47	23000	
Mary Ann	Vista	Engineer	27	37570	
Donald	Bang	Fresher	34	31000	



UPDATE employee Set Salary = Salary + 3500 WHERE Salary<=30000

UPDATE employee Set Salary = 0.85*Salary WHERE Salary>35500




