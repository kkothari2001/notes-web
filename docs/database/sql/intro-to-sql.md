---
slug: sql-intro
title: Intro to SQL
sidebar_position: 1
---

# Intro to SQL

SQL (stands for Structured Query Language) is a declarative programming language that can be used to retrieve, update, and manage data from a database. Being declarative in nature, the user only needs to state the requirements in SQL and the system takes care of how to retrieve and manipulate the data efficiently.

SQL has English-like syntax and is inherently simple. An SQL query generally consists of 3 clauses in the given order:

1. What are the fields you want to display in the result set
2. What is the source of the data?
3. What criteria must be met by the results?

```sql
SELECT *
FROM users
WHERE age>=18
```

:::note
SQL keywords do not have to be uppercase but it is a commonly followed convention to ensure readability.
:::
