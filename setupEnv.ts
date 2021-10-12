import { loadEnvConfig } from '@next/env';

export default (): void => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};
