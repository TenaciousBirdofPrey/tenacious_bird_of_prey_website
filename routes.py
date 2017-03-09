from flask import Flask, render_template
from models import db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost/cacaphon-learnflask'
db.init_app(app)
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/songs")
def songs():
    return  render_template("songs.html")

@app.route("/player")
def player():
    return  render_template("player.html")

if __name__ == "__main__":
    app.run(debug=True)