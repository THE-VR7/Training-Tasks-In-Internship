"Displaying Max 10 rows only since the output coming are very large"

1.)
select FirstName,LastName from Employee Inner JOIN Orders on Employee.EmployeeID = Orders.EmployeeID where OrderDate between '1996-08-15' and '1997-08-15'; 

FirstName	LastName
Margaret	Peacock
Janet	Leverling
Margaret	Peacock
Nancy	Davolio
Laura	Callahan
Laura	Callahan
Margaret	Peacock
Robert	King
Laura	Callahan
Michael	Suyama


2.)  
select distinct(Employee.EmployeeID) from Employee Inner JOIN Orders on Employee.EmployeeID = Orders.EmployeeID where OrderDate < '1996-10-16'; 

EmployeeID
1
2
3
4
5
6
7
8
9

3.)
select SUM(Quantity) as 'TotalProducts' from OrderDetails Inner JOIN Orders on Orders.OrderID = OrderDetails.OrderID where OrderDate between '1997-01-13' and '1997-04-16'; 

TotalProducts
6009

4.)
select SUM(Quantity) as 'TotalProducts' from Employee as emp Inner Join Orders as ord on emp.EmployeeID = ord.EmployeeID Inner Join OrderDetails as orddet on ord.OrderID = orddet.OrderID where OrderDate between '1997-01-13' and '1997-04-16' and
 emp.FirstName like 'Anne' and emp.LastName like 'Dodsworth'; 
 
" Other Method"
select SUM(Quantity) as 'TotalProducts' from  OrderDetails Inner JOIN Orders on Orders.OrderID = OrderDetails.OrderID where OrderDate between '1997-01-13' and '1997-04-16' 
and EmployeeID in (Select EmployeeID from Employee where FirstName like 'Anne' and LastName like 'Dodsworth'); 
 
 TotalProducts
189

5.)
select COUNT(*) as Orders from Orders where EmployeeID in (Select EmployeeID from Employee where FirstName like 'Robert' and LastName like 'King'); 

Orders
72

6.)
select SUM(Quantity) as 'TotalProducts' from  OrderDetails Inner JOIN Orders on Orders.OrderID = OrderDetails.OrderID where OrderDate between '1997-01-13' and '1997-04-16' 
and EmployeeID in (Select EmployeeID from Employee where FirstName like 'Anne' and LastName like 'Dodsworth'); 

TotalProducts
164


7.)
select Distinct Employee.EmployeeID,CONCAT(FirstName,' ',LastName) as FullName,HomePhone from Employee Inner JOIN Orders on Employee.EmployeeID = Orders.EmployeeID where OrderDate between '1996-01-13' and '1997-04-16'; 

EmployeeID	FullName	HomePhone
1	Nancy Davolio	(206) 555-9857
2	Andrew Fuller	(206) 555-9482
3	Janet Leverling	(206) 555-3412
4	Margaret Peacock	(206) 555-8122
5	Steven Buchanan	(71) 555-4848
6	Michael Suyama	(71) 555-7773
7	Robert King	(71) 555-5598
8	Laura Callahan	(206) 555-1189
9	Anne Dodsworth	(71) 555-4444


8.)
select top 1 pr.ProductID,pr.ProductName,SUM(Quantity) from Products as pr 
Inner Join OrderDetails as ord on pr.ProductID = ord.ProductID group by pr.ProductName,pr.ProductID  order by Sum(Quantity) desc ;

ProductID	ProductName	(No column name)
60	Camembert Pierrot	1577


9.)
Select top 5 * from Products order by UnitsOnOrder asc, ReorderLevel asc, UnitsInStock desc; 

ProductID	ProductName	SupplierID	QuantityPerUnit	UnitPrice	UnitsInStock	UnitsOnOrder	ReorderLevel	Discontinued
46	Spegesild	21	4 - 450 g glasses	12.00	95	0	0	0
12	Queso Manchego La Pastora	5	10 - 500 g pkgs.	38.00	86	0	0	0
59	Raclette Courdavault	28	5 kg pkg.	55.00	79	0	0	0
65	Louisiana Fiery Hot Pepper Sauce	2	32 - 8 oz bottles	21.05	76	0	0	0
4	Chef Antons Cajun Seasoning	2	48 - 6 oz jars	22.00	53	0	0	0


10.)
select ((1 - Discount)*Quantity*UnitPrice) as 'TotalPrice' from  OrderDetails Inner JOIN Orders on Orders.OrderID = OrderDetails.OrderID where OrderDate = '1997-01-13' 
 and EmployeeID in (Select EmployeeID from Employee where FirstName like 'Laura' and LastName like 'Callahan'); 
 
 TotalPrice
334.8

11.)
Select Count(Distinct emp.EmployeeID) as 'NumberOfEmployees' from Employee as emp Inner Join Orders as ord on emp.EmployeeID = ord.employeeID where 
OrderID in 
(Select ord.OrderID from Orders as ord Inner Join OrderDetails as ordd on ord.OrderID = ordd.OrderID where OrderDate between '1997-01-01' and '1997-01-30' and
ProductID in 
(Select ProductID from Products where ProductName in ('Gorgonzola Telino','Gnocchi di nonna Alice','Raclette Courdavault','Camembert Pierrot')));1


"Other Method"
Select COUNT(Distinct EmployeeID) as 'Total Employees' from Orders as ord Inner Join OrderDetails as ordd on ord.OrderID = ordd.OrderID where month(OrderDate)='1' and year(OrderDate)='1997' and
ProductID in 
(Select ProductID from Products where ProductName in ('Gorgonzola Telino','Gnocchi di nonna Alice','Raclette Courdavault','Camembert Pierrot'));

NumberOfEmployees
5

12.)
Select CONCAT(FirstName,' ',LastName) as 'Full Name' from Employee as emp Inner Join Orders as ord on emp.EmployeeID = ord.employeeID where 
OrderID in 
(Select ord.OrderID from Orders as ord Inner Join OrderDetails as ordd on ord.OrderID = ordd.OrderID where OrderDate between '1997-01-13' and '1997-01-30' and
ProductID in 
(Select ProductID from Products where ProductName = 'Tofu'));


Full Name
Laura Callahan
Margaret Peacock

13.)
select Distinct Employee.EmployeeID,CONCAT(FirstName,' ',LastName) as FullName, BirthDate,
Cast(DATEDIFF(m,BirthDate,GETDATE())/12 as varchar) + ' Years & ' 
+ Cast(DATEDIFF(m,BirthDate,GETDATE())%12 as varchar) + ' Months & ' 
+ Cast(DATEDIFF(d,BirthDate,GETDATE())%30 as varchar) + ' Days ' 
as Age
from Employee Inner JOIN Orders on Employee.EmployeeID = Orders.EmployeeID
where month(OrderDate) = '08'; 

EmployeeID	FullName	BirthDate	Age
1	Nancy Davolio	1948-12-08 00:00:00.000	72 Years & 0 Months & 11 Days 
2	Andrew Fuller	1952-02-19 00:00:00.000	68 Years & 10 Months & 13 Days 
3	Janet Leverling	1963-08-30 00:00:00.000	57 Years & 4 Months & 3 Days 
4	Margaret Peacock	1937-09-19 00:00:00.000	83 Years & 3 Months & 29 Days 
5	Steven Buchanan	1955-03-04 00:00:00.000	65 Years & 9 Months & 14 Days 
6	Michael Suyama	1963-07-02 00:00:00.000	57 Years & 5 Months & 2 Days 
7	Robert King	1960-05-29 00:00:00.000	60 Years & 7 Months & 21 Days 
8	Laura Callahan	1958-01-09 00:00:00.000	62 Years & 11 Months & 22 Days 
9	Anne Dodsworth	1966-01-27 00:00:00.000	54 Years & 11 Months & 22 Days 



14.)
select CompanyName,count(OrderID) as Orders 
from Shippers as sh 
inner join Orders as ord on sh.ShipperID = ord.ShipperID group by CompanyName;

CompanyName	Orders
Federal Shipping	255
Speedy Express	249
United Package	326

15.)
select CompanyName,Sum(Quantity) as Products
from Shippers as sh 
inner join Orders as ord on sh.ShipperID = ord.ShipperID
inner join OrderDetails as ordd on ordd.OrderID = ord.OrderID
group by CompanyName;

CompanyName	Products
United Package	19945
Federal Shipping	15453
Speedy Express	15919


16.)
select top 1 sh.ShipperID,CompanyName,count(OrderID) as Orders 
from Shippers as sh 
inner join Orders as ord on sh.ShipperID = ord.ShipperID group by CompanyName,sh.ShipperID order by count(OrderID) desc;

CompanyName	Orders
United Package	326

17.)
select Top 1 CompanyName,Sum(Quantity) as Products
from Shippers as sh 
inner join Orders as ord on sh.ShipperID = ord.ShipperID
inner join OrderDetails as ordd on ordd.OrderID = ord.OrderID where OrderDate between '1996-08-10' and '1998-09-20' 
group by CompanyName Order by Sum(Quantity) desc;

CompanyName	Products
United Package	19460


18.)
select * from Employee 
where EmployeeID not in 
(Select EmployeeId from Orders where OrderDate = '1997-04-04'); 


EmployeeID	LastName	FirstName	Title	BirthDate	HireDate	Address	City	Region	PostalCode	Country	HomePhone
1	Davolio	Nancy	Sales Representative	1948-12-08 00:00:00.000	1992-05-01 00:00:00.000	507 - 20th Ave. E.  Apt. 2A	Seattle	WA	98122	USA	(206) 555-9857
2	Fuller	Andrew	Vice President, Sales	1952-02-19 00:00:00.000	1992-08-14 00:00:00.000	908 W. Capital Way	Tacoma	WA	98401	USA	(206) 555-9482
3	Leverling	Janet	Sales Representative	1963-08-30 00:00:00.000	1992-04-01 00:00:00.000	722 Moss Bay Blvd.	Kirkland	WA	98033	USA	(206) 555-3412
4	Peacock	Margaret	Sales Representative	1937-09-19 00:00:00.000	1993-05-03 00:00:00.000	4110 Old Redmond Rd.	Redmond	WA	98052	USA	(206) 555-8122
5	Buchanan	Steven	Sales Manager	1955-03-04 00:00:00.000	1993-10-17 00:00:00.000	14 Garrett Hill	London	NULL	SW1 8JR	UK	(71) 555-4848
6	Suyama	Michael	Sales Representative	1963-07-02 00:00:00.000	1993-10-17 00:00:00.000	Coventry House  Miner Rd.	London	NULL	EC2 7JR	UK	(71) 555-7773
8	Callahan	Laura	Inside Sales Coordinator	1958-01-09 00:00:00.000	1994-03-05 00:00:00.000	4726 - 11th Ave. N.E.	Seattle	WA	98105	USA	(206) 555-1189
9	Dodsworth	Anne	Sales Representative	1966-01-27 00:00:00.000	1994-11-15 00:00:00.000	7 Houndstooth Rd.	London	NULL	WG2 7LT	UK	(71) 555-4444


19.)
select Sum(Quantity) as NoOfProducts from Employee as emp
Inner join Orders as ord on emp.EmployeeID = ord.EmployeeID
Inner join OrderDetails as ordd on ordd.OrderID = ord.OrderID
where FirstName = 'Steven' and LastName = 'Buchanan';


NoOfProducts
3036

20.)
select COUNT(ord.OrderID) as 'NoOfOrders' from Employee as emp
inner join Orders as ord on emp.EmployeeID = ord.EmployeeID
inner join Shippers as sh on ord.ShipperID = sh.ShipperID
where emp.FirstName = 'Michael' and emp.LastName = 'Suyama' 
and sh.CompanyName = 'Federal Shipping';


NoOfOrders
19

21.)
select Count(Distinct ord.OrderID) as Orders from Orders as ord 
Inner Join OrderDetails as ordd on ord.OrderID = ordd.OrderID
Inner join Products as pd on pd.ProductID = ordd.ProductID
Inner Join Suppliers as sup on sup.SupplierID = pd.SupplierID
where sup.Country in ('UK','Germany');


Orders
385

22.) Can not get what question is trying to say




23.)
Select day(OrderDate) from Orders where month(OrderDate) = '1' and YEAR(OrderDate) = '1997' and OrderDate Not in (
Select OrderDate from Orders as ord
Inner Join OrderDetails ordd on ordd.OrderID = ord.OrderID
Inner Join Products as pr on pr.ProductID = ordd.ProductID
Inner Join Suppliers as sup on sup.SupplierID = pr.SupplierID
where sup.CompanyName = 'Tokyo Traders' and month(ord.OrderDate) = '1' and YEAR(OrderDate) = '1997'
);

(No column name)
1
1
2
3
3
6
7
7
8
9
10
10
13
14
14
15
16
16
20
22
23
23
24
27
27
28
29
30
30
31


24.)
Select * from Employee where EmployeeID not in (
Select EmployeeID from Orders as ord
Inner Join OrderDetails ordd on ordd.OrderID = ord.OrderID
Inner Join Products as pr on pr.ProductID = ordd.ProductID
Inner Join Suppliers as sup on sup.SupplierID = pr.SupplierID
where sup.CompanyName = 'Ma Maison' and month(ord.OrderDate) = '5'
);

EmployeeID	LastName	FirstName	Title	BirthDate	HireDate	Address	City	Region	PostalCode	Country	HomePhone
2	Fuller	Andrew	Vice President, Sales	1952-02-19 00:00:00.000	1992-08-14 00:00:00.000	908 W. Capital Way	Tacoma	WA	98401	USA	(206) 555-9482
3	Leverling	Janet	Sales Representative	1963-08-30 00:00:00.000	1992-04-01 00:00:00.000	722 Moss Bay Blvd.	Kirkland	WA	98033	USA	(206) 555-3412
4	Peacock	Margaret	Sales Representative	1937-09-19 00:00:00.000	1993-05-03 00:00:00.000	4110 Old Redmond Rd.	Redmond	WA	98052	USA	(206) 555-8122
6	Suyama	Michael	Sales Representative	1963-07-02 00:00:00.000	1993-10-17 00:00:00.000	Coventry House  Miner Rd.	London	NULL	EC2 7JR	UK	(71) 555-7773
7	King	Robert	Sales Representative	1960-05-29 00:00:00.000	1994-01-02 00:00:00.000	Edgeham Hollow  Winchester Way	London	NULL	RG1 9SP	UK	(71) 555-5598
9	Dodsworth	Anne	Sales Representative	1966-01-27 00:00:00.000	1994-11-15 00:00:00.000	7 Houndstooth Rd.	London	NULL	WG2 7LT	UK	(71) 555-4444


25.)
Select top 1 sup.CompanyName,Sum(Quantity) as Orders from Orders as ord
Inner Join OrderDetails ordd on ordd.OrderID = ord.OrderID
Inner Join Products as pr on pr.ProductID = ordd.ProductID
Inner Join Suppliers as sup on sup.SupplierID = pr.SupplierID
where month(ord.OrderDate)='09' or month(ord.OrderDate) = '10' and year(ord.OrderDate) = '1997'
group by sup.CompanyName
order by Sum(Quantity)
;

CompanyName	Orders
Nord-Ost-Fisch Handelsgesellschaft mbH	15



26.)
select * from Products where ProductID not in (
Select pr.ProductID from Orders as ord
Inner Join OrderDetails ordd on ordd.OrderID = ord.OrderID
Inner Join Products as pr on pr.ProductID = ordd.ProductID
Inner Join Suppliers as sup on sup.SupplierID = pr.SupplierID
where month(ord.OrderDate)='08' and year(ord.OrderDate) = '1997'
);

ProductID	ProductName	SupplierID	QuantityPerUnit	UnitPrice	UnitsInStock	UnitsOnOrder	ReorderLevel	Discontinued
3	Aniseed Syrup	1	12 - 550 ml bottles	10.00	13	70	25	0
8	Northwoods Cranberry Sauce	3	12 - 12 oz jars	40.00	6	0	0	0
9	Mishi Kobe Niku	4	18 - 500 g pkgs.	97.00	29	0	0	1
15	Genen Shouyu	6	24 - 250 ml bottles	15.50	39	0	5	0
16	Pavlova	7	32 - 500 g boxes	17.45	29	0	10	0
17	Alice Mutton	7	20 - 1 kg tins	39.00	0	0	0	1
20	Sir Rodney's Marmalade	8	30 gift boxes	81.00	40	0	0	0
25	NuNuCa Nuß-Nougat-Creme	11	20 - 450 g glasses	14.00	76	0	30	0
27	Schoggi Schokolade	11	100 - 100 g pieces	43.90	49	0	30	0
31	Gorgonzola Telino	14	12 - 100 g pkgs	12.50	0	70	20	0
32	Mascarpone Fabioli	14	24 - 200 g pkgs.	32.00	9	40	25	0
34	Sasquatch Ale	16	24 - 12 oz bottles	14.00	111	0	15	0
37	Gravad lax	17	12 - 500 g pkgs.	26.00	11	50	25	0
38	Côte de Blaye	18	12 - 75 cl bottles	263.50	17	0	15	0
41	Jack's New England Clam Chowder	19	12 - 12 oz cans	9.65	85	0	10	0
47	Zaanse koeken	22	10 - 4 oz boxes	9.50	36	0	0	0
48	Chocolade	22	10 pkgs.	12.75	15	70	25	0
49	Maxilaku	23	24 - 50 g pkgs.	20.00	10	60	15	0
57	Ravioli Angelo	26	24 - 250 g pkgs.	19.50	36	0	20	0
59	Raclette Courdavault	28	5 kg pkg.	55.00	79	0	0	0
63	Vegie-spread	7	15 - 625 g jars	43.90	24	0	5	0
66	Louisiana Hot Spiced Okra	2	24 - 8 oz jars	17.00	4	100	20	0
67	Laughing Lumberjack Lager	16	24 - 12 oz bottles	14.00	52	0	10	0
74	Longlife Tofu	4	5 kg pkg.	10.00	4	20	5	0


27.)
Select emp.EmployeeID,emp.FirstName,emp.LastName,pr.ProductName from Employee emp
cross join Products as pr
where pr.ProductID not in (
Select pr.ProductID from Employee emp
Inner Join Orders as ord on emp.EmployeeID = ord.EmployeeID
Inner Join OrderDetails ordd on ordd.OrderID = ord.OrderID
Inner Join Products as pr on pr.ProductID = ordd.ProductID
)
;

No OutPUT


28.)
select Top 1 CompanyName,Sum(Quantity) as Products
from Shippers as sh 
inner join Orders as ord on sh.ShipperID = ord.ShipperID
inner join OrderDetails as ordd on ordd.OrderID = ord.OrderID where month(OrderDate) in (4,5,6) and YEAR(OrderDate) in (1996,1997) 
group by CompanyName Order by Sum(Quantity) desc;


CompanyName	Products
United Package	2088


29.)
select Top 1 sp.country,Sum(Quantity) as Products
from Suppliers as sp 
Inner Join Products as pr on pr.SupplierID = sp.SupplierID
Inner Join OrderDetails as ordd on ordd.ProductID = pr.ProductID
Inner join Orders as ord on ord.OrderID = ordd.OrderID
where YEAR(ord.OrderDate) in (1997) 
group by sp.Country Order by Sum(Quantity) desc;


country	Products
USA	3246


30.)
select sh.CompanyName,AVG(Datediff(day,ord.OrderDate,ord.ShippedDate)) from Shippers as sh 
Inner join Orders as ord on ord.ShipperID = sh.ShipperID 
group by CompanyName
;

CompanyName	(No column name)
Federal Shipping	7
Speedy Express	8
United Package	9

31.)
select top 1 sh.CompanyName,AVG(Datediff(day,ord.OrderDate,ord.ShippedDate)) as minDays from Shippers as sh 
Inner join Orders as ord on ord.ShipperID = sh.ShipperID 
group by CompanyName
order by AVG(Datediff(day,ord.OrderDate,ord.ShippedDate)) asc
;


CompanyName	(minDays)
Federal Shipping	7

32.)
Select Distinct top 1 ord.OrderID,CONCAT(emp.FirstName,' ',emp.LastName) as FullName,ordd.Quantity,Datediff(day,ord.OrderDate,ord.ShippedDate) as NoOfDays,sh.CompanyName from Orders as ord 
Inner Join OrderDetails as ordd on ordd.OrderID = ord.OrderID
Inner Join Employee as emp on emp.EmployeeID = ord.EmployeeID
Inner Join Shippers as sh on ord.ShipperID = sh.ShipperID 
where ord.ShippedDate is not null and ord.OrderDate is not null
order by Datediff(day,ord.OrderDate,ord.ShippedDate) asc, ordd.Quantity desc;


OrderID	FullName	Quantity	NoOfDays	CompanyName
10774	Margaret Peacock	50	1	Speedy Express


33.)
Select * from (
Select Distinct top 1 '1' as UnionIndex,ord.OrderID,CONCAT(emp.FirstName,' ',emp.LastName) as FullName,
ordd.Quantity,Datediff(day,ord.OrderDate,ord.ShippedDate) as NoOfDays,sh.CompanyName from Orders as ord 
Inner Join OrderDetails as ordd on ordd.OrderID = ord.OrderID
Inner Join Employee as emp on emp.EmployeeID = ord.EmployeeID
Inner Join Shippers as sh on ord.ShipperID = sh.ShipperID 
where ord.ShippedDate is not null and ord.OrderDate is not null
order by Datediff(day,ord.OrderDate,ord.ShippedDate) asc, ordd.Quantity desc
) emp
UNION 
Select * from (
Select Distinct top 1 '2' as UnionIndex, ord.OrderID,CONCAT(emp.FirstName,' ',emp.LastName) as FullName,ordd.Quantity,Datediff(day,ord.OrderDate,ord.ShippedDate) as NoOfDays,sh.CompanyName from Orders as ord 
Inner Join OrderDetails as ordd on ordd.OrderID = ord.OrderID
Inner Join Employee as emp on emp.EmployeeID = ord.EmployeeID
Inner Join Shippers as sh on ord.ShipperID = sh.ShipperID 
where ord.ShippedDate is not null and ord.OrderDate is not null
order by Datediff(day,ord.OrderDate,ord.ShippedDate) desc, ordd.Quantity desc
) emp;


UnionIndex	OrderID	FullName	Quantity	NoOfDays	CompanyName
1	10774	Margaret Peacock	50	1	Speedy Express
2	10660	Laura Callahan	21	37	Speedy Express


34.)
Select * from (
Select Top 1 '1' as ID,pr.ProductID,pr.ProductName, pr.UnitPrice from Orders as ord 
Inner Join OrderDetails as ordd on ordd.OrderID = ord.OrderID
Inner Join  Products as pr on ordd.ProductID = pr.ProductID
where Day(ord.OrderDate) between 7 and 14 and month(ord.OrderDate) = 10 and  year(ord.OrderDate) = 1997
order by pr.UnitPrice asc
) ord
Union
Select * from (
Select Top 1 '2' as ID,pr.ProductID,pr.ProductName, pr.UnitPrice from Orders as ord 
Inner Join OrderDetails as ordd on ordd.OrderID = ord.OrderID
Inner Join  Products as pr on ordd.ProductID = pr.ProductID
where Day(ord.OrderDate) between 7 and 14 and month(ord.OrderDate) = 10 and  year(ord.OrderDate) = 1997
order by pr.UnitPrice desc
) ord;


ID	ProductID	ProductName	UnitPrice
1	24	Guaraná Fantástica	4.50
2	29	Thüringer Rostbratwurst	123.79


35.)
Select Distinct ord.employeeId,sh.shipperId,
Case 
when sh.shipperId = 1 then 'Shipping Federal'
when sh.shipperId = 2 then 'Express Speedy'
when sh.shipperId = 3 then 'United Package'
Else null
End AS ShippingName
from Shippers as sh
Inner join Orders as ord on ord.ShipperID = sh.ShipperID
Inner join Employee as emp on emp.EmployeeID = ord.EmployeeID
where emp.EmployeeID in (1,3,5,7);


employeeId	shipperId	ShippingName
1	1	Shipping Federal
1	2	Express Speedy
1	3	United Package
3	1	Shipping Federal
3	2	Express Speedy
3	3	United Package
5	1	Shipping Federal
5	2	Express Speedy
5	3	United Package
7	1	Shipping Federal
7	2	Express Speedy
7	3	United Package





























































