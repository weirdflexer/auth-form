export enum AppRoute {
  index = "/",
  auth = "/auth",
  register = "/register",
  error404 = "*",
}

export enum AuthStatus {
  invalidCredential = "auth/invalid-credential",
  userNotFound = "auth/user-not-found",
  wrongPassword = "auth/wrong-password",
  emailAlreadyInUse = "auth/email-already-in-use",
  tooManyRequests = "auth/too-many-requests",
}

export enum AppStateClasses {
  isDomReady = "is-dom-ready",
}

export type EmailType = string | null;

export type TokenType = string;
