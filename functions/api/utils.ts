interface UserData {
  jobRole: string;
  skills: string[];
  experiences: string[];
}

export function validateUserData(data: any): string | null {
  if (typeof data !== 'object' || data === null) {
    return 'Invalid data format';
  }
  if (typeof data.jobRole !== 'string' || !Array.isArray(data.skills) || !Array.isArray(data.experiences)) {
    return 'Missing or incorrect fields';
  }
  return null;
}

export async function processUserData(userData: UserData): Promise<object> {
  // Simulated processing logic for demonstration
  return {
    message: 'User data processed successfully',
    jobRole: userData.jobRole,
    skills: userData.skills,
    experiences: userData.experiences
  };
}
