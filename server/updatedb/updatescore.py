#from score import score_post

import mysql.connector
import time

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="informdb"
)

UPDATE_WAIT_TIME = 2


cursor = db.cursor()

while True:
    print("updating scores...")
    cursor.execute("SELECT id, time, totalLikes, totalDislikes, score FROM articles")
    res = cursor.fetchall()
    totalArticles = len(res)

    for entry in res:
        entryId = entry[0]
        entryPostTime = entry[1]
        entryLikes = entry[2]
        entryDislikes = entry[3]
        oldEntryScore = entry[4]
        
        newScore = 0 #score_post(entryPostTime, entryLikes, entryDislikes)

        cursor.execute("UPDATE articles SET score=" + str(newScore) + " WHERE id=" + str(entryId))
        db.commit()
        print("finished updating article with ID: " + str(entryId))
    print("finished updating article scores")

    print("waiting...")
    time.sleep(UPDATE_WAIT_TIME)

