
export const ResponseHandler = async ({ message, data }: { message?: string, data?: any }) => {
  let payload = data
  return new Response(JSON.stringify({
    status: 200,
    message: message ? message : 'OK',
    data: payload ? payload : undefined,
  }), {
    status: 200,
    headers: {
      "content-type": "application/json;charset=UTF-8"
    }
  })
}
