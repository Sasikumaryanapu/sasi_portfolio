// src/components/ui/Button.js
import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.DEFAULT};
  border: 2px solid transparent;
  outline: none;
  user-select: none;
  white-space: nowrap;
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: white;
          &:hover {
            background-color: ${theme.colors.primary};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primary}10;
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.primary}10;
          }
        `;
      default:
        return css`
          background-color: ${theme.colors.backgroundSecondary};
          color: ${theme.colors.text};
          &:hover {
            background-color: ${theme.colors.backgroundSecondary};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.lg};
          }
          &:active {
            transform: translateY(0);
          }
        `;
    }
  }}

  ${({ size, theme }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5rem 1rem;
          font-size: ${theme.fontSizes.sm};
        `;
      case 'lg':
        return css`
          padding: 1rem 2rem;
          font-size: ${theme.fontSizes.lg};
        `;
      default:
        return css`
          padding: 0.75rem 1.5rem;
        `;
    }
  }}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;