# Node on default strips ts and do not support some ts features

node .\app.ts node:internal/modules/run_main:123 triggerUncaughtException( ^

file:///C:/code/Understanding-TypeScript/Sekcja%2020%20Node.js%20and%20Express%20and%20TypeScript/routes/data.ts:6
let TODOS: Todo[] = [];

> enum TODO_TYPE { BASIC, URGENT }

SyntaxError [ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX]: TypeScript enum is not
supported in strip-only mode at parseTypeScript
(node:internal/modules/typescript:63:40) at processTypeScriptCode
(node:internal/modules/typescript:133:42) at stripTypeScriptModuleTypes
(node:internal/modules/typescript:163:10) at ModuleLoader.<anonymous>
(node:internal/modules/esm/translators:656:29) at #translate
(node:internal/modules/esm/loader:559:20) at afterLoad
(node:internal/modules/esm/loader:612:29) at ModuleLoader.loadAndTranslate
(node:internal/modules/esm/loader:617:12) at #createModuleJob
(node:internal/modules/esm/loader:640:36) at #getJobFromResolveResult
(node:internal/modules/esm/loader:353:34) at ModuleLoader.getModuleJobForImport
(node:internal/modules/esm/loader:321:41) { code:
'ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX' }

Node.js v22.23.2

# It can run compilation

NODE --experimental-transform-types app.ts (node:12576) ExperimentalWarning:
Transform Types is an experimental feature and might change at any time (Use
`node --trace-warnings ...` to show where the warning was created)
