/****** Object:  Table [dbo].[Employee]    Script Date: 10/25/2010 11:22:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Employee](
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[Title] [varchar](50) NULL,
	[Age] [int] NULL,
	[Salary] [int] NULL
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Smith', N'Programmer', 54, 27000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Brooks', N'General Manager', 55, 40099)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Fanning', N'Programmer', 28, 35000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Moore', N'Programmer', 27, 35000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Finger', N'Fresher', 22, 31500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Brooks', N'Programmer', 27, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Tait', N'Fresher', 20, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Tolstoy', N'Fresher', 21, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Hopkins', N'Programmer', 26, 19500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Miles', N'General Manager', 54, 30000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Moore', N'Software Engineer', 32, 32513)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Duck', N'Programmer', 35, 19300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Hamilton', N'Fresher', 35, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Karan', N'Fresher', 15, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Peitersen', N'Programmer', 40, 32300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Whales', N'Software Engineer', 20, 32300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Karan', N'Programmer', 38, 30260)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Logan', N'Programmer', 23, 20000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Gran', N'Fresher', 10, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Shield', N'Programmer', 25, 19000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Bichel', N'Fresher', 26, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Stone', N'Fresher', 24, 21000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Groove', N'Software Engineer', 47, 23000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Vista', N'Programmer', 27, 37570)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Bang', N'Fresher', 34, 31000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Hamser', N'Fresher', 42, 34000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Bones', N'Fresher', 51, 32000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Luther', N'Programmer', 45, 33000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Marss', N'Fresher', 24, 31500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Tauton', N'Programmer', 25, 32500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Vaughan', N'Programmer', 25, 27000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Garten', N'Programmer', 55, 40099)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'John', N'Whitaker', N'Programmer', 25, 32000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Merci', N'Programmer', 27, 35000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Brown', N'Software Engineer', 20, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Alba', N'Programmer', 27, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Sons', N'Fresher', 20, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Mitchell', N'Fresher', 21, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Bravo', N'Programmer', 26, 19500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Leroy', N'Kings', N'General Manager', 54, 30000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Dolce', N'Programmer', 32, 32513)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Bus', N'Programmer', 35, 19300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Scott', N'Fresher', 35, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Jones', N'Fresher', 15, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Reese', N'Software Engineer', 40, 32300)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Turtle', N'Software Engineer', 40, 25000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Apple', N'Programmer', 38, 30260)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Lisa', N'Hammer', N'Programmer', 23, 20000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Ginger', N'Gold', N'Fresher', 10, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kelly', N'Rise', N'Programmer', 25, 19000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Shawn', N'Bell', N'Fresher', 26, 22000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Michael', N'Moore', N'Fresher', 24, 21000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Anthony', N'Tamahori', N'Programmer', 84, 23000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Mary Ann', N'Horn', N'Programmer', 27, 37570)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Donald', N'Crank', N'Programmer', 34, 31000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Linda', N'Josh', N'Fresher', 42, 34000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Sarah', N'Michael', N'Fresher', 51, 32000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Kevin', N'Long', N'Programmer', 45, 33000)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Conrad', N'Tamahori', N'Software Engineer', 24, 31500)
INSERT [dbo].[Employee] ([FirstName], [LastName], [Title], [Age], [Salary]) VALUES (N'Isabela', N'Moore', N'Programmer', 25, 32500)
