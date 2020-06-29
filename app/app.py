from flask import Flask
from flask import render_template
from flask import request


app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello_world():
    return render_template('index.html')


@app.route('/interact', methods=['POST'])
def interact():
    fromDave = request.data.decode('UTF-8')
    fromHAL = "<from HAL>"
    return render_template('chat_msg_resp.html', fromDave = fromDave, fromHAL = fromHAL)


@app.route('/reset', methods=['POST'])
def reset():
    return render_template('chat_init.html')


if __name__ == '__main__':
    app.run()