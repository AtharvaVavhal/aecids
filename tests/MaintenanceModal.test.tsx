import React from 'react';
import { render } from '@testing-library/react';
import { MaintenanceModal } from '../components/MaintenanceModal';

test('MaintenanceModal is exported and returns null when closed', () => {
  expect(typeof MaintenanceModal).toBe('function');
  const { container } = render(<MaintenanceModal isOpen={false} onClose={() => {}} />);
  expect(container).toBeEmptyDOMElement();
});
