import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Header tests', () => {
  it('should render', () => {
    render(<h1>hola</h1>);
    screen.getByText('hola');
  });
});
