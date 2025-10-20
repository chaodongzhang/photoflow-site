import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Brand from './Brand';

describe('Brand', () => {
  it('renders brand text', () => {
    render(<Brand />);
    expect(screen.getByText(/PhotoFlow/i)).toBeInTheDocument();
  });
});

