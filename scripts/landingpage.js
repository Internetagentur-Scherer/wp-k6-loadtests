import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<800'],
    http_req_failed: ['rate<0.01'],
  },
};

const TARGET = __ENV.TARGET_URL || 'https://example.com/';

export default function () {
  const res = http.get(TARGET, { headers: { 'User-Agent': 'k6-loadtest' } });
  check(res, { 'status 200': (r) => r.status === 200, 'has html': (r) => r.body && r.body.includes('<html') });
  sleep(1);
}
