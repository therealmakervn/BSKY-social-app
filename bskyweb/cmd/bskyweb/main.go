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
			Action: serve,
			Flags: []cli.Flag{
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

func serve(c *cli.Context) error {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	addr := fmt.Sprintf("0.0.0.0:%s", port)
	log.Infof("Starting server on %s", addr)
	
	return http.ListenAndServe(addr, http.FileServer(http.Dir("static")))
}
