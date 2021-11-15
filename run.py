from flask import Flask
from flask import render_template
import http.server
import os

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('home.html')
    
def run():
    os.chdir("./")
    port = 8080
    http.server.SimpleHTTPRequestHandler.extensions_map[".wasm"] = "application/wasm"
    httpd = http.server.HTTPServer(("localhost", port), http.server.SimpleHTTPRequestHandler)
    print("Running on port %d" % port)
    httpd.serve_forever()

if __name__ == '__main__':
    from threading import Thread
    Thread(target=run, daemon=True).start() 
    app.run(host='localhost', port=5000)



