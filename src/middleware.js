import { NextResponse } from 'next/server'

const middleware = (request) => {
    const headers = new Headers(request.headers);
    headers.set('dataFromMiddleware', 'data');
    const resp = NextResponse.next({ request: { headers } });
    return resp;
};

export default middleware;