from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection


@app.route("/")
def index():
    # mars_record = mongo.db.mars.find_one()
    # print(mars_record)
    return render_template("charts.html")

@app.route("/charts")
def charts():
    return render_template("charts.html")


if __name__ == "__main__":
    app.run()