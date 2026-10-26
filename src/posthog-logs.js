import posthog from './posthog.js';

const posthogLogs = {
  info(message, attributes) {
    posthog?.logger.info(message, attributes);
  },
};

export default posthogLogs;
