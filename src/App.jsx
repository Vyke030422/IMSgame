// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { RootRouter } from './import_bundles/_Bundles';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
  <MantineProvider>
    <div className="App">
    <RootRouter />
    </div>
  </MantineProvider>
  );
}
