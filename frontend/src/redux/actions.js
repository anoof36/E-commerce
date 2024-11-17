import { createAction } from "@reduxjs/toolkit";

// Actions (for dispatching to the store)
export const setMode = createAction('auth/setMode'); // No payload
export const setLogin = createAction('auth/setLogin'); // Will accept payload
export const setLogout = createAction('auth/setLogout');