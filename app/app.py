from flask import Flask
from flask import render_template


app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')

@app.route('/interact', methods=['POST'])
def msg_resp():
    print("/interact called ...")
    return "test test test" #render_template('chat_msg_resp.html')


if __name__ == '__main__':
    app.run()