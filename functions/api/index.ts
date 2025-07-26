// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { AIResumeGeneratorBackendHandler } from './AIResumeGeneratorBackend';
import { DesignTemplateManagerBackendHandler } from './DesignTemplateManagerBackend';
import { JobBoardIntegrationBackendHandler } from './JobBoardIntegrationBackend';
import { UserDataProcessorBackendHandler } from './UserDataProcessorBackend';
import { SubscriptionManagerBackendHandler } from './SubscriptionManagerBackend';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/AIResumeGeneratorBackend") return AIResumeGeneratorBackendHandler(request);
  if (path === "/api/DesignTemplateManagerBackend") return DesignTemplateManagerBackendHandler(request);
  if (path === "/api/JobBoardIntegrationBackend") return JobBoardIntegrationBackendHandler(request);
  if (path === "/api/UserDataProcessorBackend") return UserDataProcessorBackendHandler(request);
  if (path === "/api/SubscriptionManagerBackend") return SubscriptionManagerBackendHandler(request);

  return new Response("Not found", { status: 404 });
}
