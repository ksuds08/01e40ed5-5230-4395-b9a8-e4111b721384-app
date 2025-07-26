export async function JobBoardIntegrationBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const requestBody = await req.json();

    if (!validateRequestBody(requestBody)) {
      return new Response(JSON.stringify({ error: 'Invalid input' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { jobTitle, skills } = requestBody;
    const jobListings = await fetchJobListings(jobTitle, skills);

    return new Response(JSON.stringify({ jobListings }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function validateRequestBody(body: any): body is { jobTitle: string, skills: string[] } {
  return body && typeof body.jobTitle === 'string' && Array.isArray(body.skills) && body.skills.every(skill => typeof skill === 'string');
}

async function fetchJobListings(jobTitle: string, skills: string[]): Promise<any> {
  const apiUrl = `https://example-job-board-api.com/search?jobTitle=${encodeURIComponent(jobTitle)}&skills=${encodeURIComponent(skills.join(','))}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Failed to fetch job listings');
  }

  return await response.json();
}