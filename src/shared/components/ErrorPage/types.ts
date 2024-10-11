export type ServerErrorStatus = 403 | 404 | 500 | 503

export type ErrorPagePropsType = {
  code: ServerErrorStatus
}
