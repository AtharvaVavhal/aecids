import '@testing-library/jest-dom/extend-expect';

// Mock framer-motion to avoid animation complexity in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }: any) => children,
    span: ({ children }: any) => children,
  },
  AnimatePresence: ({ children }: any) => children,
}));

// Mock lucide-react icons as simple components
jest.mock('lucide-react', () => {
  return new Proxy({}, {
    get: () => (props: any) => {
      return null;
    }
  });
});
