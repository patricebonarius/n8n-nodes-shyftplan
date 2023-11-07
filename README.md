# n8n node for shyftplan

First trial to create a costum n8n node for shyftplan.
derived from: https://github.com/n8n-io/n8n-nodes-starter

### Setup

1. clone this repo
2. npm install n8n -g (on mac -> /usr/local/lib/node_modules/)
3. cd 'local repo root folder'
4. npm link
5. cd ~/.n8n/nodes or cd ~/.n8n/custom
6. if those dirs do not exist -> mkdir ~/.n8n/nodes or ~/.n8n/custom
7. in ~/.n8n/nodes -> npm link 'his root folder > package.json.name'

### Then

- npm run build
- n8n start to start dev server
- always save each file you made changes to!!!

#### TroublesShooting

- if inputs do not seem to work try as JSON input
  `{{ value }}`
