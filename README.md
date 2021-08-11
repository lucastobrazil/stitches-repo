# POC Monorepo as foundations for the new DS

1. Monorepo using NPM [Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
2. For versioning of packages, using [Lerna](https://github.com/lerna/lerna)
3. Typescript support

# Usage
From the root directory, run `npm install && npm run develop` and you're good to go 👍.

# Packages

## @maki-ds/core
- Basic Typescript package
- Also uses [Stitches](https://stitches.dev/) for styling
- Exposes demo component `<Button>` that uses stitches

## @maki-ds/icons
- Sample library that consumes `@maki-ds/core` 
- Shows TS support (intellisense shows the type)


# Docs
- Gatsby Website
- Consumes/dogfoods the `@maki-ds/core` lib
- HMR works when you rebuild the lib
- Deployed via CI to http://design.dev.geniesolutions.cloud/

## References
- https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
- https://github.com/NiGhTTraX/ts-monorepo

## Demo 

1. Look over structure
2. TSConfig
3. Lerna commands
4. Demo of core being consumed by icons
5. Stitches integration
6. Docs site
