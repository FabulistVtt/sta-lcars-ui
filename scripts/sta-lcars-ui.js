console.log("sta-lcars-ui | LCARS module loaded.");

Hooks.on("init", () => {
  console.log("sta-lcars-ui | Initializing LCARS module...");
});

Hooks.on("ready", () => {
  console.log("sta-lcars-ui | Initialization complete!");
});