export async function DesignTemplateManagerBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), {
        status: 415,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const body = await req.json();
    const templateType = body.templateType;

    if (typeof templateType !== 'string' || !templateType) {
      return new Response(JSON.stringify({ error: 'Invalid template type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Here we would typically fetch or generate the design template based on the templateType
    // For now, we will just echo back a success message with the templateType

    const response = {
      message: 'Template processed successfully',
      templateType: templateType
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
