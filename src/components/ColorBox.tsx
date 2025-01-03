import React from 'react';
import { Box, Text } from 'ink';

// *  utils
const spaces = (count: number = 10) => Array(count).fill(' ').join('');

const bottomCenter = (text: string) => spaces(7) + text + spaces(2);

// * types
import type { Color } from '../index.js';

type ColorProps = { color: Color; active?: boolean };

const ColorBox = ({ color, active }: ColorProps) => {
  return (
    <Box width={5} height={4}>
      {active ? (
        <Text backgroundColor={color}>{bottomCenter('\u25CF')}</Text>
      ) : (
        <Text backgroundColor={color}>{spaces()}</Text>
      )}
    </Box>
  );
};

export default ColorBox;
