# yargsCLIMongoose

Activity questions

1. Describe what Node.js is and what can be achieved with it.

Javascript has existed since 1995 and has since taken over as the dominant language for web development. For much of its life, JavaScript was used mainly for client-side scripting inside 'script' tags executing in web browsers. This limitation meant that developers were often working in many different languages and frameworks between the front-end (client-side) and backend (server-side) aspects of a web application.

Although there were other projects to bring JavaScript to server-side applications, the functionality took off with the launch of Node.js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.

2. Explain the purpose of an ODM (e.g. Mongoose.js).

Object Document Mapper (ODM)'s like Mongoose.js make using MongoDB easier by translating documents in a MongoDB database to objects in the program. Besides MongooseJS there are several other ODM’s that have been developed for MongoDB including Doctrine, MongoLink , and Mandango.

The three main advantages of using Mongoose versus native MongoDB are:

*MongooseJS provides an abstraction layer on top of MongoDB that eliminates the need to use named collections.

*Models in Mongoose perform the bulk of the work of establishing up default values for document properties and validating data.

*Functions may be attached to Models in MongooseJS. This allows for seamless incorporation of new functionality.

Queries use function chaining rather than embedded mnemonics which result in code that is more flexible and readable, therefore more maintainable as well.
The net result of these is the simplification of database access from applications. The main disadvantage of Mongoose is that abstraction comes at the cost of performance compared to that of native MongoDB.


3. Describe what a database is. && 4. Describe what a database management system does.

A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.

Data within the most common types of databases in operation today is typically modeled in rows and columns in a series of tables to make processing and data querying efficient. The data can then be easily accessed, managed, modified, updated, controlled, and organized. Most databases use structured query language (SQL) for writing and querying data.




5. Discuss the different options of database software (e.g. understand the bigger picture view).

Databases have evolved dramatically since their inception in the early 1960s. Navigational databases such as the hierarchical database (which relied on a tree-like model and allowed only a one-to-many relationship), and the network database (a more flexible model that allowed multiple relationships), were the original systems used to store and manipulate data. Although simple, these early systems were inflexible. In the 1980s, relational databases became popular, followed by object-oriented databases in the 1990s. More recently, NoSQL databases came about as a response to the growth of the internet and the need for faster speed and processing of unstructured data. Today, cloud databases and self-driving databases are breaking new ground when it comes to how data is collected, stored, managed, and utilized.

resources:

https://medium.com/chingu/an-overview-of-mongodb-mongoose-b980858a8994

https://www.oracle.com/uk/database/what-is-database/

https://www.codecademy.com/article/what-is-node
