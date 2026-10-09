export const subscribeArena = (game, state, access) =>
  typeof window !== "undefined" && window.ArenaRealtime?.connect
    ? window.ArenaRealtime.connect(game, state, access)
    : () => {};
