
type LogLevel = "INFO" | "WARN" | "ERROR";

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  meta?: any;
}

class CustomLogger {
  private logs: LogEntry[] = [];

  private log(level: LogLevel, message: string, meta?: any) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      meta,
    };
    this.logs.push(entry);
  }

  info(message: string, meta?: any) {
    this.log("INFO", message, meta);
  }

  warn(message: string, meta?: any) {
    this.log("WARN", message, meta);
  }

  error(message: string, meta?: any) {
    this.log("ERROR", message, meta);
  }

  getLogs() {
    return this.logs;
  }
}

export const logger = new CustomLogger();