import { validateUserData, processUserData } from './utils';

export async function UserDataProcessorBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
    }

    const contentType = req.headers.get('Content-Type');
    if (contentType !== 'application/json') {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), { status: 415 });
    }

    const userData = await req.json();
    const validationError = validateUserData(userData);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400 });
    }

    const result = await processUserData(userData);
    return new Response(JSON.stringify({ result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500 });
  }
}
