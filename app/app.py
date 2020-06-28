from flask import Flask
from flask import render_template
from flask import request


app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')

@app.route('/interact', methods=['POST'])
def msg_resp():
    fromDave = request.data.decode('UTF-8')
    fromHAL = "<from HAL>"
    return render_template('chat_msg_resp.html', fromDave = fromDave, fromHAL = fromHAL)


if __name__ == '__main__':
    app.run()