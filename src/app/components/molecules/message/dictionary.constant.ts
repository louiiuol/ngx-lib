export const MESSAGE_DICTIONARY = {
  undefined: {
    icon: 'info',
    color: 'bg-blue-100 border-blue-500 text-blue-900',
  },
  info: { icon: 'info', color: 'bg-blue-100 border-blue-500 text-blue-900' },
  note: {
    icon: 'lightbulb',
    color: 'bg-indigo-100 border-indigo-500 text-indigo-900',
  },
  warn: {
    icon: 'warning',
    color: 'bg-orange-100 border-orange-500 text-orange-900',
  },
  error: { icon: 'error', color: 'bg-red-100 border-red-500 text-red-900' },
  success: { icon: 'done', color: 'bg-teal-100 border-teal-500 text-teal-900' },
  notification: {
    icon: 'bell',
    color: 'bg-surface-100 border-surface-500 text-surface-900',
  },
} as const;
