#!/usr/bin/env python3
"""
Local dev server + browser launcher for this project.

Why this exists: opening resume.html directly (double-clicking it, a
file:// URL) breaks the PDF generator's fetch('resume.html') call, since
browsers block fetch() on the file:// protocol. Serving the folder over
plain HTTP fixes that and lets you click between pages normally.

Usage:
    python3 launch.py            # serves this folder, opens the browser
    python3 launch.py --port 5500
    python3 launch.py --page resume.html   # force which page opens

Stop the server with Ctrl+C.
"""

import argparse
import http.server
import os
import socket
import socketserver
import sys
import threading
import webbrowser

DEFAULT_PORT = 8000
# Checked in order; the first one found in this folder is opened automatically.
CANDIDATE_START_PAGES = ["index.html", "resume.html"]


def find_free_port(preferred: int) -> int:
    """Use the preferred port if free, otherwise let the OS pick one."""
    for port in (preferred, 0):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(("127.0.0.1", port))
                return s.getsockname()[1]
            except OSError:
                continue
    raise RuntimeError("Could not find a free port")


def pick_start_page(root: str) -> str:
    for name in CANDIDATE_START_PAGES:
        if os.path.isfile(os.path.join(root, name)):
            return name
    # Fall back to the first .html file we find, alphabetically.
    html_files = sorted(f for f in os.listdir(root) if f.lower().endswith(".html"))
    if html_files:
        return html_files[0]
    return ""  # no HTML found — just open the directory listing


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=DEFAULT_PORT, help="Port to serve on")
    parser.add_argument("--page", default=None, help="Specific page to open, e.g. resume.html")
    parser.add_argument("--no-browser", action="store_true", help="Start the server without opening a browser")
    args = parser.parse_args()

    project_root = os.path.dirname(os.path.abspath(__file__))
    os.chdir(project_root)

    port = find_free_port(args.port)
    start_page = args.page if args.page is not None else pick_start_page(project_root)
    url = f"http://localhost:{port}/{start_page}"

    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("127.0.0.1", port), handler) as httpd:
        print(f"Serving {project_root}")
        print(f"  -> {url}")
        print("Press Ctrl+C to stop.")

        if not args.no_browser:
            # Open the browser slightly after the server starts accepting connections.
            threading.Timer(0.3, lambda: webbrowser.open(url)).start()

        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server.")
            sys.exit(0)


if __name__ == "__main__":
    main()