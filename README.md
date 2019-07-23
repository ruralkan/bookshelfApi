# bookshelfApi
Build a Book list api (The Bookshelf api) using Node, Mongo and docker

## The project

Imagine the company you work for called a meeting and invited you to participate. When you arrive, the project manager explains that a major Bookstore hired the company to write an API.

As a proof-of-concept, the retailer requested a book list api ( bookshelf Api) to expose and store books in a collection of book titles. the other purpose is integrate specialized tools, services, or libraries with their own customer and business partners

Your company started the project to write a minimally viable product (MVP) for the bookshelf Api, but the Node developer who was working on it suddenly left the company. The project must be finished, or the customer will take its business elsewhere.

Your role is to finish the JavaScript code started by the previous Node developer and ensure the code meets the functional specs. Are you up to the task?

## User stories

The Bookshelf api MVP consists of 6 user stories. This section contains the stories that you must complete before the MVP can be shown to the customer. Due to the incredibly short timeframe, these stories will act as functional specs for the bookshelf Api MVP.

Each story has a brief description, along with a list of high-level requirements that must be met before the story will be considered accepted.

The stories are implemented in the order given below.

1.	Book collection: return all items in the book collection
	A user needs to be able to find and view all items in the Book collection
    
2.	Books: Find by ID
	Each book in the database has a unique ID, and a user needs to be able to find a specific book in the database by its ID. Given an ID, the system will return a single book from the database that matches the specified ID.

3.	Books: Add new book to collection
	A user needs to be able to add a new book to collection. The system will provide a way to add new book in the database with the following attributes:
		* Title
		* author
		* genre
		* description
		* read


5.	Books: Update a Book
	A user needs to be able to modify the book attributes:
		* Title
		* author
		* genre
		* description
		* read
    
	Given an ID, and values for the updated attribute, the system will provide a way to update the book in the database.


6.	Books: Remove item from book collection
	A user needs to be able to remove an item from the collection.
	Given a book ID, the system will provide a way to remove the book from the database.


Together, these 6 stories define the system’s behavior.