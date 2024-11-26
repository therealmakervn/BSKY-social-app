package main

import (
	"fmt"
	"net/http"
	"os"

	_ "github.com/joho/godotenv/autoload"

	logging "github.com/ipfs/go-log"
	"github.com/urfave/cli/v2"
)

var log = logging.Logger("bskyweb")

func init() {
	logging.SetAllLoggers(logging.LevelDebug)
}

func main() {
	if err := run(os.Args); err != nil {
		log.Fatal(err)
	}
}

func run(args []string) error {
	app := cli.App{
		Name:  "bskyweb",
		Usage: "web server for bsky.app web app (SPA)",
	}

	app.Commands = []*cli.Command{
		&cli.Command{
			Name:   "serve",
			Usage:  "run the server",
			Action: serveMain,
			Flags: []cli.Flag{
				&cli.StringFlag{
					Name:  "host",
					Usage: "Host to listen on",
					Value: "0.0.0.0",
				},
				&cli.StringFlag{
					Name:  "appview-host",
					Usage: "scheme, hostname, and port of PDS instance",
					Value: "http://localhost:2584",
					EnvVars: []string{"ATP_APPVIEW_HOST", "ATP_PDS_HOST"},
				},
			},
		},
	}

	return app.Run(args)
}

func serveMain(c *cli.Context) error {
	host := c.String("host")
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	addr := fmt.Sprintf("%s:%s", host, port)
	log.Infof("Starting server on %s", addr)
	
	fs := http.FileServer(http.Dir("/usr/bin/static"))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path
		_, err := os.Stat("/usr/bin/static" + path)
		
		if os.IsNotExist(err) {
			http.ServeFile(w, r, "/usr/bin/static/index.html")
			return
		}
		
		fs.ServeHTTP(w, r)
	})
	
	return http.ListenAndServe(addr, nil)
}
