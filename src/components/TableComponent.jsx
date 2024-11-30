import { useEffect } from "react";
import { LoggerWrapperService } from "../services/LoggerWrapperService";

const TableComponent = () => {
  const logger = new LoggerWrapperService("TableComponent");

  useEffect(() => {
    logger.trace("ngOnInit() called");

    // Simulate ngOnInit
    initFields();
    logger.trace("ngOnInit() returning");

    return () => {
      logger.trace("ngOnDestroy() called");
      cleanupSubscriptions();
      logger.trace("ngOnDestroy() returning");
    };
  }, []);

  const initFields = () => {
    logger.trace("initFields() called");
  };

  const cleanupSubscriptions = () => {
    logger.trace("cleanupSubscriptions() called");
  };

  return <div>Table Component</div>;
};

export default TableComponent;
