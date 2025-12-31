import { SOURCE_DISPLAY_NAMES } from '../types';
import type { LogEntry } from '../types';

/**
 * Formats a data source code to human-readable display name
 * @param source - Source system identifier
 * @returns Human-readable name
 */
export const formatSourceName = (source: LogEntry['source']): string => {
  return SOURCE_DISPLAY_NAMES[source];
};

/**
 * Formats system list for display
 * @param sources - Array of source identifiers
 * @returns Comma-separated list of display names
 */
export const formatSourceList = (sources: LogEntry['source'][]): string => {
  return sources.map(formatSourceName).join(', ');
};
