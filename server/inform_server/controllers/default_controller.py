import connexion
import six

from inform_server.models.article import Article  # noqa: E501
from inform_server.models.opinion import Opinion  # noqa: E501
from inform_server import util

import mysql.connector
import time

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="informdb"
)

cursor = db.cursor()

def get_articles(start=None, max_amount=None, author=None):  # noqa: E501
    """gets articles

    By passing in the appropriate options, you can search for  the desired articles in the system  # noqa: E501

    :param start: start at the nth position in terms of articles to return
    :type start: int
    :param max_amount: the max amount of articles to return
    :type max_amount: int
    :param author: returns only articles by the specified author
    :type author: str

    :rtype: List[Article]
    """
   
    m = max_amount if max_amount is not None else 100
    s = start if start is not None else 1

    if author is not None:
        cursor.execute("SELECT * FROM articles WHERE id BETWEEN " + str(s) + " AND " + str((s + m)) + " AND author='" + author + "'") 
    else:
        cursor.execute("SELECT * FROM articles WHERE id BETWEEN " + str(s) + " AND " + str((s + m)))

    out = cursor.fetchall()

    return out

def get_opinion(id=None, user=None):  # noqa: E501
    """gets opinion

    gets a users opinion on an article # noqa: E501

    :param id: article id
    :type id: int
    :param user: user name
    :type user: str

    :rtype: int
    """
    return 'do some magic!'


def post_articles(body=None):  # noqa: E501
    """post article

    Adds an article to the system # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    res = {}

    if connexion.request.is_json:
        body = Article.from_dict(connexion.request.get_json())  # noqa: E501

        newArticle = (body.title, body.body, body.category, body.author, body.post_time)
        addArticle = "INSERT INTO articles(title, body, category, author, time) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(addArticle, newArticle)
        db.commit()

        cursor.execute("SELECT id FROM articles WHERE title='" + body.title + "' AND author='" + body.author + "' AND category='" + body.category +"' AND time=" + str(body.post_time))
        articleID = cursor.fetchall()

        res = {"id": articleID[0][0], "title": body.title, "body": body.body, "category": body.category, "author": body.author, "postTime": body.post_time}

    return res 


def post_opinion(body=None):  # noqa: E501
    """send opinion

    Adds an opinion # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Opinion.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
