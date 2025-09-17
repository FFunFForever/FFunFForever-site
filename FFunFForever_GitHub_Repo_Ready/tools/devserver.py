import http.server, socketserver, os, pathlib, webbrowser
root = pathlib.Path(__file__).parent.parent/'docs'
os.chdir(root)
PORT=8000
Handler=http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(('127.0.0.1',PORT),Handler) as httpd:
 print(f'Serving {root} at http://127.0.0.1:{PORT}')
 try: webbrowser.open(f'http://127.0.0.1:{PORT}')
 except Exception: pass
 httpd.serve_forever()
