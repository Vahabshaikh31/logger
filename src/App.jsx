import { useEffect } from "react";
import { LoggerService } from "./services/LoggerService";

const App = () => {
  useEffect(() => {
    LoggerService.trace("This is a trace message");
    LoggerService.debug("This is a debug message");
    LoggerService.info("This is an info message");
    LoggerService.warn("This is a warning message");
    LoggerService.error("This is an error message");
  }, []);

  return <div>Hello, LoggerService!</div>;
};

export default App;
