from pathlib import Path


ROOT = Path(__file__).resolve().parent
PORT = 5000

try:
    from flask import Flask, send_from_directory
except ImportError:
    Flask = None


if Flask:
    app = Flask(__name__, static_folder="static", static_url_path="/static")

    @app.after_request
    def add_no_cache_headers(response):
        response.headers["Cache-Control"] = "no-store"
        return response

    @app.route("/")
    @app.route("/login")
    @app.route("/dashboard")
    def index():
        return send_from_directory(ROOT, "index.html")

else:
    from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

    class DemoHandler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(ROOT), **kwargs)

        def end_headers(self):
            self.send_header("Cache-Control", "no-store")
            super().end_headers()

        def do_GET(self):
            if self.path in {"/", "/login", "/dashboard"}:
                self.path = "/index.html"
            return super().do_GET()


if __name__ == "__main__":
    if Flask:
        app.run(host="127.0.0.1", port=PORT, debug=True, use_reloader=False)
    else:
        server = ThreadingHTTPServer(("127.0.0.1", PORT), DemoHandler)
        try:
            print(f"BridgePath AI demo running at http://127.0.0.1:{PORT}")
            print("Press Ctrl+C to stop.")
        except Exception:
            pass
        server.serve_forever()
