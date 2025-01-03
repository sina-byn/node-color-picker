import React from 'react';
import { Box, Text, type TextProps } from 'ink';

// *  utils
const spaces = (count: number = 10) => Array(count).fill(' ').join('');

// * types
type Color = TextProps['backgroundColor'];

type ColorProps = { color: Color; active?: boolean };

const ColorBox = ({ color, active }: ColorProps) => {
  return (
    <Box width={5} height={4}>
      {active ? (
        <Text backgroundColor={color}>
          {spaces(7)}&#9679;{spaces(2)}
        </Text>
      ) : (
        <Text backgroundColor={color}>{spaces()}</Text>
      )}
    </Box>
  );
};

export default ColorBox;
