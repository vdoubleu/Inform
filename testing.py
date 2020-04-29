import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="informdb"
)

mycursor = mydb.cursor()

#mycursor.execute("CREATE DATABASE informdb")
#mycursor.execute("CREATE TABLE articles (title VARCHAR(255), body TEXT, catagory VARCHAR(20), authorname VARCHAR(255), date bigint)")


ATITLE = "test article title"
ABODY = "test article body"
ACATAGORY = "test cat"
AUTHOR_NAME = "John Doe"

import datetime
ADATE = datetime.datetime.now()

article = (ATITLE, ABODY, ACATAGORY, AUTHOR_NAME)


"""
#add article
addArticle = "INSERT INTO articles(title, body, catagory, authorname) VALUES (%s, %s, %s, %s)"
mycursor.execute(addArticle, article)
mydb.commit()
"""
"""
#getArticle
mycursor.execute("SELECT * FROM articles WHERE title='" + ATITLE + "' AND authorname='" + AUTHOR_NAME + "' AND catagory='" + ACATAGORY +"'")
out = mycursor.fetchone()
"""

ONAME = "JOHN DOE"
OVALUE = 0

"""
#add/change opinion
mycursor.execute("SELECT * FROM opinions WHERE name='" + ONAME + "'")
if len(mycursor.fetchall()) == 0:
    mycursor.execute("INSERT INTO opinions(name, value) VALUE (%s, %d)")
else:
    mycursor.execute("UPDATE opinions SET value=" + OVALUE + " WHERE name='" + ONAME +"'")
mydb.commit()
"""

"""
#get opinion
mycursor.execute("SELECT value FROM opinions WHERE name='" + ONAME + "'")
out = mycursor.fetchone()
"""


#getArticle = "SELECT * FROM informdb WHERE title='" + TITLE + "'"

"""
sqlFormula = "INSERT INTO students(name, age) VALUES (%s, %s)"

student1 = [("Rachel", 22),
("jogn", 22),
("Rachel", 22),
("Rachel", 22),
("Rachel", 22),
        ("Rachel", 22),]


#mycursor.executemany(sqlFormula, student1)

mycursor.execute("SELECT name FROM students")

myresult = mycursor.fetchall()

for row in myresult:
    print(row)

#mydb.commit()
"""
